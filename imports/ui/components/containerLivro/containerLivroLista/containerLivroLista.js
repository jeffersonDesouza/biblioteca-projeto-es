import './containerLivroLista.module.js';

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import {Meteor} from 'meteor/meteor';

import containerLivroLista from './containerLivroLista.html'

import {ContainersLivros} from '../../../../api/containerLivro/index.js';

class ContainerLivroLista{

    constructor($scope, $reactive){
        'ngInject';

        $reactive(this).attach($scope);

        this.subscribe('containersLivros');

        this.helpers({



            livros(){
                this.getReactively('searchTitulo');
                return ContainersLivros.find();
            }

        });

    }



}

export default angular.module('containerLivroLista')
.component('containerLivroLista',{
    templateUrl: 'imports/ui/components/containerLivro/containerLivroLista/containerLivroLista.html',
    controller: ContainerLivroLista
});


