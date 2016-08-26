import './containerLivroDetalhes.module.js';

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import {Meteor} from 'meteor/meteor';

import containerLivroDetalhes from './containerLivroDetalhes.html';

import {Usuarios} from '../../../../api/usuarios/index.js';
import {ContainersLivros} from '../../../../api/containerLivro/index.js';


class ContainerLivroDetalhes{

    constructor($scope, $reactive, $stateParams){
        'ngInject';

        $reactive(this).attach($scope);
        this.livroId = $stateParams.livroId;

        this.subscribe('containersLivros');
        this.palavraChaveAntiga ="";

        this.subscribe('usuarios');



        this.helpers({

            containerLivro(){
                return ContainersLivros.findOne({_id:$stateParams.livroId});
            },
            palavrasChavesArray(){
                return this.containerLivro.livro.palavrasChaves;
            }
        });
    }

    isFuncionario(){
        let username = Meteor.users.findOne(Meteor.userId()).username;
        console.log("Categoria: ", Usuarios.findOne({matricula:username}).categoriaUsuario);
        if(Usuarios.findOne({matricula:username}).categoriaUsuario === 'funcionario'){
            return true;
        }
        return false;
    }



    salvarLivro(){
        ContainersLivros.update({_id:this.containerLivro._id},{
            $set:{
                livro:{
                    titulo: this.containerLivro.livro.titulo,
                    autor: this.containerLivro.livro.autor,
                    curso: this.containerLivro.livro.curso,
                    palavrasChaves: this.containerLivro.livro.palavrasChaves,
                    paginas: this.containerLivro.livro.paginas,
                    tipo: this.containerLivro.livro.tipo
                },
                quantidade: this.containerLivro.quantidade
            }
        });



    }


    excluir(){
        ContainersLivros.remove({_id:this.containerLivro._id});
    }

    adicionarPalavrasChaves(){

        this.mostrarInputPalavrasChaves = true;

          //  ContainersLivros.update({_id:this.containerLivro._id},{
        //        $addToSet:{"livro.palavrasChaves": ""}

        ContainersLivros.update({_id:this.containerLivro._id},{
            $push:{"livro.palavrasChaves": ""}
        });



    }

    editarPalavraChave(palavra){

        Meteor.call('editarPalavraChave',this.containerLivro._id, palavra, this.palavraChaveAntiga,

            Meteor.userId(),
            (error)=>{

                if(error){
                    console.log('Ocorreu um erro no Update de Palavra Chave', error);
                }else{
                    console.log('Update de Pavara chave com sucesso!!!');
                }

            });



        this.toggleInputPalavrasChaves();
    }

    getPalavraChaveEditar(palavra){
        this.palavraChaveAntiga = palavra;

        this.toggleInputPalavrasChaves();
    }

    toggleInputPalavrasChaves(palavra){

        return this.mostrarInputPalavrasChaves = !this.mostrarInputPalavrasChaves;
    }



    toggleInput(mostrarInput){
        this.salvarLivro();
        return this.mostrarInput = !this.mostrarInput;
    }




    toggleInputTitulo(){
        return this.mostrarInputTitulo = !this.mostrarInputTitulo;
    }

    toggleInputTitulo(){
        this.salvarLivro();
        return this.mostrarInputTitulo = !this.mostrarInputTitulo;
    }

    toggleInputAutor(){
        this.salvarLivro();
        return this.mostrarInputAutor = !this.mostrarInputAutor;
    }
    toggleInputDepartamento(){
        this.salvarLivro();
        return this.mostrarInputDepartamento = !this.mostrarInputDepartamento;

    }
    toggleInputTipo(){
        this.salvarLivro();
        return this.mostrarInputTipo = !this.mostrarInputTipo;
    }

    toggleInputPaginas(){
        this.salvarLivro();
        return this.mostrarInputPaginas = !this.mostrarInputPaginas;
    }
    toggleInputQuantidade(){
        this.salvarLivro();
        return this.mostrarInputQuantidade = !this.mostrarInputQuantidade;
    }


}

export default angular.module('containerLivroDetalhes')
.component('containerLivroDetalhes',{
    templateUrl: 'imports/ui/components/containerLivro/containerLivroDetalhes/containerLivroDetalhes.html',
    controller: ContainerLivroDetalhes
});
