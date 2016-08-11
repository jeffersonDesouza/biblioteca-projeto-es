import {Mongo} from 'meteor/mongo';

export const ContainersLivros = new Mongo.Collection('containersLivros',{
    transform: function(document){

      document.disponivel = isLivroDisponivel(document);

      return document;
    }
});

function isLivroDisponivel(document){
	if(document.quantidade > 1){
		return true;
	}
	return false;
}
