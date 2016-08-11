import {Usuarios} from '../../imports/api/usuarios/collection.js';


Usuarios.allow({
    insert(userId, usuario){
        return !!userId;
    },
    update(userId, fields, modifier){
         return !!userId;
    },
    remove(userId, usuario){

        return !!userId && !!usuario;
    }
});
