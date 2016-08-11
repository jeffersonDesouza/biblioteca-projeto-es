import './usuarioRemove.module.js';

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Accounts } from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';


import {Usuarios} from '../../../api/usuarios/index.js';


import usuarioRemove from './usuarioRemove.html'

class UsuarioRemove{

    removeUsuario(){
//        if(Meteor.userId() && this.usuario){
  //          Usuarios.remove(this.usuario._id);
    //    }
    Meteor.call('removerUsuario',this.usuario, Meteor.userId(),
        (error)=>{
            if(error){
                console.log('Não foi possível excluir', error);
            }else{
                console.log('Usuário excuído');
            }
        });
    }


}


export default angular.module('usuarioRemove')
.component('usuarioRemove',{
  templateUrl: 'imports/ui/components/usuarioRemove/usuarioRemove.html',
  bindings: {usuario: '<'},
  controller: UsuarioRemove
});