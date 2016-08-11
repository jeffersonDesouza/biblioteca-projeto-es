import './recipes.module.js';
import { Meteor } from 'meteor/meteor';
import recipes from './recipes.html';
import Recipe from './Recipe.js';


import {Recipes} from '../../../api/recipes/index.js';



class RecipesClass{



    constructor(){
        this.recipe = {};



    }

    addRecipe(){
        this.recipe.author = Meteor.user()._id;
        this.recipe.createdAt = new Date;

        Recipes.insert(this.recipe);

        this.reset();

    }

    reset(){
        this.recipe = {};
    }





}

const name ='recipes'

export default angular.module(name)
    .component(name, {
        templateUrl: 'imports/ui/components/recipes/recipes.html',
        controller: RecipesClass
    });
