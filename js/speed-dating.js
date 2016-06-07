// Création des variables qui vont composer le svg
var margin = {right: 50, left: 50, top: 100, bottom: 100}
    width = 1000 + margin.left + margin.right,
    height = 500 + margin.top + margin.bottom,
    rotate = [10, -10],
    velocity = [.003, -.001],
    time = Date.now(),
    r= 100,
    p=Math.PI*2;

var projection = d3.geo.orthographic()
    .scale(240)
    .translate([width / 4, height / 2 + 20])
    .clipAngle(90 + 1e-6)
    .precision(.3);

var path = d3.geo.path()
    .projection(projection) ;

var graticule = d3.geo.graticule();

var svg = d3.select("body").append("svg")
    .attr("width", width+ margin.left + margin.right)
    .attr("height", height+ margin.top + margin.bottom);
    
var ligne = svg.append('line')
  .attr({ x1: 550, y1: 100, x2: 550, y2: 700})
  .attr("class", "ligne") ;
  
var circle = svg.append("circle")
                .attr("cx", 3*(width / 4)+3*margin.left)
                .attr("cy",3*(height/4))
		        .attr("r", 180)
		        .attr("fill", "blue");
   
// Définition du titre 
svg.append("text") 
	.attr("x", (width / 2)) 
	.attr("y",40) 
	.attr("class", "title")
	.text("Speed-Dating through globe");

// Définition de la sphere
svg.append("path")
    .datum({type: "Sphere"})
    .attr("class", "sphere")
    .attr("d", path) ;

// Définition des lignes latitude/longitude
svg.append("path")
    .datum(graticule)
    .attr("class", "graticule")
    .attr("d", path) ;
    
// Definition de l'équateur
svg.append("path")
    .datum({type: "LineString", coordinates: [[-180, 0], [-90, 0], [0, 0], [90, 0], [180, 0]]})
    .attr("class", "equator")
    .attr("d", path);

var feature = svg.selectAll("path") ;

// Fait tourner la terre
d3.timer(function() {
  var dt = Date.now() - time;
  projection.rotate([rotate[0] + velocity[0] * dt, rotate[1] + velocity[1] * dt]);
  feature.attr("d", path);
});

// Changer de page 
svg.append("text") 
	.attr("x", (width / 4)-2*margin.left) 
	.attr("y",height-20) 
	.attr("class", "title2")
	.text("Show Waves") ;

// idd de l'utilisateur
svg.append("text") 
	.attr("x", (width / 4)-2*margin.left) 
	.attr("y",100) 
	.attr("class", "sousTitre")
	.text("Idd from the user : ") ;
    
// Afficher le profil 
svg.append("text") 
	.attr("x", 3*(width / 4)-2*margin.left) 
	.attr("y",100) 
	.attr("class", "title2")
	.text("Profil from the user") ;

// Toutes les informations du profil
svg.append("text").attr("x", 570).attr("y",150).attr("class", "sousTitre").text("Gender :") ;
    
svg.append("text").attr("x", 570).attr("y",180).attr("class", "sousTitre").text("Age :") ;

svg.append("text").attr("x", 570).attr("y",210).attr("class", "sousTitre").text("Principal interest :") ;

svg.append("text").attr("x", 570).attr("y",240).attr("class", "sousTitre").text("Race :") ;

svg.append("text").attr("x", 570).attr("y",270).attr("class", "sousTitre").text("Race Impact :") ;

svg.append("text").attr("x", 570).attr("y",300).attr("class", "sousTitre").text("Goal :") ;

svg.append("text").attr("x", 570).attr("y",330).attr("class", "sousTitre").text("Date frequency :") ;

svg.append("text").attr("x", 570).attr("y",360).attr("class", "sousTitre").text("Go out frequency :") ;

// Création du pie des données globales
pie.append("path").attr("d",arc);

