import angular from  'angular';
import { Meteor } from 'meteor/meteor'

import 'bootstrap/dist/css/bootstrap.css';

import { name as IntemediarioApp } from '../imports/ui/components/intemediarioApp/intemediarioApp';


function onReady(){
    angular.bootstrap(document, [IntemediarioApp], {strictDi:true});
}

if(Meteor.isCordova){
    angular.element(document).on('deviceready', onReady);
}else{
    angular.element(document).ready(onReady);
}