import { Meteor } from 'meteor/meteor';
import { ContainersLivros } from '../api/containerLivro';

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

  if(Meteor.users.find().count() === 0){

    const novoUser = {
      "username": "USUARIO DEFAULT",
      "password": "123123",
    };

     Accounts.createUser(novoUser);

  }

});