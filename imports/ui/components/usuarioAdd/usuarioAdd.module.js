import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor';
import uiRouter from 'angular-ui-router';

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