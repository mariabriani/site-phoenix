// Lista dos membros com mais informações
// ordenação manual usada: capitão, coods departamento, coords times, membros (decrescente por ano)
// entre 'seção' usar ordem alfabética
const members = [
    { 
        nome: "Yuri Anderson", 
        apelido: "Yuri",
        img: "../images/members/yuri.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "yuri@example.com",
        cargo: "Capitão Geral",
        departamento: "Elétrica",
        ano: 2022
    },
    { 
        nome: "Gustavo Vieira de Mattos", 
        apelido: "KFC",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/adm-icon.png",
        email: "gustavo.mattos05003@gmail.com",
        cargo: "Coordenador de Departamento",
        departamento: "Administrativo",
        ano: 2021
    },
    { 
        nome: "Rafael Fonseca Ramos", 
        apelido: "Rafa",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "get email",
        cargo: "Coordenador de Time",
        departamento: "Elétrico",
        ano: 2023
    },
    { 
        nome: "Leticia Pimentel", 
        apelido: "Lets",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mec-icon.png",
        email: "get email",
        cargo: "Coordenador de Time",
        departamento: "Mecânico",
        ano: 2023
    },
    { 
        nome: "Adriana Cordeiro Ramalho Leal", 
        apelido: "Drica",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "get email",
        cargo: "Coordenador de Time",
        departamento: "Elétrico",
        ano: 2023
    },
    { 
        nome: "Victor De Andrade Gomes", 
        apelido: "Bob",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/comp-icon.png",
        email: "get email",
        cargo: "Coordenador de Time",
        departamento: "Computacional",
        ano: 2022
    },
    { 
        nome: "Eduardo Pereira Tejada", 
        apelido: "Tejada",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "get email",
        cargo: "Coordenador de Time",
        departamento: "Elétrico",
        ano: 2022
    },
    { 
        nome: "Yasmin Kaline De Carvalho Silva", 
        apelido: "Kaline",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mec-icon.png",
        email: "get email",
        cargo: "Coordenador de Time",
        departamento: "Mecânico",
        ano: 2022
    },
    { 
        nome: "Eduardo Schroeder Pereira Dos Santos", 
        apelido: "Edu",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/comp-icon.png",
        email: "get email",
        cargo: "Coordenador de Time",
        departamento: "Computacional",
        ano: 2022
    },
    { 
        nome: "Carlos Victor Pinheiro Targino ", 
        apelido: "Carlos",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "get email",
        cargo: "Coordenador de Time",
        departamento: "Elétrico",
        ano: 2023
    },
    { 
        nome: "Mariana Leister Gonçalves", 
        apelido: "Mari",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mec-icon.png",
        email: "get email",
        cargo: "Coordenador de Time",
        departamento: "Mecânico",
        ano: 2023
    },
    { 
        nome: "Pietro Fernandes Magaldi", 
        apelido: "Pietro",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/comp-icon.png",
        email: "get email",
        cargo: "Coordenador de Time",
        departamento: "Computacional",
        ano: 2024
    },
    { 
        nome: "Magdiel Vinicius Mioti", 
        apelido: "Magdiel",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mec-icon.png",
        email: "get email",
        cargo: "Coordenador de Time",
        departamento: "Mecânico",
        ano: 2024
    },
    { 
        nome: "Van Klug Runge", 
        apelido: "Van",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/comp-icon.png",
        email: "get eamil",
        cargo: "",
        departamento: "Computacional",
        ano: 2018
    },
    { 
        nome: "Vinícius Guimarães Tomazini da Silva", 
        apelido: "Vini",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mec-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Mecânico",
        ano: 2018
    },
    { 
        nome: "Dayanna Axly Santiago Villantoy", 
        apelido: "Day",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "dayannavillantoy@gmail.com",
        cargo: "",
        departamento: "Elétrico",
        ano: 2020
    },
    { 
        nome: "Giovani Moreira da Silva", 
        apelido: "Gio",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mec-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Mecânico",
        ano: 2020
    },
    { 
        nome: "Daniel Akio Timura", 
        apelido: "Dani",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mec-icon.png",
        email: "dayannavillantoy@gmail.com",
        cargo: "",
        departamento: "Mecânico",
        ano: 2021
    },
    { 
        nome: "Henrique Stumm Rocha", 
        apelido: "Stumm",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/comp-icon.png",
        email: "dayannavillantoy@gmail.com",
        cargo: "",
        departamento: "Computacional",
        ano: 2021
    },
    { 
        nome: "Matheus Henrique de Lima", 
        apelido: "Falcão",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Elétrico",
        ano: 2021
    },
    { 
        nome: "Pedro Barros da Matta", 
        apelido: "Matta",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Elétrico",
        ano: 2021
    },
    { 
        nome: "Thiago Masanori Hata", 
        apelido: "Hata",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Elétrico",
        ano: 2021
    },
    { 
        nome: "Caroline Manzzi Feijó Yaschel", 
        apelido: "Carol",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mec-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Mecânico",
        ano: 2022
    },
    { 
        nome: "Elane Duarte", 
        apelido: "Elane",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mkt-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Marketing",
        ano: 2022
    },
    { 
        nome: "Joana Mota", 
        apelido: "Jojo",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Elétrico",
        ano: 2022
    },
    { 
        nome: "Luana Oliveira dos Santos", 
        apelido: "Luana",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mkt-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Marketing",
        ano: 2022
    },
    { 
        nome: "Anita Ramos Almeida", 
        apelido: "Anita",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/comp-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Computacional",
        ano: 2023
    },
    { 
        nome: "Antonio Enrico Gris", 
        apelido: "Toni",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Elétrico",
        ano: 2023
    },
    { 
        nome: "Bruno Falqueto Busato", 
        apelido: "Falqueto",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Elétrico",
        ano: 2023
    },
    { 
        nome: "Letícia Silva Brito", 
        apelido: "Lele",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/comp-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Computacional",
        ano: 2023
    },
    { 
        nome: "Maria Briani Lima", 
        apelido: "Maria",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/comp-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Computacional",
        ano: 2023
    },
    { 
        nome: "Alex Lei", 
        apelido: "Alex",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mec-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Mecânico",
        ano: 2024
    },
    { 
        nome: "Álleffe Kemuell de Oliveira Silva", 
        apelido: "Álleffe",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/adm-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Administrativo",
        ano: 2024
    },
    { 
        nome: "Anyelle Medeiros de Sousa Reis", 
        apelido: "Any",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mec-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Mecânico",
        ano: 2024
    },
    { 
        nome: "Daniel Huber", 
        apelido: "Huber",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/comp-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Computacional",
        ano: 2024
    },
    { 
        nome: "Daniela Souza Cardoso Naves", 
        apelido: "Naves",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/comp-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Computacional",
        ano: 2024
    },
    { 
        nome: "Gabriel Cattoni Gomes", 
        apelido: "Cattoni",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Elétrico",
        ano: 2024
    },
    { 
        nome: "Gabriel Janowski Pozzer", 
        apelido: "Pozzer",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mec-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Mecânico",
        ano: 2024
    },
    { 
        nome: "Gabriel Sartori", 
        apelido: "Sartori",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mec-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Mecânico",
        ano: 2024
    },
    { 
        nome: "Giovana Jacome Marchetti", 
        apelido: "Gi",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/comp-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Computacional",
        ano: 2024
    },
    { 
        nome: "Grazielle Florentino de Sousa", 
        apelido: "Grazi",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Elétrico",
        ano: 2024
    },
    { 
        nome: "Guilherme Alves Belo", 
        apelido: "Belo",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Elétrico",
        ano: 2024
    },
    { 
        nome: "Guilherme Henrique Costa", 
        apelido: "Guilhas",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mec-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Mecânico",
        ano: 2024
    },
    { 
        nome: "Henrique José Magnin Fernandino", 
        apelido: "CAEM",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mec-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Mecânico",
        ano: 2024
    },
    { 
        nome: "Isabela Caroline Gomes", 
        apelido: "Carol",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mec-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Mecânico",
        ano: 2024
    },
    { 
        nome: "Isadora Kluge Dorigan", 
        apelido: "Isa",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/comp-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Computacional",
        ano: 2024
    },
    { 
        nome: "João Marcos Alves de Araújo", 
        apelido: "Braia",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/comp-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Computacional",
        ano: 2024
    },
    { 
        nome: "Leonardo Garcia Miguel Terçariol", 
        apelido: "Terçariol",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/adm-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Administrativo",
        ano: 2024
    },
    { 
        nome: "Lucca Sanchez Notari", 
        apelido: "Lucca",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mec-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Mecânico",
        ano: 2024
    },
    { 
        nome: "Luisa Mel Machado de Campos", 
        apelido: "Luisa Mel",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Elétrico",
        ano: 2024
    },
    { 
        nome: "Maria Clara Martinez Oliveira", 
        apelido: "Estrela",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Elétrico",
        ano: 2024
    },
    { 
        nome: "Michel Youssef Ramos", 
        apelido: "Michel",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Elétrico",
        ano: 2024
    },
    { 
        nome: "Nicolas Alves Correia", 
        apelido: "Nicolas",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mec-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Mecânico",
        ano: 2024
    },
    { 
        nome: "Pedro De Sousa Henriques Valentim", 
        apelido: "Fumaça",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Elétrico",
        ano: 2024
    },
    { 
        nome: "Rafael Ferrari Gonçalves", 
        apelido: "Ferrari",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mec-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Mecânico",
        ano: 2024
    },
    { 
        nome: "Raquel Souza Barroso", 
        apelido: "Raquel",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mec-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Mecânico",
        ano: 2024
    },
    { 
        nome: "Ricardo Azevedo Braga", 
        apelido: "Bixo",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Elétrico",
        ano: 2024
    },
    { 
        nome: "Rodrigo Passos Lima", 
        apelido: "Passos",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Elétrico",
        ano: 2024
    },
    { 
        nome: "Sabrina Gadelha Magalhães", 
        apelido: "Sabrina",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/ele-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Elétrico",
        ano: 2024
    },
    { 
        nome: "Victor Moraes Yamada", 
        apelido: "Victor",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/comp-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Computacional",
        ano: 2024
    },
    { 
        nome: "Victoria Furtado Baú Guimarães", 
        apelido: "Victoria",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mkt-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Marketing",
        ano: 2024
    },
    { 
        nome: "Vitor Takahashi Miranda", 
        apelido: "Taka",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/comp-icon.png",
        email: "get email",
        cargo: "",
        departamento: "Computacional",
        ano: 2024
    },
    { 
        nome: "Chico", 
        apelido: "Torchic",
        img: "../images/logos/blank-profile.jpg",
        icon: "../images/logos/mkt-icon.png",
        email: "rephoenixunicamp@gmail.com",
        cargo: "Mascote",
        departamento: "Marketing",
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
                    <img src="${member.img}" class="member-foto" alt="${member.nome}">
                    <img src="${member.icon}" class="departamento-icon" alt="${member.departamento}">
                    <h3 class="member-apelido">${member.apelido}</h3>
                    <p class="member-nome">${member.nome}</p>
                    <div class="member-info">
                        <h4> ${member.nome}</h4>
                        <p> ${member.cargo} </p>
                        <p> ${member.departamento} ${member.ano}</p>
                        <a href="mailto:${member.email}"><img src="../images/logos/email-black.png"></a>
                    </div>
                `;
                teamContainer.appendChild(card);
            });
    }

    document.addEventListener("DOMContentLoaded", () => generateMemberCards());
