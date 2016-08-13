import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor';
import uiRouter from 'angular-ui-router';

import {Usuarios} from '../../../api/usuarios/index.js';

export default angular.module('usuarioAdd', [
    angularMeteor,
    uiRouter
    ]).config(config);

function config($stateProvider){
        'ngInject';
    $stateProvider.state('usuario-add',{
        url:'/usuario-add',
        template: '<usuario-add></usuario-add>',

        resolve:{
            currentUser($q){

              console.log('IS funcionario: ', isFuncionario());

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
