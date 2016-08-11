import angular from 'angular';
import angularMeteor from 'angular-meteor';

import loggin from '../loggin/loggin.js'



export default angular.module('headerLayout',[
        angularMeteor,
        loggin.name
    ]);
