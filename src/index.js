

const jokeURL = 'https://api.chucknorris.io/jokes/random';

// fetch(jokeURL).then(resp =>{
//     resp.json().then(({id,value})=>{
//         console.log(id);
//         console.log(value);
//     })
// })

//Encadenamiento de promesas sencillo de leer
fetch(jokeURL)
    .then(resp =>resp.json())
    .then(({id,value})=>{
        console.log(id,value);
    })