import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Meteor} from 'meteor/meteor';


import {Usuarios} from '../../../../api/usuarios/index.js';

export default angular.module('containerLivroAdd',[
    angularMeteor,
    uiRouter
    ]).config(config);

function config($stateProvider){
    'ngInject';

    $stateProvider.state('add-livro',{
        url: '/add-livro',
        template: '<container-livro-add></container-livro-add>',
        resolve:{
            currentUser($q){

              if(usuarioNaoLogado() || !isFuncionario()){
                  return $q.reject('NOT_AUTORIZED');
              }else{
                  $q.resolve();
              }



            }
        }

    });

}

function usuarioNaoLogado(){
    return Meteor.userId() === null;
}

function isFuncionario(){
    Meteor.subscribe("usuarios");
    let username = Meteor.users.findOne(Meteor.userId()).username;
    console.log('categoria: ',Usuarios.findOne({matricula:username}).categoriaUsuario);

    if(Usuarios.findOne({matricula:username}).categoriaUsuario === "funcionario"){
      return true;
    }
    return false;
}
