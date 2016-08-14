import './usuarioDetalhes.module.js';

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import {Meteor} from 'meteor/meteor';
import usuarioDetalhes from './usuarioDetalhes.html';

import {Usuarios} from '../../../api/usuarios/index.js';
import {ContainersLivros} from '../../../api/containerLivro/index.js';


class UsuarioDetalhes{

    constructor($stateParams, $scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);

        this.emprestimosArray;
        this.usuarioId = $stateParams.usuarioId;
        this.searchTitulo = '';

        this.subscribe('usuarios',()=>{},{
          onStart: function () {
          }
        });

       this.subscribe('containersLivros');

        this.mostrarInputNome = false;
        this.mostrarInputMatricula = false;
        this.mostrarInputCurso = false;
        this.mostrarInputCategoria = false;


        this.podeEmprestarLivro = true;
        this.numeroLivrosEmprestados = 0;


        this.helpers({
            usuario(){
                return Usuarios.findOne({_id:$stateParams.usuarioId});
            },
            livros(){
                this.getReactively('searchTitulo');

              if(this.searchTitulo !== ''){
                return ContainersLivros.find();
              }
              else{
                  return [];
              }
            },
        });
      this.getReactively('podeEmprestarLivro');
    }

    atualizarPodeEmprestarLivro(usuario){
        if(usuario.emprestimos.length >= 3){
            podeEmprestarLivro = false;
        }
    }

    isFuncionario(){
        let username = Meteor.users.findOne(Meteor.userId()).username;

        if(Usuarios.findOne({matricula:username}).categoriaUsuario === 'funcionario'){
            return true;
        }
        return false;
    }


    salvar(){
      Usuarios.update({_id:this.usuario._id},{
          $set:{
            name: this.usuario.name,
            matricula: this.usuario.matricula,
            curso: this.usuario.curso,
            categoriaUsuario: this.usuario.categoriaUsuario,
            multas: this.usuario.multas,
            podePegarLivros: this.podePegarLivros
          }
      });
    }


    jaTemEsteLivro(containerlivro, emprestimosArray){
    	for(let i=0; i<emprestimosArray.length; i++){
    		if(emprestimosArray[i].titulo === containerlivro.livro.titulo){
    			return true;
    		}
    	}
	      return false;
    }

    emprestarLivro(containerLivro){

        if(this.podeEmprestarLivro){

            let umMinutoEmMileSegundos = 60000;
            let vinteDiasEmMileSegundos = 1728000000;
            let dataDeEmprestimo = new Date();
//            let dataDeDevolucao = new Date(dataDeEmprestimo.getTime() + vinteDiasEmMileSegundos);


            let dataDeDevolucao = new Date(dataDeEmprestimo.getTime() + umMinutoEmMileSegundos);


            containerLivro.quantidade--;

            if(containerLivro.quantidade <=1){
              containerLivro.disponivel = false;
            }

            let emprestimoAux = {
                'idLivro': containerLivro._id,
                'titulo' : containerLivro.livro.titulo,
                'dataEmprestimo': new Date(),
                'dataDevolucao': dataDeDevolucao,
                'diasAtrasados':0,
                'multa':0
            }

            Usuarios.update({_id:this.usuario._id},
              {
                $push:{'emprestimos':emprestimoAux}
              }
            );

            ContainersLivros.update(
                {_id:containerLivro._id}, {
                    $set:{
                        quantidade: containerLivro.quantidade,
                        disponivel: containerLivro.disponivel
                    }
                });

            this.atualizarPodeEmprestarLivro(this.usuario);
        }

    }


    devolverLivro(emprestimo){

        let containerLivro = ContainersLivros.findOne({_id:emprestimo.idLivro});
        let multaDescontada = this.usuario.multas - emprestimo.multa;

        containerLivro.quantidade++;
        if(containerLivro.quantidade > 1){
          containerLivro.disponivel = true;
        }

        Usuarios.update({_id:this.usuario._id}, {

            $pull:{'emprestimos':{'idLivro':emprestimo.idLivro}},
            $set:{
            	multas: multaDescontada
            }
        }
        );

        ContainersLivros.update(
            {_id:containerLivro._id}, {
             $set:{
                quantidade: containerLivro.quantidade,
                disponivel: containerLivro.disponivel
            }
        });

        this.atualizarPodeEmprestarLivro(this.usuario);

    }



    toggleInputNome(){
        return this.mostrarInputNome = !this.mostrarInputNome;
    }

    toggleInputMatricula(){
        return this.mostrarInputMatricula = !this.mostrarInputMatricula;
    }
    toggleInputCurso(){
        return this.mostrarInputCurso = !this.mostrarInputCurso;

    }
    toggleInputCategoria(){
        return this.mostrarInputCategoria = !this.mostrarInputCategoria;
    }




}

export default angular.module('usuarioDetalhes')
.component('usuarioDetalhes',{
    templateUrl: 'imports/ui/components/usuarioDetalhes/usuarioDetalhes.html',
    controller: UsuarioDetalhes
});
