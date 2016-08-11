import { Meteor } from 'meteor/meteor';
import { Counts } from 'meteor/tmeasday:publish-counts';

import {Recipes} from './index.js';

if(Meteor.isServer){

    Meteor.publish('recipes',function(){

        const selector = {
            author: this.userId
        }
        return Recipes.find(selector);

    });

}


