const jokeURL = 'https://api.chucknorris.io/jokes/random';

const urlUsuarios = 'https://reqres.in/api/users?page=2'

const cloudPreset = 'ml_default';
const cloudURL = 'https://api.cloudinary.com/v1_1/jvaldezr/upload';


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
//archivoSubir :: File
const subirImagen = async(archivoSubir) =>{

const formData = new FormData();
formData.append('upload_preset',cloudPreset);
formData.append('file',archivoSubir);


try {
    const resp = await fetch(cloudURL,{
        method: 'POST',
        body: formData
    });

    if(resp.ok){
        const cloudResp = await resp.json();
        return cloudResp.secure_url;
    }
    else{
        throw await resp.json();
    }
} catch (error) {
    throw error;
}

}

export {
    obtenerChiste,
    obtenerUsuarios,
    subirImagen
}