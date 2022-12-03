var socket = io();

var side = 11
seasonShower = document.getElementById('seasonShower')
// winterButton = document.getElementById('winterButton')
// summerButton = document.getElementById('summerButton')
// winterButton.onclick = socket.on('send season', changeSeason);
// summerButton.onclick = changeSeasonSummer;
seasonForScript = "spring";
function seasonCatcher(season) {
     seasonForScript = season;
     seasonShower.innerText = seasonForScript;

}




function setup() {
  
    frameRate(20)
    createCanvas(side * 50, side * 50)
    background("grey")
}

function draww(matrix) {


   


    for (let y = 0; y < matrix.length; y++) {

        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1 && seasonForScript == "spring") { 
                fill("green")
            }
            else if (matrix[y][x] == 1 && seasonForScript == "summer") {
                fill("#65fa02")
            }
            else if (matrix[y][x] == 1 && seasonForScript == "autumn") {
                fill("#1b4201")
            }
            else if (matrix[y][x] == 1 && seasonForScript == "winter") {
                fill("#ffffff")
            }

            else if (matrix[y][x] == 2 && seasonForScript == "spring") {
                fill("yellow")
            }
            else if (matrix[y][x] == 2 && seasonForScript == "summer") {
                fill("#ddff00")
            }
            else if (matrix[y][x] == 2 && seasonForScript == "autumn") {
                fill("#c8f002")
            }
            else if (matrix[y][x] == 2 && seasonForScript == "winter") {
                fill("#a8ad02")
            }

            else if (matrix[y][x] == 3 && seasonForScript == "spring") {
                fill("red")
            }
            else if (matrix[y][x] == 3 && seasonForScript == "summer") {
                fill("#ff4a4a")
            }
            else if (matrix[y][x] == 3 && seasonForScript == "autumn") {
                fill("#b50202")
            }
            else if (matrix[y][x] == 3 && seasonForScript == "winter") {
                fill("#990e0e")
            }

            else if (matrix[y][x] == 4 && seasonForScript == "spring") {
                fill("blue")
            }
            else if (matrix[y][x] == 4 && seasonForScript == "summer") {
                fill("#1d00fc")
            }
            else if (matrix[y][x] == 4 && seasonForScript == "autumn") {
                fill("#1603a3")
            }
            else if (matrix[y][x] == 4 && seasonForScript == "winter") {
                fill("#0f026e")
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
