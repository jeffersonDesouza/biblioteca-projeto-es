import { Meteor } from 'meteor/meteor';
import { ContainersLivros } from '../api/containerLivro';

import {Usuarios} from '../api/usuarios/index.js';

 Meteor.startup(() => {

    if (ContainersLivros.find().count() === 0) {
    const livros = [
          {"livro":
              {"titulo": "IA 2",
               "autor": "Russeal",
               "curso": "Computação",
               "palavrasChaves": [
                      "IA", "inteligencia", "russeal"
                ],
                "paginas": "700",
                "tipo": "livro"},
                "quantidade": "5"},

          {"livro":
              {"titulo": "Padrões de Projeto",
               "autor": "Gamma et al",
               "curso": "Computação",
               "palavrasChaves": [
                      "Padrões", "Programação", "gangue"
                ],
                "paginas": "300",
                "tipo": "livro"},
                "quantidade": "2"}

    ];

    livros.forEach((livros) => {ContainersLivros.insert(livros)});
  }

  if(Meteor.users.find().count() <= 1){

    const novoUser = {
      "username": "0000000000",
      "password": "123123",
      "profile" :{
           "name":"BASE"
       }
    };



     const novoUsuario = {
      "name":novoUser.profile.name,
      "matricula": novoUser.username,
      "curso": "Computação",
      "categoriaUsuario": "funcionario",
      "podePegarLivros":true,
      "emprestimos": [],
      "multas":0
    };

    Accounts.createUser(novoUser);

    Usuarios.insert(novoUsuario);


  }

});