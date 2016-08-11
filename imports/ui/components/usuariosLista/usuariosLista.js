import './usuariosLista.module.js';

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import utilsPagination from 'angular-utils-pagination';

import { Counts } from 'meteor/tmeasday:publish-counts';
import {Meteor} from 'meteor/meteor';

import usuariosLista from './usuariosLista.html';

import {Usuarios} from '../../../api/usuarios/index.js';

class UsuariosLista{

    constructor($scope,$reactive){
        'ngInject';


        $reactive(this).attach($scope);

        this. searchNome = '';
        this.searchMatricula='';


        this.page = 1;
        this.perPage = 10;
        this.sort = {name:1};

         this.subscribe('usuarios', ()=>[
            this.getReactively('searchNome')
         ]);


        this.subscribe('usuarios',()=>[{
                    limit: parseInt(this.getReactively('perPage')),
                    skip: parseInt((this.getReactively('page') - 1) * this.getReactively('perPage')),
                    sort: this.getReactively('sort')
                },
                this.getReactively('searchNome')
        ]);


        this.helpers({

            usuarios(){
                this.getReactively('searchNome');

               

                if(this.searchNome !== ''){
                    return Usuarios.find();
                }
                else{
                    return [];
                }
            }

        });
    }

    removerUsuario(){
        Usuarios.remove(this.usuario._id);
    }

}

export default angular.module('usuariosLista')
.component('usuariosLista',{
    templateUrl: 'imports/ui/components/usuariosLista/usuariosLista.html',
    controller: UsuariosLista
});