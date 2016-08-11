import './navLayout.module.js';

//Template
import navLayout from './navLayout.html';

class NavLayout{}

const name = 'navLayout';

export default angular.module(name).component(name,{
        templateUrl:'imports/ui/components/navLayout/navLayout.html',
        controller: NavLayout
    });


