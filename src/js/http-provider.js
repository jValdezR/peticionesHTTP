const jokeURL = 'https://api.chucknorris.io/jokes/random';

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


export {
    obtenerChiste
}