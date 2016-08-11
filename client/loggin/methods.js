import _ from 'underscore';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';

export function saveUser(userId, username, password){
    check(username,String);
    check(password,String);


    if(!this.userId){
        throw new Meteor.Error('voce deve está logado');
    }

    Accounts.createUser({
        username: this.username,
        password: this.password
    });
}

export function logar(username, password){
    check(username, String);
    check(password, String);

    if(this.userId){
        throw new Meteor.Error('voce já está logado');
    }

    Meteor.loginWithPassword(this.username, this.password);



}


Meteor.methods({
  saveUser,
  logar
});