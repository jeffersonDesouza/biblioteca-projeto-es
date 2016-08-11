import {Mongo} from 'meteor/mongo';

export const Usuarios = new Mongo.Collection('usuarios',{
  transform: function(doc){
    doc.multas = valorMulta(doc.emprestimos);
    doc.podePegarLivros = podePegarLivros(doc);

    return doc;
  }
});


function podePegarLivros(doc){
	if(doc.multas > 0 || doc.emprestimos.length > 3){
		return false;
	}
	return true;
}

function valorMulta(emprestimosArray){
  return totalMultasEmprestimos(emprestimosArray);
}

function totalMultasEmprestimos(emprestimosArray){
   let totalMultas = 0;
   let hoje = new Date();

	for(let i=0; i<emprestimosArray.length; i++){
      emprestimosArray[i].diasAtrasados = converterDatasEmDias(hoje, emprestimosArray[i].dataDevolucao);
		  emprestimosArray[i].multa = emprestimosArray[i].diasAtrasados * 0.5;
      totalMultas += emprestimosArray[i].multa;
     }

     return totalMultas;
}

function converterDatasEmDias(dataMaior, dataMenor){
	 let umDiaEmMiliSegundos = 86400000;
   // as vezes ta ficando negativo assim que é criado, logo colocaremos um controle
   let dias = (dataMaior - dataMenor)/umDiaEmMiliSegundos;
   if(dias > 0){
     return dias;
   }
	return 0;
}
