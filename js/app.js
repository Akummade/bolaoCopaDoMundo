function showSection(id){

    document
    .querySelectorAll(".page")
    .forEach(sec => {
        sec.classList.remove("active");
    });

    document
    .getElementById(id)
    .classList.add("active");
}

async function carregarPartidas(){

    const partidas =
    await getPartidas();

    const lista =
    document.getElementById(
        "listaPartidas"
    );

    lista.innerHTML = "";

    partidas.forEach(p => {

        lista.innerHTML += `
            <div class="card">
                <h3>${p.casa} x ${p.fora}</h3>
                <p>
                    ${p.placarCasa}
                    -
                    ${p.placarFora}
                </p>
            </div>
        `;
    });
}

async function carregarRanking(){

    const ranking =
    await getRanking();

    const container =
    document.getElementById(
        "rankingContainer"
    );

    container.innerHTML = "";

    ranking.forEach((user,index)=>{

        container.innerHTML += `
            <div class="card">
                <h3>
                    #${index+1}
                    ${user.nome}
                </h3>

                <p>
                    ${user.pontos}
                    pontos
                </p>
            </div>
        `;
    });
}

function filtrarPartidas(){

    const filtro =
    document
    .getElementById(
        "filtroSelecao"
    )
    .value
    .toLowerCase();

    document
    .querySelectorAll(
        "#listaPartidas .card"
    )
    .forEach(card=>{

        card.style.display =
            card.innerText
            .toLowerCase()
            .includes(filtro)
            ? "block"
            : "none";
    });
}

window.onload = ()=>{

    carregarPartidas();

    carregarRanking();
}