import './homeLayout.module.js';


import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Accounts } from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';
import {Usuarios} from '../../../api/usuarios/index.js';


//Template
import homeLayout from './homeLayout.html';

class HomeLayout{

 constructor($scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);

    this.novoUser = {};
    this.novoUsuario = {};
  }




  saveUser(){

    let podeSalvar = false;

    this.novoUsuario = {
      name:this.novoUser.profile.name,
      matricula: this.novoUser.username,
      curso: this.curso,
      categoriaUsuario: this.categoriaUsuario,
      emprestimos: []
    };

    Meteor.call('salvarNovoUser',this.novoUser, this.novoUsuario,Meteor.userId(),
      (error)=>{
        if(error){
          console.log('O usuário não foi criado', error);
        }else{
          podeSalvar = true
          console.log('Usuário salvo');
        }
      });




    this.reset();
  }

  reset(){
    this.novoUser = {};
  }

  isAdicionandoFuncionario(){
    return this.categoriaUsuario === "funcionario";
  }




}

const name = 'homeLayout';

export default angular.module(name).component(name,{
        templateUrl:'imports/ui/components/homeLayout/homeLayout.html',
        controller: HomeLayout
    });


