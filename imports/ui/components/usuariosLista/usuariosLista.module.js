import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor';
import uiRouter from 'angular-ui-router';

import usuarioRemove from '../usuarioRemove/usuarioRemove.js'

export default angular.module('usuariosLista', [
    angularMeteor,
    uiRouter,
    usuarioRemove.name
    ]).config(config);

function config($stateProvider){
        'ngInject';
    $stateProvider.state('usuarios',{
        url:'/usuarios',
        template: '<usuarios-lista></usuarios-lista>',
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