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

        this.nomeUsuario = "JoSé";


        this.helpers({
          isLoggedIn(){
            return !!Meteor.userId();
        },

        });
    }

    getNomeDoUsuarioLogado(){
      Meteor.call("getNomeUsuarioLogadoMethod", Meteor.userId(), this.nomeUsuario, function(error, result){
        if(error){
          console.log("error", error);
        }
        if(result){

        }
      });

        console.log("JOÃO");
        return Meteor.users.findOne(Meteor.userId()).profile.name;
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
