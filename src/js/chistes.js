import { obtenerChiste } from "./http-provider";


const body = document.body;
let btnChiste, olList;


const crearChisteHtml = () => {

    const html = `<h1 class="mt-5">Chistes</h1>
    <hr>
    
    <button class="btn btn-primary">Otro chiste</button>
    
    <ul class="mt-2 list-group">
    </ul>`

    const divChistes = document.createElement('div');

    divChistes.innerHTML = html;

    body.append(divChistes);
}


//Eventos

const eventos = () => {
    olList = document.querySelector('ul');
    btnChiste = document.querySelector('button');

    btnChiste.addEventListener('click', async () => {

        btnChiste.disabled = true;
        dibujarChiste(await obtenerChiste());
        btnChiste.disabled = true;
    })
}

//{id, value}
const dibujarChiste = (chiste) => {
    const olItem = document.createElement('li');

    olItem.innerHTML = `<b>${chiste.id}</b>: ${chiste.value}`
    olItem.classList.add('list-group-item');

    console.log(olItem);
    try {
        olList.append(olItem);
    } catch (error) {
        console.log(error);
    }
    
}


export const init = () => {
    crearChisteHtml();
    eventos();
}