function save() {

    var countX = 10; //cells by x
    var countY = 10; //cells by y
    var mapWidth = 100;
    var mapHeight = 100;
    var cellWidth = mapWidth / countX;
    var cellHeight = mapHeight / countY;
    var features = "";
    var id_count = 0;

    d3.csv("data/SpeedDating.csv", function(error, data) {
        if (error) throw error;
        data.forEach(function(d){
            if (d==""){
                return -1;
            }
            else{
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

        data.forEach(function(d,i){
            
            var propertiesObj = d;
            propertiesObj["id2"]=propertiesObj["id"];
            delete propertiesObj["id"];
            propertiesObj["id"]=propertiesObj["iid"];
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
            if (i==(l-1)) { //On gère la dernière entrée
                features += '{"type": "Feature", "properties": ' + propertiesObjString + ',"geometry": {"type": "Polygon","coordinates": [[[' + cell[0] + '],[' + cell[1] + '],[' + cell[2] + '],[' + cell[3] + '],[' + cell[4] + ']]]}}'
            } else {
                features += '{"type": "Feature", "properties": ' + propertiesObjString + ',"geometry": {"type": "Polygon","coordinates": [[[' + cell[0] + '],[' + cell[1] + '],[' + cell[2] + '],[' + cell[3] + '],[' + cell[4] + ']]]}},'
            }
            //refresh cusror for cell
            c.x = c.x + cellWidth;
        
        //refresh cursor for row
        c.x = 0;
        c.y = c.y - cellHeight;
    
        });

    // build coordinates array, from top-left to bottom-right
    //count by row
    /*for (var iY = 0; iY < l/200; iY++) {
        //count by cell in row
        for (var iX = 0; iX < l/200; iX++) {
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
<<<<<<< fd6d334541fa3f2314a702a0531bb087213a6a47
                features += '{"type": "Feature", "properties": {"id": ' + id_count + ','
				+ '"gender": ' + '"Man"' + ','
				+ '"age": ' + '"25"'
				+ '},"geometry": {"type": "Polygon","coordinates": [[[' + cell[0] + '],[' + cell[1] + '],[' + cell[2] + '],[' + cell[3] + '],[' + cell[4] + ']]]}}'
            } else {
                features += '{"type": "Feature", "properties": {"id": ' + id_count  + ','
				+ '"gender": ' + '"Man"' + ','
				+ '"age": ' + '"25"'
				+ '},"geometry": {"type": "Polygon","coordinates": [[[' + cell[0] + '],[' + cell[1] + '],[' + cell[2] + '],[' + cell[3] + '],[' + cell[4] + ']]]}},'
=======
                features += '{"type": "Feature", "properties": {"lol": ' + id_count + '},"geometry": {"type": "Polygon","coordinates": [[[' + cell[0] + '],[' + cell[1] + '],[' + cell[2] + '],[' + cell[3] + '],[' + cell[4] + ']]]}}'
            } else {
                features += '{"type": "Feature", "properties": {"lol": ' + id_count + '},"geometry": {"type": "Polygon","coordinates": [[[' + cell[0] + '],[' + cell[1] + '],[' + cell[2] + '],[' + cell[3] + '],[' + cell[4] + ']]]}},'
>>>>>>> 70f38f8ae82016d90e86b6c8112b1393a4159181
            }
            //refresh cusror for cell
            c.x = c.x + cellWidth;
        }
        //refresh cursor for row
        c.x = 0;
        c.y = c.y - cellHeight;
    }*/

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