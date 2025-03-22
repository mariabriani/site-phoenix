// Lista dos membros com mais informações
const members = [
    { 
        name: "Yuri Anderson", 
        nickname: "Yuri",
        img: "../images/members/yuri.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "yuri@example.com",
        cargo: "Capitão Geral",
        departamento: "Elétrica",
        ano: 2022
    },
    { 
        name: "Gustavo Vieira de Mattos", 
        nickname: "KFC",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/adm-icon.png",
        email: "gustavo.mattos05003@gmail.com",
        cargo: "Coordenador de Departamento",
        departamento: "Administrativo",
        ano: 2021
    },
    { 
        name: "Rafael Fonseca Ramos", 
        nickname: "Rafa",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "get email",
        cargo: "Coordenador de Time",
        departamento: "Elétrico",
        ano: 2023
    },
    { 
        name: "Leticia Pimentel", 
        nickname: "Lets",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mec-icon.png",
        email: "get email",
        cargo: "Coordenador de Time",
        departamento: "Mecânico",
        ano: 2023
    },
    { 
        name: "Adriana Cordeiro Ramalho Leal", 
        nickname: "Drica",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "get email",
        cargo: "Coordenador de Time",
        departamento: "Elétrico",
        ano: 2023
    },
    { 
        name: "Victor De Andrade Gomes", 
        nickname: "Bob",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/comp-icon.png",
        email: "get email",
        cargo: "Coordenador de Time",
        departamento: "Computacional",
        ano: 2022
    },
    { 
        name: "Eduardo Pereira Tejada", 
        nickname: "Tejada",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "get email",
        cargo: "Coordenador de Time",
        departamento: "Elétrico",
        ano: 2022
    },
    { 
        name: "Yasmin Kaline De Carvalho Silva", 
        nickname: "Kaline",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mec-icon.png",
        email: "get email",
        cargo: "Coordenador de Time",
        departamento: "Mecânico",
        ano: 2022
    },
    { 
        name: "Eduardo Schroeder Pereira Dos Santos", 
        nickname: "Edu",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/comp-icon.png",
        email: "get email",
        cargo: "Coordenador de Time",
        departamento: "Computacional",
        ano: 2022
    },
    { 
        name: "Carlos Victor Pinheiro Targino ", 
        nickname: "Carlos",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "get email",
        cargo: "Coordenador de Time",
        departamento: "Elétrico",
        ano: 2023
    },
    { 
        name: "Mariana Leister Gonçalves", 
        nickname: "Mari",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mec-icon.png",
        email: "get email",
        cargo: "Coordenador de Time",
        departamento: "Mecânico",
        ano: 2023
    },
    { 
        name: "Pietro Fernandes Magaldi", 
        nickname: "Pietro",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/comp-icon.png",
        email: "get email",
        cargo: "Coordenador de Time",
        departamento: "Computacional",
        ano: 2024
    },
    { 
        name: "Magdiel Vinicius Mioti", 
        nickname: "Magdiel",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mec-icon.png",
        email: "get email",
        cargo: "Coordenador de Time",
        departamento: "Mecânico",
        ano: 2024
    },
    { 
        name: "Van Klug Runge", 
        nickname: "Van",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/comp-icon.png",
        email: "get eamil",
        cargo: "",
        departamento: "Computacional",
        ano: 2018
    },
    { 
        name: "Vinícius Guimarães Tomazini da Silva", 
        nickname: "Vini",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mec-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Mecânico",
        ano: 2018
    },
    { 
        name: "Dayanna Axly Santiago Villantoy", 
        nickname: "Day",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "dayannavillantoy@gmail.com",
        cargo: "",
        departamento: "Elétrico",
        ano: 2020
    },
    { 
        name: "Giovani Moreira da Silva", 
        nickname: "Gio",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mec-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Mecânico",
        ano: 2020
    },
    { 
        name: "Daniel Akio Timura", 
        nickname: "Dani",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mec-icon.png",
        email: "dayannavillantoy@gmail.com",
        cargo: "",
        departamento: "Mecânico",
        ano: 2021
    },
    { 
        name: "Henrique Stumm Rocha", 
        nickname: "Stumm",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/comp-icon.png",
        email: "dayannavillantoy@gmail.com",
        cargo: "",
        departamento: "Computacional",
        ano: 2021
    },
    { 
        name: "Matheus Henrique de Lima", 
        nickname: "Falcão",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Elétrico",
        ano: 2021
    },
    { 
        name: "Pedro Barros da Matta", 
        nickname: "Matta",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Elétrico",
        ano: 2021
    },
    { 
        name: "Thiago Masanori Hata", 
        nickname: "Hata",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Elétrico",
        ano: 2021
    },
    { 
        name: "Caroline Manzzi Feijó Yaschel", 
        nickname: "Carol",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mec-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Mecânico",
        ano: 2022
    },
    { 
        name: "Elane Duarte", 
        nickname: "Elane",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mkt-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Marketing",
        ano: 2022
    },
    { 
        name: "Joana Mota", 
        nickname: "Jojo",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Elétrico",
        ano: 2022
    },
    { 
        name: "Luana Oliveira dos Santos", 
        nickname: "Luana",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mkt-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Marketing",
        ano: 2022
    },
    { 
        name: "Anita Ramos Almeida", 
        nickname: "Anita",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/comp-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Computacional",
        ano: 2023
    },
    { 
        name: "Antonio Enrico Gris", 
        nickname: "Toni",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Elétrico",
        ano: 2023
    },
    { 
        name: "Bruno Falqueto Busato", 
        nickname: "Falqueto",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Elétrico",
        ano: 2023
    },
    { 
        name: "Letícia Silva Brito", 
        nickname: "Lele",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/comp-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Computacional",
        ano: 2023
    },
    { 
        name: "Maria Briani Lima", 
        nickname: "Maria",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/comp-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Computacional",
        ano: 2023
    },
    { 
        name: "Alex Lei", 
        nickname: "Alex",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mec-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Mecânico",
        ano: 2024
    },
    { 
        name: "Álleffe Kemuell de Oliveira Silva", 
        nickname: "Álleffe",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/adm-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Administrativo",
        ano: 2024
    },
    { 
        name: "Anyelle Medeiros de Sousa Reis", 
        nickname: "Any",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mec-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Mecânico",
        ano: 2024
    },
    { 
        name: "Daniel Huber", 
        nickname: "Huber",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/comp-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Computacional",
        ano: 2024
    },
    { 
        name: "Daniela Souza Cardoso Naves", 
        nickname: "Naves",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/comp-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Computacional",
        ano: 2024
    },
    { 
        name: "Gabriel Cattoni Gomes", 
        nickname: "Cattoni",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Elétrico",
        ano: 2024
    },
    { 
        name: "Gabriel Janowski Pozzer", 
        nickname: "Pozzer",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mec-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Mecânico",
        ano: 2024
    },
    { 
        name: "Gabriel Sartori", 
        nickname: "Sartori",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mec-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Mecânico",
        ano: 2024
    },
    { 
        name: "Giovana Jacome Marchetti", 
        nickname: "Gi",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/comp-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Computacional",
        ano: 2024
    },
    { 
        name: "Grazielle Florentino de Sousa", 
        nickname: "Grazi",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Elétrico",
        ano: 2024
    },
    { 
        name: "Guilherme Alves Belo", 
        nickname: "Belo",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Elétrico",
        ano: 2024
    },
    { 
        name: "Guilherme Henrique Costa", 
        nickname: "Guilhas",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mec-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Mecânico",
        ano: 2024
    },
    { 
        name: "Henrique José Magnin Fernandino", 
        nickname: "CAEM",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mec-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Mecânico",
        ano: 2024
    },
    { 
        name: "Isabela Caroline Gomes", 
        nickname: "Carol",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mec-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Mecânico",
        ano: 2024
    },
    { 
        name: "Isadora Kluge Dorigan", 
        nickname: "Isa",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/comp-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Computacional",
        ano: 2024
    },
    { 
        name: "João Marcos Alves de Araújo", 
        nickname: "Braia",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/comp-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Computacional",
        ano: 2024
    },
    { 
        name: "Leonardo Garcia Miguel Terçariol", 
        nickname: "Terçariol",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/adm-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Administrativo",
        ano: 2024
    },
    { 
        name: "Lucca Sanchez Notari", 
        nickname: "Lucca",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mec-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Mecânico",
        ano: 2024
    },
    { 
        name: "Lucca Sanchez Notari", 
        nickname: "Lucca",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mec-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Mecânico",
        ano: 2024
    },
    { 
        name: "Luisa Mel Machado de Campos", 
        nickname: "Luisa Mel",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Elétrico",
        ano: 2024
    },
    { 
        name: "Maria Clara Martinez Oliveira", 
        nickname: "Estrela",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Elétrico",
        ano: 2024
    },
    { 
        name: "Michel Youssef Ramos", 
        nickname: "Michel",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Elétrico",
        ano: 2024
    },
    { 
        name: "Nicolas Alves Correia", 
        nickname: "Nicolas",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mec-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Mecânico",
        ano: 2024
    },
    { 
        name: "Pedro De Sousa Henriques Valentim", 
        nickname: "Fumaça",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Elétrico",
        ano: 2024
    },
    { 
        name: "Rafael Ferrari Gonçalves", 
        nickname: "Ferrari",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mec-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Mecânico",
        ano: 2024
    },
    { 
        name: "Raquel Souza Barroso", 
        nickname: "Raquel",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mec-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Mecânico",
        ano: 2024
    },
    { 
        name: "Ricardo Azevedo Braga", 
        nickname: "Bixo",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Elétrico",
        ano: 2024
    },
    { 
        name: "Rodrigo Passos Lima", 
        nickname: "Passos",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Elétrico",
        ano: 2024
    },
    { 
        name: "Sabrina Gadelha Magalhães", 
        nickname: "Sabrina",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Elétrico",
        ano: 2024
    },
    { 
        name: "Victor Moraes Yamada", 
        nickname: "Victor",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/comp-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Computacional",
        ano: 2024
    },
    { 
        name: "Victoria Furtado Baú Guimarães", 
        nickname: "Victoria",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mkt-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Marketing",
        ano: 2024
    },
    { 
        name: "Vitor Takahashi Miranda", 
        nickname: "Taka",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/comp-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Computacional",
        ano: 2024
    },
    { 
        name: "Chico", 
        nickname: "Torchic",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/comp-icon.png",
        email: "rephoenixunicamp@gmail.com",
        cargo: "Mascote",
        departamento: "Torcida",
        ano: 2022
    },
];  

    document.getElementById("filter-departamento").addEventListener("change", function() {
        const filtro = this.value;
        generateMemberCards(filtro);
    });

    function generateMemberCards(filtro = "Todos") {
        const teamContainer = document.getElementById("team-container");
        teamContainer.innerHTML = "";

        members.filter(member => filtro === "Todos" || member.departamento === filtro)
            .forEach(member => {
                const card = document.createElement("div");
                card.classList.add("member-card");
                card.innerHTML = `
                    <img src="${member.img}" class="member-foto" alt="${member.name}">
                    <img src="${member.icon}" class="departamento-icon" alt="${member.departamento}">
                    <h3 class="member-nickname">${member.nickname}</h3>
                    <p class="member-name">${member.name}</p>
                    <div class="member-info">
                        <h4> ${member.name}</h4>
                        <p> ${member.cargo} </p>
                        <p> ${member.departamento} ${member.ano}</p>
                        <a href="mailto:${member.email}"><img src="../images/logos/email-black.png"></a>
                    </div>
                `;
                teamContainer.appendChild(card);
            });
    }

    document.addEventListener("DOMContentLoaded", () => generateMemberCards());
