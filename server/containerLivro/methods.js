import _ from 'underscore';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';

import {ContainersLivros} from '../../imports/api/containerLivro/collection.js';

export function salvarLivro(containerLivro, userId){
    if(!this.userId){
        throw new Meteor.Error(400, 'Usuário não logado para add Livro');
    }

    ContainersLivros.insert(containerLivro);

}


export function removerLivro(livro){

}

export function listarLivros(){
    return ContainersLivros.find();
}


export function editarPalavraChave(containerLivroID, palavra, palavraChaveAntiga,userId){

    ContainersLivros.update({"_id":containerLivroID, "livro.palavrasChaves":palavraChaveAntiga},
        {$set:{"livro.palavrasChaves.$": palavra}});

}




Meteor.methods({
    editarPalavraChave,
    salvarLivro,

});
