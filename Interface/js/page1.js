var margin = {
    right: 50,
    left: 50,
    top: 20,
    bottom: 20
}

var width = 1000 + margin.left + margin.right,
    height = 100 + margin.top + margin.bottom,
    rotate = [10, -10],
    velocity = [.003, -.001],
    time = Date.now(),
    r = 100,
    p = Math.PI * 2;

var svg;

svg = d3.select('#tab-1')
    .append('svg')
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr('viewBox', '0, 0, ' + width + ', ' + height);

//Design de l'onglet

var dataRace = [10, 50, 80];
var raceLabel = ["black", "white", "asian"];

var dataGender = [10, 50, 80];
var genderLabel = ["black", "white", "asian"];

var dataRaceImpact = [10, 50, 80];
var raceImpactLabel = ["black", "white", "asian"];

var dataDate = [10, 50, 80];
var dateLabel = ["black", "white", "asian"];

var dataGo = [10, 50, 80];
var goLabel = ["black", "white", "asian"];

var dataAge = [10, 50, 80];
var ageLabel = ["black", "white", "asian"];

var dataGoal = [10, 50, 80];
var goalLabel = ["black", "white", "asian"];

var dataField = [10, 50, 80];
var fieldLabel = ["black", "white", "asian"];

var dataIncome = [10, 50, 80];
var incomeLabel = ["black", "white", "asian"];

var color = d3.scale.category20();


var group = svg.append("g").attr("transform", "translate(250, 60)");

var arcRace = d3.svg.arc()
    .innerRadius(0)
    .outerRadius(70);

var pie = d3.layout.pie()
    .value(function(d) {
        return d;
    });

var pieRace = group.selectAll(".arc")
    .data(pie(dataRace))
    .enter()
    .append("g")
    .attr("class", "arc");

pieRace.style("opacity", 0).append("path")
    .style("fill", function(d, i) {
        return color(i);
    })
    .attr("d", arcRace);


pieRace.append("text") //add a label to each slice
    .attr("transform", function(d) { //set the label's origin to the center of the arc
        //we have to make sure to set these before calling arc.centroid
        d.innerRadius = 0;
        d.outerRadius = 100;
        return "translate(" + arcRace.centroid(d) + ")"; //this gives us a pair of coordinates like [50, 50]
    })
    .attr("text-anchor", "middle") //center the text on it's origin
    .text(function(d, i) {
        return raceLabel[i];
    });

// Toutes les informations du profil
d3.select('#gender').on("mouseover", function() {
        circle.attr("fill", "blue")
    })
    .on("mouseout", function() {
        circle.attr("fill", "white")
    });

d3.select('#age').on("mouseover", function() {
        circle.attr("fill", "red")
    })
    .on("mouseout", function() {
        circle.attr("fill", "white")
    });

d3.select('#income').on("mouseover", function() {
        circle.attr("fill", "green")
    })
    .on("mouseout", function() {
        circle.attr("fill", "white")
    });

d3.select('#race').on("mouseover", function() {
        pieRace.style("opacity", 1);
    })
    .on("mouseout", function() {
        pieRace.style("opacity", 0);
    });

d3.select('#race_impact').on("mouseover", function() {
        circle.attr("fill", "pink")
    })
    .on("mouseout", function() {
        circle.attr("fill", "white")
    });

d3.select('#goal').on("mouseover", function() {
        circle.attr("fill", "gold")
    })
    .on("mouseout", function() {
        circle.attr("fill", "white")
    });

d3.select('#date_frequency').on("mouseover", function() {
        circle.attr("fill", "yellow")
    })
    .on("mouseout", function() {
        circle.attr("fill", "white")
    });

d3.select('#go_out_frequency').on("mouseover", function() {
        circle.attr("fill", "black")
    })
    .on("mouseout", function() {
        circle.attr("fill", "white")
    });

d3.select('#field').on("mouseover", function() {
        circle.attr("fill", "black")
    })
    .on("mouseout", function() {
        circle.attr("fill", "white")
    });


//Fin design de l'onglet