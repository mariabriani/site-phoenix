// Lista dos robos com mais informações
// ordenar por ano decrescente e alfabético
const robos = [
    {
        nome: "Mooncake",
        img: "../images/robos/mooncake-card.jpg",
        icon: "../images/logos/sumo-icon.png",
        time: "Sumô",
        ano: "2021",
        situacao: "Ativo"
    },
    {
        nome: "Senna",
        img: "../images/robos/senna-card.jpg",
        icon: "../images/logos/seg-icon.png",
        time: "Seguidor de linha",
        ano: "2022",
        situacao: "Ativo"
    },
    {
        nome: "Spartacus",
        img: "../images/robos/spartacus-card.jpg",
        icon: "../images/logos/cbt-icon.png",
        time: "Combate",
        ano: "2013",
        situacao: "Ativo"
    },
    {
        nome: "Khepri",
        img: "../images/robos/khepri-card.jpg",
        icon: "../images/logos/cbt-icon.png",
        time: "Combate",
        ano: "2022",
        situacao: "Ativo"
    }
];      

    document.getElementById("filter-time").addEventListener("change", function() {
        const filtro = this.value;
        gerarCartaoRobo(filtro);
    });

    function gerarCartaoRobo(filtro = "Todos") {
        const containerRobos = document.getElementById("robo-container");
        containerRobos.innerHTML = "";

        robos.filter(robo => filtro === "Todos" || robo.time === filtro)
            .forEach(robo => {
                const card = document.createElement("div");
                card.classList.add("robo-card");
                card.innerHTML = `
                    <img src="${robo.img}" class="robo-foto" alt="${robo.nome}">
                    <h3 class="robo-nome">${robo.nome}</h3>
                    <p> Time: <i>${robo.time}</i> </p>
                    <p> Ano de criação: <i>${robo.ano}</i> </p>
                    <p> Situação: <i>${robo.situacao}</i></p>
                    <img src="${robo.icon}" class="robo-icon" alt="${robo.time}">
                    `;
                containerRobos.appendChild(card);
            });
    }

    document.addEventListener("DOMContentLoaded", () => gerarCartaoRobo());
