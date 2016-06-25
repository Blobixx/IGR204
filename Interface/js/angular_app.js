var app = angular.module("myapp", []);

app.directive("globe", function() {
    return {
        restrict: 'E',
        scope: {
            data: '=?'
        },
        template: '<div class="globe-wrapper">' +
            '<div class="globe"></div>' +
            '<div class="info"></div>' +
            '</div>',
        link: link
    };

    function link(scope, element, attrs) {
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

        var projection, path,
            svg, features, graticule, zoom,
            mapJson = 'data/mapping.json',
            squares, squareSet;

        projection = d3.geo.orthographic()
            .scale(240)
            .translate([width / 4, height / 2 + 20])
            .clipAngle(90 + 1e-6)
            .precision(.3)
            .rotate([0, -30]);

        path = d3.geo.path()
            .projection(projection);

        svg = d3.select(element[0]).select('.globe')
            .append('svg')
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .attr('viewBox', '0, 0, ' + width + ', ' + height);

        features = svg.append('g');

        features.append('path')
            .datum({
                type: 'Sphere'
            })
            .attr('class', 'background')
            .attr('d', path);

        graticule = d3.geo.graticule();

        features.append('path')
            .datum(graticule)
            .attr('class', 'graticule')
            .attr('d', path);

        //Design de l'onglet

        var ligne = svg.append('line')
            .attr({
                x1: 550,
                y1: 100,
                x2: 550,
                y2: 700
            })
            .attr("class", "ligne");

    /*    var circle = svg.append("circle")
            .attr("cx", 3 * (width / 4) + 3 * margin.left)
            .attr("cy", 3 * (height / 4))
            .attr("r", 180)
            .attr("fill", "white");   */
            
var dataRace = [10,50,80];
var raceLabel=["black","white","asian"];
var color = d3.scale.category20c();  

    
var group=svg.append("g").attr("transform","translate(800,550)");

var arcRace=d3.svg.arc()
	.innerRadius(0)
	.outerRadius(100);
	
var pie = d3.layout.pie()
	.value(function(d) {return d;});
	
var pieRace = group.selectAll(".arc")
	.data(pie(dataRace))
	.enter()
	.append("g")
	.attr("class","arc");
	
pieRace.append("path")
	.attr("d",arcRace).attr("fill",function(d){return color(d.dataRace) ;});
	
pieRace.append("text")                                     //add a label to each slice
                .attr("transform", function(d) {                    //set the label's origin to the center of the arc
                //we have to make sure to set these before calling arc.centroid
                d.innerRadius = 0;
                d.outerRadius = 100;
                return "translate(" + arcRace.centroid(d) + ")";        //this gives us a pair of coordinates like [50, 50]
            })
            .attr("text-anchor", "middle")                          //center the text on it's origin
            .text(function(d, i) { return raceLabel[i]; }); 
		
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
                circle.attr("fill", "blue")
            })
            .on("mouseout", function() {
                circle.attr("fill", "white")
            });

        svg.append("text").attr("x", 570).attr("y", 180).attr("class", "sousTitre").text("Age :")
            .on("mouseover", function() {
                circle.attr("fill", "red")
            })
            .on("mouseout", function() {
                circle.attr("fill", "white")
            });

        svg.append("text").attr("x", 570).attr("y", 210).attr("class", "sousTitre").text("Principal interest :")
            .on("mouseover", function() {
                circle.attr("fill", "green")
            })
            .on("mouseout", function() {
                circle.attr("fill", "white")
            });

        svg.append("text").attr("x", 570).attr("y", 240).attr("class", "sousTitre").text("Race :")
            .on("mouseover", function() {
                pieRace.attr("d",arcRace)
            })
            .on("mouseout", function() {
                pieRace.attr("fill", "white")
            });

        svg.append("text").attr("x", 570).attr("y", 270).attr("class", "sousTitre").text("Race Impact :")
            .on("mouseover", function() {
                circle.attr("fill", "pink")
            })
            .on("mouseout", function() {
                circle.attr("fill", "white")
            });

        svg.append("text").attr("x", 570).attr("y", 300).attr("class", "sousTitre").text("Goal :")
            .on("mouseover", function() {
                circle.attr("fill", "gold")
            })
            .on("mouseout", function() {
                circle.attr("fill", "white")
            });

        svg.append("text").attr("x", 570).attr("y", 330).attr("class", "sousTitre").text("Date frequency :")
            .on("mouseover", function() {
                circle.attr("fill", "yellow")
            })
            .on("mouseout", function() {
                circle.attr("fill", "white")
            });

        svg.append("text").attr("x", 570).attr("y", 360).attr("class", "sousTitre").text("Go out frequency :")
            .on("mouseover", function() {
                circle.attr("fill", "black")
            })
            .on("mouseout", function() {
                circle.attr("fill", "white")
            });
        svg.append("text").attr("x", 570).attr("y", 390).attr("class", "sousTitre").text("Field :")
          .on("mouseover", function() {
                circle.attr("fill", "black")
            })
            .on("mouseout", function() {
                circle.attr("fill", "white")
            });

        svg.append("text").attr("x", 570).attr("y", 420).attr("class", "sousTitre").text("Income :")
          .on("mouseover", function() {
                circle.attr("fill", "black")
            })
            .on("mouseout", function() {
                circle.attr("fill", "white")
            });

        //Fin design de l'onglet

        zoom = d3.geo.zoom()
            .projection(projection)
            .scaleExtent([projection.scale() * 0.4, projection.scale() * 1.5])
            .on('zoom.redraw', function() {
                d3.event.sourceEvent.preventDefault();
                svg.selectAll('path').attr('d', path);
            });

        d3.json(mapJson, function(error, json) {

            squares = json.features;
            squareSet = drawFeatureSet('square', squares);

            d3.selectAll('path').call(zoom);
        });

        function drawFeatureSet(className, featureSet) {
            var set = features.selectAll('.' + className)
                .data(featureSet)
                .enter()
                .append('g')
                .attr('class', className);

            set.append('path')
                .attr('class', 'land')
                .attr('d', path);

            set.append('path')
                .attr('class', 'overlay')
                .attr('d', path)
                .on('click', function(d) {
                    rotateToFocusOn(d);
                    setTimeout(function() {
                        alert("id de l'utilisateur : " + d.properties.id);
                    }, 1500);
                    //alert("id de l'utilisateur : " + d.properties.id);
                });

            return set;
        }

        function rotateToFocusOn(x) {
            var coords = d3.geo.centroid(x);
            coords[0] = -coords[0];
            coords[1] = -coords[1];

            d3.transition()
                .duration(1250)
                .tween('rotate', function() {
                    var r = d3.interpolate(projection.rotate(), coords);
                    return function(t) {
                        projection.rotate(r(t));
                        svg.selectAll('path').attr('d', path);
                    };
                })
                .transition();
        }
    }
});

app.controller("ctrl1", function($scope, $log) {
    $scope.data = {};
});

app.run();