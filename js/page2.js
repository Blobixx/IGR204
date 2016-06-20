// Création des variables qui vont composer le svg
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

var projection = d3.geo.orthographic()
    .scale(240)
    .translate([width / 4, height / 2 + 20])
    .clipAngle(90 + 1e-6)
    .precision(.3);

var path = d3.geo.path()
    .projection(projection);

var graticule = d3.geo.graticule();

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

var circle = svg.append("circle")
    .attr("cx", 3 * (width / 4) + 3 * margin.left)
    .attr("cy", 3 * (height / 4))
    .attr("r", 180)
    .attr("fill", "white");


// Définition de la sphere
svg.append("path")
    .datum({
        type: "Sphere"
    })
    .attr("class", "sphere")
    .attr("d", path);

// Définition des lignes latitude/longitude
svg.append("path")
    .datum(graticule)
    .attr("class", "graticule")
    .attr("d", path);

// Definition de l'équateur
svg.append("path")
    .datum({
        type: "LineString",
        coordinates: [
            [-180, 0],
            [-90, 0],
            [0, 0],
            [90, 0],
            [180, 0]
        ]
    })
    .attr("class", "equator")
    .attr("d", path);


//Intéractions sur la sphère : zoom + rotation
var zoom = d3.geo.zoom()
    .projection(projection)
    .scaleExtent([projection.scale() * .4, projection.scale() * 1.5])
    .on("zoom.redraw", function() {
        d3.event.sourceEvent.preventDefault();
        svg.selectAll("path").attr("d", path);
    })
d3.selectAll('path')
    .call(zoom);

// Changer de page
/*svg.append("text")
    .attr("x", (width / 4) - 2 * margin.left)
    .attr("y", height - 20)
    .attr("class", "title2")
    .text("Show Waves");*/

// idd de l'utilisateur
/*svg.append("text")
    .attr("x", (width / 4) - 2 * margin.left)
    .attr("y", 100)
    .attr("class", "sousTitre")
    .text("Idd from the user : ");*/

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
		
		