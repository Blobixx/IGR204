function save() {

    var countX = 5; //cells by x
    var countY = 5; //cells by y
    var mapWidth = 400;
    var mapHeight = 400;
    var cellWidth = mapWidth / countX;
    var cellHeight = mapHeight / countY;
    var features = "";
	var id_count = 0;

    var coordinates = [],
        c = {
            x: 0,
            y: mapHeight
        }, //cursor
        //top-left/top-right/bottom-right/bottom-left
        tLx, tLy, tRx, tRy,
        bRx, bRy, bLx, bLy;

    // build coordinates array, from top-left to bottom-right
    //count by row
    for (var iY = 0; iY < countY; iY++) {
        //count by cell in row
        for (var iX = 0; iX < countX; iX++) {
			id_count++;
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
            if ((iX == countX - 1) && (iY == countY - 1)) { //On gère la dernière entrée
                features += '{"type": "Feature", "properties": {"id": ' + id_count + '},"geometry": {"type": "Polygon","coordinates": [[[' + cell[0] + '],[' + cell[1] + '],[' + cell[2] + '],[' + cell[3] + '],[' + cell[4] + ']]]}}'
            } else {
                features += '{"type": "Feature", "properties": {"id": ' + id_count + '},"geometry": {"type": "Polygon","coordinates": [[[' + cell[0] + '],[' + cell[1] + '],[' + cell[2] + '],[' + cell[3] + '],[' + cell[4] + ']]]}},'
            }
            //refresh cusror for cell
            c.x = c.x + cellWidth;
        }
        //refresh cursor for row
        c.x = 0;
        c.y = c.y - cellHeight;
    }

    var grid = '{"type": "FeatureCollection","features": [' + features + ']}';

    print(grid);

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