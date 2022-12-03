var express = require('express');



var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);



app.use(express.static("./modules"));

app.get('/', function (req, res) {

    res.redirect('index.html');

});

server.listen(3000);




//*************** */


function random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}



matrix = [];
season = "spring";
seasonArr = ["spring", "summer", "autumn", "winter"]


LivingCreature = require('./modules/LivingCreature')
Grass = require('./modules/grass')
Gishatich = require('./modules/gishatich')
GrassEater = require('./modules/grassEater')
Mard = require('./modules/mard')

function generateMatrix(side, GrassCount, GrassEaterCount, GishatichCount, MardCount) {
    // var matrix = []
    for (let i = 0; i < side; i++) {
        matrix[i] = []
        for (let j = 0; j < side; j++) {
            matrix[i][j] = 0
        }
    }

    for (let i = 0; i < GrassCount; i++) {
        let x = Math.floor(Math.random() * side)
        let y = Math.floor(Math.random() * side)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1;

        }
    }



    for (let i = 0; i < GrassEaterCount; i++) {
        let x = Math.floor(Math.random() * side)
        let y = Math.floor(Math.random() * side)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2;

        }

    }

    for (let i = 0; i < GishatichCount; i++) {
        let x = Math.floor(Math.random() * side)
        let y = Math.floor(Math.random() * side)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3;
        }
    }

    for (let i = 0; i < MardCount; i++) {
        let x = Math.floor(Math.random() * side)
        let y = Math.floor(Math.random() * side)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 4;
        }
    }

    return matrix
}

matrix = generateMatrix(60, 48, 120, 30, 5)

io.sockets.emit('send matrix', matrix)
io.sockets.emit("send season", season);
// console.log(matrix);
var side = 11

grassArr = []
grassMutantArr = []

xotakerArr = []
xotakerMutantArr = []

boombArr = []

gishatichArr = []
gishatichMutantArr = []

mardArr = []

zeroCount = []



function createObject(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y, 1)
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                let Xt = new GrassEater(x, y, 2)
                xotakerArr.push(Xt)
            }
            else if (matrix[y][x] == 3) {
                let gt = new Gishatich(x, y, 3)
                gishatichArr.push(gt)
            }
            else if (matrix[y][x] == 4) {
                let mt = new Mard(x, y, 4)
                mardArr.push(mt)
            }
        }
    }
    io.sockets.emit('send matrix', matrix);
    io.sockets.emit("send season", season);
}

function game() {
    for (let i in grassArr) {
        grassArr[i].mul()
   
    }

    for (let i in grassMutantArr) {
        grassMutantArr[i].mul()
    }

    for (let i in xotakerArr) {
        xotakerArr[i].move()
    }

    for (let i in xotakerMutantArr) {
        xotakerMutantArr[i].move()
    }

    for (let i in gishatichArr) {
        gishatichArr[i].move()
    }

    for (let i in gishatichMutantArr) {
        gishatichMutantArr[i].move()
    }

    for (let i in mardArr) {
        mardArr[i].move()
    }

    io.sockets.emit("send matrix", matrix);

}
setInterval(game, 200)

var seasonI = 0;
function changeSeason () {
    if (seasonI < 3) {
        seasonI++;
        season = seasonArr[seasonI];   
    }
    else {
        seasonI = 0;
        season = seasonArr[seasonI];
    }
    io.sockets.emit("send season", season);
}
setInterval(changeSeason, 5000)

io.on('connection', function (socket) {
    createObject(matrix)
})
