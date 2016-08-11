import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

export default angular.module('homeLayout',[
        angularMeteor,
        uiRouter
    ]).config(config);

function config($stateProvider) {
    'ngInject';

    $stateProvider.state('home',{
        url: '/home',
        template: '<home-layout></home-layout>'
    });
}
