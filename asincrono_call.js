//request, needle
const request = require('request')

//definir url de la api
const url = 'https://rickandmortyapi.com/api/character'

//hacer peticion request a la api utilizando request
let r = request(url , 
                {json : true} , 
                (err , res , body ) => {
                        let arreglo = body.results
                        arreglo.forEach((personaje) => {
                            console.log(personaje.name)
                            console.log("----------")
                        })

})