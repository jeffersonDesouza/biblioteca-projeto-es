import { Meteor } from 'meteor/meteor';
import { Counts } from 'meteor/tmeasday:publish-counts';

import {ContainersLivros} from '../../imports/api/containerLivro/index.js';



if(Meteor.isServer){



    Meteor.publish('containersLivros',function(){

        const selector = {};


        return ContainersLivros.find(selector);
    });



}
