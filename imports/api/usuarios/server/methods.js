import _ from 'underscore';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';

import {Usuarios} from '../collection.js';


export function removerUsuario(usuario, userId){

    if (!Meteor.users.findOne({'username': usuario.username})) {
        throw new Meteor.Error(404, 'Usuário não existe');
    }

    if (!this.userId) {
        throw new Meteor.Error(400, 'Voce  não está logado!');
    }
    Meteor.remove(userId);
    Usuarios.remove(this.usuario._id);
}



Meteor.methods({
    removerUsuario
});
