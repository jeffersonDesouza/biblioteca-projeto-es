import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor';
import uiRouter from 'angular-ui-router';


export default angular.module('usuarioDetalhes', [
    angularMeteor,
    uiRouter
    ]).config(config);

function config($stateProvider){
    'ngInject';

    $stateProvider.state('usuarioDetalhes',{
        url:'/usuarios/:usuarioId',
        template: '<usuario-detalhes></usuario-detalhes>',
        resolve:{
            currentUser($q){

              if(usuarioNaoLogado()){
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

    if(Usuarios.findOne({matricula:username}).categoriaUsuario === "funcionario"){
      return true;
    }
    return false;
}
