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
    this.subscribe('usuarios',()=>{},{
      onStart: function () {
      }
    });

    this.helpers({
      usuario(){
        //username no 'users'  é a matricula no 'usuarios'
        let username = Meteor.users.findOne(Meteor.userId()).username;

        return Usuarios.findOne({matricula:username});
      }


    });

  }

  isFuncionario(){
    let username = Meteor.users.findOne(Meteor.userId()).username;

    if(Usuarios.findOne({matricula:username}).categoriaUsuario === 'funcionario'){
      return true;
    }
    return false;
  }
}

const name = 'navLayout';

export default angular.module(name).component(name,{
        templateUrl:'imports/ui/components/navLayout/navLayout.html',
        controller: NavLayout
    });
