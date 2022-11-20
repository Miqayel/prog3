var express = require('express');
var LivingCreature = require('./modules/LivingCreature')
var Grass = require('./modules/grass')
var Gishatich = require('./modules/gishatich')
var GrassEater = require('./modules/grassEater')
var Mard = require('./modules/mard')
var app = express();

var server = require('http').createServer(app);

var io = require('socket.io')(server);

var messages = [];

app.use(express.static("./modules"));

app.get('/', function (req, res) {

res.redirect('index.html');

});

server.listen(3000);

io.on('connection', function (socket) {

    for(var i in messages) {
    
    socket.emit("display message", messages[i]);
    
    }
    
    socket.on("send message", function (data) {
    
    messages.push(data);
    
    io.sockets.emit("display message", data);
    
    });
    
    });


    //*************** */


    function generateMatrix(side, GrassCount, GrassEaterCount, GishatichCount, MardCount){
        matrix = []
        for (let i = 0; i < side; i++) {
        let arr = []
        matrix.push(arr)
        for (let j = 0; j < side; j++) {
        matrix[i].push(0)
        }
        }
        
        for (let i = 0; i < GrassCount; i++) {
        let x = Math.round(random(0, side - 1))
        let y = Math.round(random(0, side - 1))
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1;
            
        }
        }
    
        
    
        for (let i = 0; i < GrassEaterCount; i++) {
        let x = Math.round(random(0, side - 1))
        let y = Math.round(random(0, side - 1))
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2;
    
        }
    
        }
    
        for (let i = 0; i < GishatichCount; i++) {
            let x = Math.round(random(0, side - 1))
            let y = Math.round(random(0, side - 1))
            if (matrix[y][x] == 0) {
                matrix[y][x] = 3;
            }
            }
    
            for (let i = 0; i < MardCount; i++) {
                let x = Math.round(random(0, side - 1))
                let y = Math.round(random(0, side - 1))
                if (matrix[y][x] == 0) {
                    matrix[y][x] = 4;
                }
                }
    
                return matrix
        }

        matrix =  generateMatrix(60, 48, 120, 30, 5)
        io.sockets.emit('send matrix', matrix)
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
        
        Grass = require("./Grass")
        GrassEater = require("./GrassEater")
        Predator = require("./Predator")
        Zombie = require("./Zombie")
        Flower = require("./Flower")
        
        function createObject(matrix) {
            for (var y = 0; y < matrix.length; y++) {
                for (var x = 0; x < matrix[y].length; x++) {
                    if (matrix[y][x] == 1) { 
                        let gr = new Grass(x,y,1)
                        grassArr.push(gr)
                    }
                    else if (matrix[y][x] == 2) {
                        let Xt = new GrassEater(x,y, 2)
                        xotakerArr.push(Xt)
                    }
                    else if (matrix[y][x] ==  3) {
                        let gt = new Gishatich(x,y,3)
                        gishatichArr.push(gt)
                    }
                    else if (matrix[y][x] ==  4) {                
                        let mt = new Mard(x,y,4)
                        mardArr.push(mt)
                    }
                }
            }
        io.sockets.emit('send matrix', matrix)
        }
        
        function game() {
            for(let i in grassArr){
                grassArr[i].mul()
            }
             
            for(let i in grassMutantArr){
                grassMutantArr[i].mul()
            }
             
            for(let i in xotakerArr){
                xotakerArr[i].move()
            }
            
            for(let i in xotakerMutantArr){
                xotakerMutantArr[i].move()
            }
            
            for(let i in gishatichArr) {
                gishatichArr[i].move()
            }
             
            for(let i in gishatichMutantArr) {
                gishatichMutantArr[i].move()
            }
            
            for(let i in mardArr) {
                mardArr[i].move()
            }
        
        io.sockets.emit("send matrix", matrix);
        }
        setInterval(game, 1000)
        
        io.on('connection', function (socket) {
        createObject(matrix)
        })