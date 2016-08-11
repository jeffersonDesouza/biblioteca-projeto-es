
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const RecipeSchema = new SimpleSchema({
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