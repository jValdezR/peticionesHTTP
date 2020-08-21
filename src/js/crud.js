

const urlCRUD = 'https://reqres.in/api/users';

const getUsuario = async(id) =>{

    const respuesta = await fetch(`${urlCRUD}/${id}`);
    
    const {data}= await respuesta.json();

    return data;
}

const crearUsuario = async(usuario)=>{
    const respuesta = await fetch(urlCRUD,{
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    console.log(await respuesta.json())

}

const actualizarUsuario = async(id,usuario)=>{
    const respuesta = await fetch(`${urlCRUD}/${id}`,{
        method: 'PUT',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    console.log(await respuesta.json())
}

const borrarUsuario = async (id) => {
const resp = await fetch(`${urlCRUD}/${id}`,{
    method: 'DELETE'
});

return (resp.ok) ? 'Borrado' : 'No se puedo eliminar';
}

export {
    getUsuario,
    crearUsuario,
    actualizarUsuario,
    borrarUsuario
}