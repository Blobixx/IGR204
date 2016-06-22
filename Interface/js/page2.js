// Cr�ation des variables qui vont composer le svg
var margin = {
    right: 50,
    left: 50,
    top: 100,
    bottom: 100
}
width = 1000 + margin.left + margin.right,
    height = 500 + margin.top + margin.bottom,
    rotate = [10, -10],
    velocity = [.003, -.001],
    time = Date.now(),
    r = 100,
    p = Math.PI * 2;

var svg = d3.select("#tab-2").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);

var ligne = svg.append('line')
    .attr({
        x1: 550,
        y1: 100,
        x2: 550,
        y2: 700
    })
    .attr("class", "ligne");

// Afficher le profil
svg.append("text")
    .attr("x", 3 * (width / 4) - 2 * margin.left)
    .attr("y", 100)
    .attr("class", "title2")
    .text("Wave");

// Toutes les informations du profil
svg.append("text").attr("x", 570).attr("y", 150).attr("class", "sousTitre").text("Match_es :")

svg.append("text").attr("x", 570).attr("y", 180).attr("class", "sousTitre").text("Id :")

svg.append("text").attr("x", 570).attr("y", 210).attr("class", "sousTitre").text("Choice :")

svg.append("text").attr("x", 570).attr("y", 240).attr("class", "sousTitre").text("Round :")

svg.append("text").attr("x", 570).attr("y", 270).attr("class", "sousTitre").text("Mode :")


//vertical gauche
svg.append('line')
        .attr({
            x1: 600,
            y1: 380,
            x2: 600,
            y2: 680
        })
        .attr("class", "ligneTableau");
//vertical droite
svg.append('line')
        .attr({
            x1: 900,
            y1: 380,
            x2: 900,
            y2: 680
        })
        .attr("class", "ligneTableau");

//vertical milieu
svg.append('line')
        .attr({
            x1: 750,
            y1: 380,
            x2: 750,
            y2: 680
        })
        .attr("class", "ligneTableau");

//Lignes horizontales du haut vers le bas
svg.append('line')
        .attr({
            x1: 600,
            y1: 380,
            x2: 900,
            y2: 380
        })
        .attr("class", "ligneTableau");

svg.append('line')
        .attr({
            x1: 600,
            y1: 430,
            x2: 900,
            y2: 430
        })
        .attr("class", "ligneTableau");

svg.append('line')
        .attr({
            x1: 600,
            y1: 480,
            x2: 900,
            y2: 480
        })
        .attr("class", "ligneTableau");

svg.append('line')
        .attr({
            x1: 600,
            y1: 530,
            x2: 900,
            y2: 530
        })
        .attr("class", "ligneTableau");

svg.append('line')
        .attr({
            x1: 600,
            y1: 580,
            x2: 900,
            y2: 580
        })
        .attr("class", "ligneTableau");

svg.append('line')
        .attr({
            x1: 600,
            y1: 630,
            x2: 900,
            y2: 630
        })
        .attr("class", "ligneTableau");

svg.append('line')
        .attr({
            x1: 600,
            y1: 680,
            x2: 900,
            y2: 680
        })
        .attr("class", "ligneTableau");

svg.append("text").attr("x", 610).attr("y", 410).attr("class", "sousTitre3").text("Attirance");
svg.append("text").attr("x", 610).attr("y", 460).attr("class", "sousTitre3").text("Sincérité");
svg.append("text").attr("x", 610).attr("y", 510).attr("class", "sousTitre3").text("Ambition");
svg.append("text").attr("x", 610).attr("y", 560).attr("class", "sousTitre3").text("Intelligence");
svg.append("text").attr("x", 610).attr("y", 610).attr("class", "sousTitre3").text("Shared");
svg.append("text").attr("x", 610).attr("y", 660).attr("class", "sousTitre3").text("Fun");
