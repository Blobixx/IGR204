// Création des variables qui vont composer le svg
var margin = {
    right: 50,
    left: 50,
    top: 150,
    bottom: 150
}
/*width = 1500 + margin.left + margin.right,
    height = 500 + margin.top + margin.bottom,
    rotate = [10, -10],
    velocity = [.003, -.001],
    time = Date.now(),
    r = 150,
    p = Math.PI * 2;*/

var svg = d3.select("#tab-3").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);
/*
var ligne = svg.append('line')
    .attr({
        x1: 550,
        y1: 150,
        x2: 550,
        y2: 700
    })
    .attr("class", "ligne");

// Afficher le profil
svg.append("text")
    .attr("x", 3 * (width / 4) - 2 * margin.left)
    .attr("y", 150)
    .attr("class", "title2")
    .text("Informations");

// Toutes les informations du profil
svg.append("text").attr("x", 570).attr("y", 200).attr("class", "sousTitre").text("Partner :");

svg.append("text").attr("x", 570).attr("y", 570).attr("class", "sousTitre").text("Position :");
svg.append("text").attr("x", 570).attr("y", 590).attr("class", "sousTitre").text("Order :");
svg.append("text").attr("x", 570).attr("y", 610).attr("class", "sousTitre").text("Match :");
svg.append("text").attr("x", 570).attr("y", 630).attr("class", "sousTitre").text("Correlation :");
svg.append("text").attr("x", 570).attr("y", 650).attr("class", "sousTitre").text("Same race :");

svg.append('line')
        .attr({
            x1: 730,
            y1: 170,
            x2: 1120,
            y2: 170
        })
        .attr("class", "ligneTableau");

svg.append('line')
        .attr({
            x1: 730,
            y1: 220,
            x2: 1120,
            y2: 220
        })
        .attr("class", "ligneTableau");

svg.append('line')
        .attr({
            x1: 730,
            y1: 170,
            x2: 730,
            y2: 220
        })
        .attr("class", "ligneTableau");

svg.append('line')
        .attr({
            x1: 830,
            y1: 170,
            x2: 830,
            y2: 220
        })
        .attr("class", "ligneTableau");

svg.append('line')
        .attr({
            x1: 930,
            y1: 170,
            x2: 930,
            y2: 220
        })
        .attr("class", "ligneTableau");

svg.append('line')
        .attr({
            x1: 1030,
            y1: 170,
            x2: 1030,
            y2: 220
        })
        .attr("class", "ligneTableau");

svg.append('line')
        .attr({
            x1: 1120,
            y1: 170,
            x2: 1120,
            y2: 220
        })
        .attr("class", "ligneTableau");

svg.append("text").attr("x", 740).attr("y", 200).attr("class", "sousTitre3").text("Age:");
svg.append("text").attr("x", 840).attr("y", 200).attr("class", "sousTitre3").text("Race:");
svg.append("text").attr("x", 940).attr("y", 200).attr("class", "sousTitre3").text("Id:");
svg.append("text").attr("x", 1040).attr("y", 200).attr("class", "sousTitre3").text("Idd:");

svg.append("text").attr("x", 570).attr("y", 310).attr("class", "sousTitre").text("Préférence");
svg.append("text").attr("x", 570).attr("y", 355).attr("class", "sousTitre").text("Note");
svg.append("text").attr("x", 570).attr("y", 460).attr("class", "sousTitre").text("Préférence");
svg.append("text").attr("x", 570).attr("y", 515).attr("class", "sousTitre").text("Note");

svg.append('line')
        .attr({
            x1: 730,
            y1: 280,
            x2: 1120,
            y2: 280
        })
        .attr("class", "ligneTableau");

svg.append('line')
        .attr({
            x1: 730,
            y1: 380,
            x2: 1120,
            y2: 380
        })
        .attr("class", "ligneTableau");
svg.append('line')
        .attr({
            x1: 730,
            y1: 330,
            x2: 1120,
            y2: 330
        })
        .attr("class", "ligneTableau");

svg.append('line')
        .attr({
            x1: 730,
            y1: 280,
            x2: 730,
            y2: 380
        })
        .attr("class", "ligneTableau");

svg.append('line')
        .attr({
            x1: 795,
            y1: 280,
            x2: 795,
            y2: 380
        })
        .attr("class", "ligneTableau");

svg.append('line')
        .attr({
            x1: 860,
            y1: 280,
            x2: 860,
            y2: 380
        })
        .attr("class", "ligneTableau");

svg.append('line')
        .attr({
            x1: 925,
            y1: 280,
            x2: 925,
            y2: 380
        })
        .attr("class", "ligneTableau");

svg.append('line')
        .attr({
            x1: 990,
            y1: 280,
            x2: 990,
            y2: 380
        })
        .attr("class", "ligneTableau");

svg.append('line')
        .attr({
            x1: 1055,
            y1: 280,
            x2: 1055,
            y2: 380
        })
        .attr("class", "ligneTableau");
svg.append('line')
        .attr({
            x1: 1120,
            y1: 280,
            x2: 1120,
            y2: 380
        })
        .attr("class", "ligneTableau");

svg.append("text").attr("x", 732).attr("y", 270).attr("class", "sousTitre2").text("Attirance");
svg.append("text").attr("x", 797).attr("y", 270).attr("class", "sousTitre2").text("Sincérité");
svg.append("text").attr("x", 862).attr("y", 270).attr("class", "sousTitre2").text("Ambition");
svg.append("text").attr("x", 925).attr("y", 270).attr("class", "sousTitre2").text("Intelligence");
svg.append("text").attr("x", 1000).attr("y", 270).attr("class", "sousTitre2").text("Shared");
svg.append("text").attr("x", 1065).attr("y", 270).attr("class", "sousTitre2").text("Fun");

//ligne qui separe les tableaux
svg.append('line')
        .attr({
            x1: 570,
            y1: 400,
            x2: 1120,
            y2: 400
        })
        .attr("class", "ligneTableau");

//Deuxieme tableau
svg.append('line')
        .attr({
            x1: 730,
            y1: 430,
            x2: 1120,
            y2: 430
        })
        .attr("class", "ligneTableau");

svg.append('line')
        .attr({
            x1: 730,
            y1: 480,
            x2: 1120,
            y2: 480
        })
        .attr("class", "ligneTableau");
svg.append('line')
        .attr({
            x1: 730,
            y1: 530,
            x2: 1120,
            y2: 530
        })
        .attr("class", "ligneTableau");

svg.append('line')
        .attr({
            x1: 730,
            y1: 430,
            x2: 730,
            y2: 530
        })
        .attr("class", "ligneTableau");

svg.append('line')
        .attr({
            x1: 795,
            y1: 430,
            x2: 795,
            y2: 530
        })
        .attr("class", "ligneTableau");

svg.append('line')
        .attr({
            x1: 860,
            y1: 430,
            x2: 860,
            y2: 530
        })
        .attr("class", "ligneTableau");

svg.append('line')
        .attr({
            x1: 925,
            y1: 430,
            x2: 925,
            y2: 530
        })
        .attr("class", "ligneTableau");

svg.append('line')
        .attr({
            x1: 990,
            y1: 430,
            x2: 990,
            y2: 530
        })
        .attr("class", "ligneTableau");

svg.append('line')
        .attr({
            x1: 1055,
            y1: 430,
            x2: 1055,
            y2: 530
        })
        .attr("class", "ligneTableau");
svg.append('line')
        .attr({
            x1: 1120,
            y1: 430,
            x2: 1120,
            y2: 530
        })
        .attr("class", "ligneTableau");

svg.append("text").attr("x", 732).attr("y", 420).attr("class", "sousTitre2").text("Attirance");
svg.append("text").attr("x", 797).attr("y", 420).attr("class", "sousTitre2").text("Sincérité");
svg.append("text").attr("x", 862).attr("y", 420).attr("class", "sousTitre2").text("Ambition");
svg.append("text").attr("x", 925).attr("y", 420).attr("class", "sousTitre2").text("Intelligence");
svg.append("text").attr("x", 1000).attr("y", 420).attr("class", "sousTitre2").text("Shared");
svg.append("text").attr("x", 1065).attr("y", 420).attr("class", "sousTitre2").text("Fun");

//3eme tableau
//vertical gauche
svg.append('line')
        .attr({
            x1: 730,
            y1: 670,
            x2: 730,
            y2: 870
        })
        .attr("class", "ligneTableau");

//vertical milieu1
svg.append('line')
        .attr({
            x1: 900,
            y1: 670,
            x2: 900,
            y2: 870
        })
        .attr("class", "ligneTableau")

//vertical milieu2
svg.append('line')
        .attr({
            x1: 1010,
            y1: 670,
            x2: 1010,
            y2: 870
        })
        .attr("class", "ligneTableau")

//vertical droite
svg.append('line')
        .attr({
            x1: 1120,
            y1: 670,
            x2: 1120,
            y2: 870
        })
        .attr("class", "ligneTableau")


svg.append('line')
        .attr({
            x1: 730,
            y1: 670,
            x2: 1120,
            y2: 670
        })
        .attr("class", "ligneTableau")

svg.append('line')
        .attr({
            x1: 730,
            y1: 710,
            x2: 1120,
            y2: 710
        })
        .attr("class", "ligneTableau")

svg.append('line')
        .attr({
            x1: 730,
            y1: 750,
            x2: 1120,
            y2: 750
        })
        .attr("class", "ligneTableau")

svg.append('line')
        .attr({
            x1: 730,
            y1: 790,
            x2: 1120,
            y2: 790
        })
        .attr("class", "ligneTableau")

svg.append('line')
        .attr({
            x1: 730,
            y1: 830,
            x2: 1120,
            y2: 830
        })
        .attr("class", "ligneTableau")

svg.append('line')
        .attr({
            x1: 730,
            y1: 870,
            x2: 1120,
            y2: 870
        })
        .attr("class", "ligneTableau")

svg.append("text").attr("x", 910).attr("y", 695).attr("class", "sousTitre3").text("Partcipant");
svg.append("text").attr("x", 1020).attr("y", 695).attr("class", "sousTitre3").text("Partner");
svg.append("text").attr("x", 745).attr("y", 740).attr("class", "sousTitre3").text("Like");
svg.append("text").attr("x", 745).attr("y", 780).attr("class", "sousTitre3").text("Probability");
svg.append("text").attr("x", 745).attr("y", 820).attr("class", "sousTitre3").text("Met");
svg.append("text").attr("x", 745).attr("y", 860).attr("class", "sousTitre3").text("Decision");
*/