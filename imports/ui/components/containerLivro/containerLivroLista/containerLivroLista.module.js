import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Meteor} from 'meteor/meteor';



export default angular.module('containerLivroLista', [
        angularMeteor,
        uiRouter
    ]).config(config);

function config($stateProvider){
    'ngInject';

    $stateProvider.state('livros',{
        url: '/livros',
        template: '<container-livro-lista></container-livro-lista>'
    });
}
