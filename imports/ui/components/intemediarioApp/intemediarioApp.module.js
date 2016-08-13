import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { Meteor } from 'meteor/meteor';

import headerLayout from '../headerLayout/headerLayout.js';
import navLayout from '../navLayout/navLayout.js';
import homeLayout from '../homeLayout/homeLayout.js';
import loggin from '../loggin/loggin.js';
import usuarioAdd from '../usuarioAdd/usuarioAdd.js';
import usuariosLista from '../usuariosLista/usuariosLista.js';
import usuarioDetalhes from '../usuarioDetalhes/usuarioDetalhes.js';

import containerLivroLista from '../containerLivro/containerLivroLista/containerLivroLista.js'
import containerLivroDetalhes from '../containerLivro/containerLivroDetalhes/containerLivroDetalhes.js'
import containerLivroAdd from '../containerLivro/containerLivroAdd/containerLivroAdd.js'


export default angular.module('intemediarioApp',[
    angularMeteor,
    uiRouter,
    'accounts.ui',

    headerLayout.name,
    navLayout.name,

    homeLayout.name,
    loggin.name,
    usuarioAdd.name,
    usuariosLista.name,
    usuarioDetalhes.name,
    containerLivroLista.name,
    containerLivroDetalhes.name,
    containerLivroAdd.name

    ]).config(config).run(run);


function config($locationProvider, $urlRouterProvider){
    'ngInject';



    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/home');
}

function run($rootScope, $state){
    'ngInject';

    $rootScope.$on('$stateChangeError',
        (event, toState, toParams, fromState, fromParams, error)=>{


            if(error === 'NOT_AUTORIZED' || error ==='NAO_AUTORIZADO_ADD_USUARIO'){
                console.log('logado',Meteor.userId());
                console.log('event', event);
                console.log('error', toParams);
                console.log('toState', toState );
                console.log('toParams',fromState);
                console.log('fromState',fromParams);
                console.log('fromParams',error);

                $state.go('home');
            }


        });

    /*
    $rootScope.$on('$stateChangeSuccess',
        (event, toState, toParams, fromState, fromParams, error)=>{

            if(!Meteor.userId()){
                $state.go('home');
            }


        });
      */
}
