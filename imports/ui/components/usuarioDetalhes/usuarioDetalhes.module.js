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

