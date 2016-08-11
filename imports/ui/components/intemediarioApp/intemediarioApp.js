import './intemediarioApp.module.js';


import usuariosLista from '../usuariosLista/usuariosLista.js';
import usuarioAdd from '../usuarioAdd/usuarioAdd.js';


import { Accounts } from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';


import {Usuarios} from '../../../api/usuarios/index.js';



//Template
import intemediarioApp from './intemediarioApp.html';

class IntemediarioApp{

   constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);



    this.helpers({
        isLoggedIn(){
            return !!Meteor.userId();
        }
    })
}



}

const name = 'intemediarioApp';

export default angular.module(name).component(name,{
    templateUrl:'imports/ui/components/intemediarioApp/intemediarioApp.html',
    controller: IntemediarioApp
});

