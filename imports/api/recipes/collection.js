import {Mongo} from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Recipes = new Mongo.Collection('recipes');

RecipeSchema = new SimpleSchema({
    name:{
        type: String,
        label: "Nome",
    },
    desc: {
        type: String,
        label:  "Description"
    },
    author:{
        type: String,
        label: "Author",
        autoValue: ()=>{
            return this.userId
        }
    },
    createdAt:{
        type: Date,
        label: "Created At",
        autoValue: ()=>{
            return new Date()
        }
    }
});

Recipes.attachSchema(RecipeSchema);




Recipes.allow({
    insert(userId){
        return !!userId;
    }
});
