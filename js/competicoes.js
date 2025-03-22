document.addEventListener("DOMContentLoaded", function () {
    var container = document.getElementById("timeline");

    // Dados dos eventos
    var items = new vis.DataSet([
        { id: 1, content: "Fundação da Universidade", start: "1919-05-23" },
        { id: 2, content: "Primeira Turma de Alunos", start: "1920-09-15" },
        { id: 3, content: "Criação do Departamento de Ciência", start: "1950-03-10" },
        { id: 4, content: "Lançamento do Primeiro Satélite", start: "1965-06-20" },
        { id: 5, content: "Inauguração do Novo Campus", start: "1980-08-12" },
        { id: 6, content: "Primeiro Prêmio Nobel", start: "1995-04-27" },
        { id: 7, content: "Centenário da Instituição", start: "2019-05-23" }
    ]);

    // Configuração da timeline
    var options = {
        width: "100%",
        height: "500px",
        selectable: true,
        zoomable: true,
        tooltip: {
            followMouse: true
        }
    };

    // Criar a linha do tempo
    var timeline = new vis.Timeline(container, items, options);
});
