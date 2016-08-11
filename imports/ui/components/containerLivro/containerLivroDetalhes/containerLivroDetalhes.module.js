import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Meteor} from 'meteor/meteor';



export default angular.module('containerLivroDetalhes', [
    angularMeteor,
    uiRouter
    ]).config(config);

function config($stateProvider){
    'ngInject';

    $stateProvider.state('containerLivroDetalhes',{
        url: '/livros/:livroId',
        template: '<container-livro-detalhes></container-livro-detalhes>'
    });
}
