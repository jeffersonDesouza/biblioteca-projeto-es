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
