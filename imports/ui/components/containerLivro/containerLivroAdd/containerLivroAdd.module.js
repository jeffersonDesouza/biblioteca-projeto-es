import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Meteor} from 'meteor/meteor';



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
