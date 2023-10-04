const axios = require('axios')
const url = 'https://www.thesportsdb.com/api/v1/json/3/all_leagues.php'

const liga = async () => {
    const response = await axios.get(url)
    let arreglo = (response.data.leagues)
    arreglo.forEach((liga) => {
        console.log(liga.strLeague)
        console.log("----------")
    })
}

liga()