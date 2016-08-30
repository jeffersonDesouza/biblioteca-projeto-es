import './navLayout.module.js';

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import {Meteor} from 'meteor/meteor';

import {Usuarios} from '../../../api/usuarios/index.js';

//Template
import navLayout from './navLayout.html';


class NavLayout{
  constructor($stateParams, $scope, $reactive) {
      'ngInject';

      $reactive(this).attach($scope);

      this.showMenuClass = true;

    this.subscribe('usuarios');

    this.helpers({
      usuario(){

        if(Meteor.userId()){
          //username no 'users'  é a matricula no 'usuarios'
          var username = Meteor.users.findOne(Meteor.userId()).username;

          return Usuarios.findOne({matricula:username});
        }
        return null;
      },
      isLoggedIn(){
        return !!Meteor.userId();
      }


    });
  }
  isFuncionario(){

    if(Meteor.userId() !== null){
      var username = Meteor.users.findOne(Meteor.userId()).username;
      if(Usuarios.findOne({matricula:username}).categoriaUsuario === 'funcionario'){
        return true;
      }
    }
    return false;
  }

  toggleShowMenuClass(){
    return this.showMenuClass = !this.showMenuClass;
  }


}

const name = 'navLayout';

export default angular.module(name).component(name,{
        templateUrl:'imports/ui/components/navLayout/navLayout.html',
        controller: NavLayout
    });
