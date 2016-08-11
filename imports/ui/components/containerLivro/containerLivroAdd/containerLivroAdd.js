import './containerLivroAdd.module.js';

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import {Meteor} from 'meteor/meteor';

import {ContainersLivros} from '../../../../api/containerLivro/index.js';

import containerLivroAdd from './containerLivroAdd.html';


class ContainerLivroAdd{

  constructor($scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);

    this.mostarAddPalavraChave = false;

    this.novoContainerLivro = {
      livro:{
          titulo :'',
          autor: '',
          curso:'',
          palavrasChaves:[],
          paginas:'',
          tipo:'',
      },
      quantidade:'',
      disponivel: true
    };

    this.getReactively('this.novoContainerLivro.palavrasChaves');
    this.helpers({
    });
  }

    showAddPalavraChave(){
        this.mostarAddPalavraChave = true;
    }

    hideAddPalavraChave(){
        this.mostarAddPalavraChave = false;
    }

    adicionarPalavrasChaves(palavra){
        this.novoContainerLivro.livro.palavrasChaves.push(palavra);
        this.hideAddPalavraChave();
    }

  salvarNovoContainerLivro(){
    let podeSalvar = false;

    Meteor.call('salvarLivro',this.novoContainerLivro, Meteor.userId(), (error)=>{

      if(error){
        console.log('O livro não foi criado', error);
      }else{
        podeSalvar = true
        console.log('Usuário salvo');
      }
    });

    this.reset();
  }

  reset(){

    this.novoContainerLivro = {
      livro:{
        titulo :'',
        autor: '',
        curso:'',
        palavrasChaves:[],
        paginas:'',
        tipo:'',
      },
      quantidade:'',
      disponivel: true,
    };
  }

}


export default angular.module('containerLivroAdd')
.component('containerLivroAdd',{
  templateUrl: 'imports/ui/components/containerLivro/containerLivroAdd/containerLivroAdd.html',
  controller: ContainerLivroAdd
});
