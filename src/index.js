// import {init} from './js/chistes'
//import { obtenerUsuarios } from './js/http-provider'
// import {init} from './js/usuarios-page'


// init();

// obtenerUsuarios().then(console.log);

import * as CRUD from './js/crud'

CRUD.getUsuario(2).then(console.log);

CRUD.crearUsuario({
    name: 'Dany',
    job: 'Developer'
}).then(console.log)

CRUD.actualizarUsuario(1,{
    name: 'Faty',
    job: 'Administer'
}).then(console.log);

CRUD.borrarUsuario(1).then(console.log);