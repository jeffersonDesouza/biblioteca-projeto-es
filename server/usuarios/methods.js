import _ from 'underscore';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';

import {Usuarios} from '../../imports/api/usuarios/collection.js';

export function salvarNovoUser(novoUser, novoUsuario, userId){

    if(!this.userId){
        throw new Meteor.Error(400, 'Você deve está logado para salvar usuário');
    }

    Accounts.createUser(novoUser);

    if (!Meteor.users.find(novoUser._id)) {
        throw new Meteor.Error(404, 'Usuário não existe!');
    }
    Usuarios.insert(novoUsuario);
}

export function removerUsuario(usuario, userId){
    let user = Meteor.users.find({'username': usuario.matricula});

    if (!user) {
        throw new Meteor.Error(404, 'Usuário não existe');
    }

    if (!this.userId) {
        throw new Meteor.Error(400, 'Voce  não está logado!');
    }

    Meteor.users.remove({'username': usuario.matricula});
    Usuarios.remove(usuario._id);
}

export function getNomeUsuarioLogadoMethod(userId, nomeUsuario){
    if(this.userId){

        nomeUsuario = Meteor.users.findOne(userId).profile.name;
    }
}

export function getUsuario(usuarioId){
    return Usuarios.findOne({_id:usuarioId});
}

export function renovar(emprestimoBind, usuarioId){

        //let usuario = Usuarios.findOne({_id:usuarioId});

        let umMinutoEmMileSegundos = 60000;
        let vinteDiasEmMileSegundos = 1728000000;
        let dataDeEmprestimo = new Date();


        let dataDeDevolucao = new Date(emprestimoBind.dataDevolucao.getTime() + vinteDiasEmMileSegundos);


        let renovacoesRestantes = emprestimoBind.renovacoesRestantes  - 1 ;

        if(renovacoesRestantes >= 0){
            Usuarios.update({"_id":usuarioId, "emprestimos.idLivro": emprestimoBind.idLivro},
            {
              $set:{

                'emprestimos.$.dataDevolucao': dataDeDevolucao,
                'emprestimos.$.renovacoesRestantes': renovacoesRestantes

              }
            }
          );
        }

}



Meteor.methods({
    salvarNovoUser,
    removerUsuario,
    getNomeUsuarioLogadoMethod,
    getUsuario,
    renovar
});
