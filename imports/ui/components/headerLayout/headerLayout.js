import './headerLayout.module.js';
import angular from 'angular';
import angularMeteor from 'angular-meteor';


//Template
import headerLayout from './headerLayout.html';



class HeaderLayout{

}

const name = 'headerLayout';

export default angular.module(name).component(name,{
        templateUrl:'imports/ui/components/headerLayout/headerLayout.html',
        controller: HeaderLayout
    });


