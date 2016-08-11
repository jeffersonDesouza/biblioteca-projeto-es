import {Mongo} from 'meteor/mongo';

export const ContainersLivros = new Mongo.Collection('containersLivros',{
    transform: function(doc){

      doc.disponivel = isLivroDisponivel(doc);
      console.log('Disponível: ',isLivroDisponivel(doc));
      return doc;
    }
});

function isLivroDisponivel(doc){
	if(doc.quantidade <= 1){
		return false;
	}
	return true;
}
