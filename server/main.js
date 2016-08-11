import '../imports/api/recipes';
import '../imports/api/usuarios';
import '../imports/api/containerLivro';
import '../imports/startup/fixtures';

//import '../imports/api/users';


import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
      process.env.MAIL_URL="smtp://bibliotecanerde.pablo@gmail.com:meteorangular@smtp.gmail.com:465/";


});
