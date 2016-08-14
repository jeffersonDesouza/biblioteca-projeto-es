import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Accounts } from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';

import {Usuarios} from '../../../api/usuarios/index.js';


import loggin from './loggin.html'

class Loggin{

    constructor($scope, $reactive) {
        'ngInject';
        $reactive(this).attach($scope);




        this.helpers({
          isLoggedIn(){
            return !!Meteor.userId();
        },

        });
    }

    getNomeDoUsuarioLogado(){

      if(!!Meteor.userId()){
        return Meteor.users.findOne(Meteor.userId()).profile.name;
      }
      return '';
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
