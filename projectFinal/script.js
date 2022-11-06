 matrix = []


 function generateMatrix(side, GrassCount, GrassEaterCount, GishatichCount, MardCount){
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

        let gr = new Grass(x,y)
        grassArr.push(gr)
        matrix[y][x] = 1;
    }
    }

    

    for (let i = 0; i < GrassEaterCount; i++) {
    let x = Math.round(random(0, side - 1))
    let y = Math.round(random(0, side - 1))
    if (matrix[y][x] == 0) {
        let Xt = new Xotaker(x,y)
        xotakerArr.push(Xt)
        matrix[y][x] = 2;

    }

    }

    for (let i = 0; i < GishatichCount; i++) {
        let x = Math.round(random(0, side - 1))
        let y = Math.round(random(0, side - 1))
        if (matrix[y][x] == 0) {

            let gt = new gishatich(x,y)
            gishatichArr.push(gt)
            matrix[y][x] = 3;
        }
        }

        for (let i = 0; i < MardCount; i++) {
            let x = Math.round(random(0, side - 1))
            let y = Math.round(random(0, side - 1))
            if (matrix[y][x] == 0) {

                let mt = new Mard(x,y)
                mardArr.push(mt)
                matrix[y][x] = 4;
            }
            }


    }

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

function setup(){
    frameRate(20)
    generateMatrix(60, 48, 40, 30, 5)
    createCanvas( side * matrix[0].length   , side * matrix.length )
    background("grey")


 
}

function draw(){



     console.log(grassArr.length)
    for(let i in grassArr){
        grassArr[i].mul()
    }
     console.log(grassMutantArr.length)
    for(let i in grassMutantArr){
        grassMutantArr[i].mul()
    }
     console.log(xotakerArr.length)
    for(let i in xotakerArr){
        xotakerArr[i].move()
    }
    console.log(xotakerMutantArr.length)
    for(let i in xotakerMutantArr){
        xotakerMutantArr[i].move()
    }
     console.log(gishatichArr.length)
    for(let i in gishatichArr) {
        gishatichArr[i].move()
    }
     console.log(gishatichMutantArr.length)
    for(let i in gishatichMutantArr) {
        gishatichMutantArr[i].move()
    }
     console.log(mardArr.length)
    for(let i in mardArr) {
        mardArr[i].move()
    }

    console.log("--------=---");
    

    


    
    for(let y = 0 ; y < matrix.length ; y++){

        for(let x = 0 ; x < matrix[y].length; x++){

            if(matrix[y][x] == 1){
                fill("green")
            }
            else if(matrix[y][x] == 2){
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
            else{
                fill("#684C20")
            }


            
            rect( x * side , y * side , side , side )
            

        }

    }
    
    

    


  
}