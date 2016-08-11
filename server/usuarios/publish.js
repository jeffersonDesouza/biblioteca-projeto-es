import { Meteor } from 'meteor/meteor';
import { Counts } from 'meteor/tmeasday:publish-counts';

import {Usuarios} from '../../imports/api/usuarios/index.js';

if(Meteor.isServer){



    Meteor.publish('usuarios',function(searchNome){

        const selector = {};

        if(typeof searchNome === 'string' && searchNome.length){
            selector.name = {$regex: `^${searchNome}`, $options: 'i'};
        }


        return Usuarios.find(selector);
    });




}
