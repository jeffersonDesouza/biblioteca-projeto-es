import { Meteor } from 'meteor/meteor';
import { Counts } from 'meteor/tmeasday:publish-counts';



    Meteor.publish('users',
        ()=>{

            return Meteor.users.find({},{
                fields:{
                    username:1,
                    profile:1
                }
            });

    });