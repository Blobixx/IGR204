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
            top: 20,
            bottom: 20
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
