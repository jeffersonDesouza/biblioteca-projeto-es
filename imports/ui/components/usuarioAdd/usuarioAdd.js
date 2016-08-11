import './usuarioAdd.module.js';

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Accounts } from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';


import {Usuarios} from '../../../api/usuarios/index.js';


import usuarioAdd from './usuarioAdd.html'

class UsuarioAdd{

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
      podePegarLivros:true,
      emprestimos: [],
      multas:0
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


export default angular.module('usuarioAdd')
.component('usuarioAdd',{
  templateUrl: 'imports/ui/components/usuarioAdd/usuarioAdd.html',
  controller: UsuarioAdd
});
