import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Accounts } from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';


import loggin from './loggin.html'

class Loggin{



    constructor($scope, $reactive) {
        'ngInject';
        $reactive(this).attach($scope);


    }

    saveUser(){
        Accounts.createUser({
            username: this.username,
            password: this.password
        });
    }

    logar(){
        Meteor.loginWithPassword(this.username, this.password);
    }

    logOut(){
        Meteor.logout();
    }

}


export default angular.module('loggin',[angularMeteor])
    .component('loggin',{
        templateUrl: 'imports/ui/components/loggin/loggin.html',
        controller: Loggin
    });