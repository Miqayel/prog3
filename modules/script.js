var socket = io();

var side = 11

function changeSeason(season) {
    season = "winter";
}

window.onclick = changeSeason;

console.log(season);
function setup() {
  
}

function draww(matrix) {



    frameRate(20)
    createCanvas(side * matrix[0].length, side * matrix.length)
    background("grey")


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
socket.on('send season', changeSeason);