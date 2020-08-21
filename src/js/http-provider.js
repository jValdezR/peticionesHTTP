const jokeURL = 'https://api.chucknorris.io/jokes/random';

const urlUsuarios = 'https://reqres.in/api/users?page=2'
const obtenerChiste = async () => {

    try {
        const respuesta = await fetch(jokeURL);

        if (!respuesta.ok) throw 'No se puedo realiza la peticion';

        const { icon_url, id, value } = await respuesta.json();

        return {icon_url, id, value};

    }
    catch (error) {
        throw error;
    }

}

const obtenerUsuarios = async() =>{

    const respuesta     = await fetch(urlUsuarios);
    const {data}        = await respuesta.json();

    return data;
}

export {
    obtenerChiste,
    obtenerUsuarios
}