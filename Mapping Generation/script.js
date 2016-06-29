function save() {

    var countX = 8; //cells by x
    var countY = 9; //cells by y
    var mapWidth = 360;
    var mapHeight = 300;
    var cellWidth = mapWidth / countX;
    var cellHeight = mapHeight / countY;
    var features = "";
    var id_count = 0;
    var count = 0;
    var iX = 0;
    var iY = 0;
    var stop = false;

    d3.csv("data/SpeedDatingMini.csv", function(error, data) {
        if (error) throw error;
        data.forEach(function(d) {
            if (d == "") {
                return -1;
            } else {
                return +d;
            }

        });

        var l = data.length;


        var coordinates = [],
            c = {
                x: 0,
                y: mapHeight
            }, //cursor
            //top-left/top-right/bottom-right/bottom-left
            tLx, tLy, tRx, tRy,
            bRx, bRy, bLx, bLy;

        data.forEach(function(d, i) {

            if (!stop) {

                count++;
                console.log(count);
				console.log(iX);
				console.log(iY);

                var propertiesObj = d;
                propertiesObj["id2"] = propertiesObj["id"];
                delete propertiesObj["id"];
                propertiesObj["id"] = propertiesObj["iid"];
                delete propertiesObj["iid"];
                var propertiesObjString = JSON.stringify(propertiesObj);

                //console.log(propertiesObjString);

                tLx = bLx = c.x;
                tLy = tRy = c.y;
                tRx = bRx = c.x + cellWidth;
                bRy = bLy = c.y - cellHeight;
                var cell = [
                    //top-left/top-right/bottom-right/bottom-left/top-left
                    [tLx, tLy],
                    [tRx, tRy],
                    [bRx, bRy],
                    [bLx, bLy],
                    [tLx, tLy]
                ];
                coordinates.push(cell);
                if (i == (l - 1)) { //On gère la dernière entrée
                    features += '{"type": "Feature", "properties": ' + propertiesObjString + ',"geometry": {"type": "Polygon","coordinates": [[[' + cell[0] + '],[' + cell[1] + '],[' + cell[2] + '],[' + cell[3] + '],[' + cell[4] + ']]]}}'
                } else {
                    features += '{"type": "Feature", "properties": ' + propertiesObjString + ',"geometry": {"type": "Polygon","coordinates": [[[' + cell[0] + '],[' + cell[1] + '],[' + cell[2] + '],[' + cell[3] + '],[' + cell[4] + ']]]}},'
                }
                //refresh cusror for cell
                c.x = c.x + cellWidth;

                //Simulation de boucle :
                iX++;
                if (iX > countX + 2) {
                    iY++;
                    iX = 0;
                    //refresh cursor for row
                    c.x = 0;
                    c.y = c.y - cellHeight;
                }
                if (iY > countY + 2) {
                    console.log("done");
                    stop = true; //On sort de la boucle
                }
            }

        });

        var grid = '{"type": "FeatureCollection","features": [' + features + ']}';

        print(grid);


    });
}




function print(texte) {

    console.log("makefile: " + texte);

    var textFile = null;

    var data = new Blob([texte], {
        type: 'application/json'
    });

    textFile = window.URL.createObjectURL(data);

    var link = document.getElementById('downloadlink');
    link.href = textFile;
    link.style.display = 'block';

}