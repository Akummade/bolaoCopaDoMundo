const API_URL = "http://localhost:8080/api";

async function getPartidas(){

    try{

        const response = await fetch(
            `${API_URL}/partidas`
        );

        return await response.json();

    }catch(error){

        console.log(
            "Usando Mock Data"
        );

        return mockPartidas;
    }
}

async function getRanking(){

    try{

        const response = await fetch(
            `${API_URL}/ranking`
        );

        return await response.json();

    }catch(error){

        return mockRanking;
    }
}
