import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';


import {ContainersLivros} from '../../imports/api/containerLivro/collection.js';



LivroSchema = new SimpleSchema({
    titulo :{
        type: String,
        label: "Titulo"
    },
    autor:{
        type: String,
        label: "Autor"
    },
    curso:{
        type:String,
        label: "Curso"
    },
    palavrasChaves:{
        type: [String],
        label: "Palavras Chaves"
    },
    paginas:{
        type: String,
        label: "Paginas",
        optional: true
    },
    tipo:{
        type:String,
        label:'Tipo'
    }

});



ContainerLivrosSchema = new SimpleSchema({
    livro:{
        type: LivroSchema,
        label:"Livro",
    },
    quantidade:{
        type:Number,
        label:"Quantidade de Livros"
    },
    disponivel:{
        type: Boolean,
        label:"Disponível"
    }

});


ContainersLivros.allow({
    insert(userId, usuario){
        return !!userId;
    },

    update(userId, doc,fields, modifier){
         return !!userId;
    },

    remove(userId, usuario){

        return !!userId && !!usuario;
    }
});

ContainersLivros.attachSchema(ContainerLivrosSchema);
