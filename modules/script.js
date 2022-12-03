var socket = io();

var side = 11
// winterButton = document.getElementById('winterButton')
// summerButton = document.getElementById('summerButton')
// winterButton.onclick = socket.on('send season', changeSeason);
// summerButton.onclick = changeSeasonSummer;

function seasonCatcher(season) {
    console.log("inside",season);
}



//console.log(season);
function setup() {
  
    frameRate(20)
    createCanvas(side * 50, side * 50)
    background("grey")
}

function draww(matrix) {





    for (let y = 0; y < matrix.length; y++) {

        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green")
            }
            else if (matrix[y][x] == 2) {
                fill("yellow")
            }
            else if (matrix[y][x] == 3) {
                fill("red")
            }
            else if (matrix[y][x] == 4) {
                fill("blue")
            }
            else if (matrix[y][x] == 5) {
                fill("#67D90F")
            }
            else if (matrix[y][x] == 6) {
                fill("#FF7B05")
            }
            else if (matrix[y][x] == 7) {
                fill("#C90BE6")
            }
            else {
                fill("#684C20")
            }



            rect(x * side, y * side, side, side)


        }

    }







}


socket.on('send matrix', draww);
socket.on('send season', seasonCatcher);
