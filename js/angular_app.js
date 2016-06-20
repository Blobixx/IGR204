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
            mapJson = 'data/countries-and-states.json',
            states, stateSet, countries, countrySet;

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

        var circle = svg.append("circle")
            .attr("cx", 3 * (width / 4) + 3 * margin.left)
            .attr("cy", 3 * (height / 4))
            .attr("r", 180)
            .attr("fill", "white");

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
                circle.attr("fill", "yellow")
            })
            .on("mouseout", function() {
                circle.attr("fill", "white")
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
        svg.append("text").attr("x", 570).attr("y", 390).attr("class", "sousTitre").text("Field :");

        svg.append("text").attr("x", 570).attr("y", 420).attr("class", "sousTitre").text("Income :");

        //Fin design de l'onglet

        zoom = d3.geo.zoom()
            .projection(projection)
            .scaleExtent([projection.scale() * 0.4, projection.scale() * 1.5])
            .on('zoom.redraw', function() {
                d3.event.sourceEvent.preventDefault();
                svg.selectAll('path').attr('d', path);
            });

        d3.json(mapJson, function(error, world) {
            states = topojson.feature(world, world.objects.states).features;
            countries = topojson.feature(world, world.objects.countries).features;

            stateSet = drawFeatureSet('state', states);
            countrySet = drawFeatureSet('country', countries);

            d3.selectAll('path').call(zoom);
        });

        function drawFeatureSet(className, featureSet) {
            var set = features.selectAll('.' + className)
                .data(featureSet)
                .enter()
                .append('g')
                .attr('class', className)
                .attr('data-name', function(d) {
                    return d.properties.name;
                })
                .attr('data-id', function(d) {
                    return d.id;
                });

            set.append('path')
                .attr('class', 'land')
                .attr('d', path);

            set.append('path')
                .attr('class', 'overlay')
                .attr('d', path)
                .attr('style', function(d) {
                    if (scope.data[d.id]) {
                        return 'fill-opacity: ' + (scope.data[d.id] / 100);
                    }
                })
                .on('click', function(d) {
                    var val = (scope.data[d.id]) ? scope.data[d.id] : 0;
                    d3.select(element[0]).select('.info').html(d.properties.name + ': ' + val);
                });

            return set;
        }
    }
});

app.controller("ctrl1", function($scope, $log) {
    $scope.data = {};
});

app.run();