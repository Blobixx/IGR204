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
    
var data = [10,50,80];

var svg = d3.select("#tab-1").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);
    
var group=svg.append("g").attr("transform","translate(200,200)");

var arc=d3.svg.arc()
	.innerRadius(200)
	.outerRadius(r);
var pie = d3.layout.pie()
	.value(function(d) {return d;});
	
var arcs = group.selectAll(".arc")
	.data(pie(data))
	.enter()
	.append("g")
	.attr("class","arc);
arcs.append("path")
	.attr("d",arc);
	

var color = d3.scale.category20c();   
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

/*
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
	*/

// Changer de page
svg.append("text")
    .attr("x", (width / 4) - 2 * margin.left)
    .attr("y", height - 20)
    .attr("class", "title2")
    .text("Show Waves");

// idd de l'utilisateur
svg.append("text")
    .attr("x", (width / 4) - 2 * margin.left)
    .attr("y", 100)
    .attr("class", "sousTitre")
    .text("User's Idd ");

// Afficher le profil
svg.append("text")
    .attr("x", 3 * (width / 4) - 2 * margin.left)
    .attr("y", 100)
    .attr("class", "title2")
    .text("User's profil");

// Toutes les informations du profil
svg.append("text").attr("x", 570).attr("y", 150).attr("class", "sousTitre").text("Gender :")
    .on("mouseover", function() {
        circle.attr("fill", "blue")})
    .on("mouseout", function() {
        circle.attr("fill", "white")
    });

svg.append("text").attr("x", 570).attr("y", 180).attr("class", "sousTitre").text("Age :")
    .on("mouseover", function() {
        circle.attr("fill", "red")})
    .on("mouseout", function() {
        circle.attr("fill", "white")
    });

svg.append("text").attr("x", 570).attr("y", 210).attr("class", "sousTitre").text("Principal interest :")
    .on("mouseover", function() {
        circle.attr("fill", "green")})
    .on("mouseout", function() {
        circle.attr("fill", "white")
    });

svg.append("text").attr("x", 570).attr("y", 240).attr("class", "sousTitre").text("Race :")
    .on("mouseover", function() {
        circle.attr("fill", "yellow")})
    .on("mouseout", function() {
        circle.attr("fill", "white")
    });

svg.append("text").attr("x", 570).attr("y", 270).attr("class", "sousTitre").text("Race Impact :")
    .on("mouseover", function() {
        circle.attr("fill", "pink")})
    .on("mouseout", function() {
        circle.attr("fill", "white")
    });

svg.append("text").attr("x", 570).attr("y", 300).attr("class", "sousTitre").text("Goal :")
    .on("mouseover", function() {
        circle.attr("fill", "gold")})
    .on("mouseout", function() {
        circle.attr("fill", "white")
    });

svg.append("text").attr("x", 570).attr("y", 330).attr("class", "sousTitre").text("Date frequency :")
    .on("mouseover", function() {
        circle.attr("fill", "yellow")})
    .on("mouseout", function() {
        circle.attr("fill", "white")
    });

svg.append("text").attr("x", 570).attr("y", 360).attr("class", "sousTitre").text("Go out frequency :")
    .on("mouseover", function() {
        circle.attr("fill", "black") })
    .on("mouseout", function() {
        circle.attr("fill", "white")
    });
svg.append("text").attr("x", 570).attr("y", 390).attr("class", "sousTitre").text("Field :")
	.on("mouseover", function() {
        circle.attr("fill", "black") })
    .on("mouseout", function() {
        circle.attr("fill", "white")
    });

svg.append("text").attr("x", 570).attr("y", 420).attr("class", "sousTitre").text("Income :")
	.on("mouseover", function() {
        circle.attr("fill", "black") })
    .on("mouseout", function() {
        circle.attr("fill", "white")
    });
