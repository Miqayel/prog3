index = 0

class LivingCreature {

    constructor(x, y, index){
    
        this.x = x;   
        this.y = y;    
        this.multiply = 0;    
        this.index = index;    
        this.directions = [    
            [this.x - 1, this.y - 1],    
            [this.x, this.y - 1],    
            [this.x + 1, this.y - 1],    
            [this.x - 1, this.y],    
            [this.x + 1, this.y],    
            [this.x - 1, this.y + 1],    
            [this.x, this.y + 1],    
            [this.x + 1, this.y + 1]    
        ];
    
    }
    
        chooseCell(ch) { 

        var found = [];    
            for (var i in this.directions) {    
                var x = this.directions[i][0];    
                var y = this.directions[i][1];
                
                if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                
                    if (matrix[y][x] == ch) {    
                    found.push(this.directions[i]);    
                    }
                }
            
            }
        
        return found;
        
        }
    
}


function getRandInt(min,max)
{
	var z = Math.floor(Math.random()*(max-min+1)) + min;
	return z;
}





class Xotaker{
    constructor(x,y){
        this.x = x
        this.y = y
        this.energy = 8
        this.direction = []
    }
    
    updateDirection(){
        this.direction = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],  
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }

    chooseCell(ch){
        this.updateDirection()
        var found = [];
        for(let i in this.direction){
            
            let x = this.direction[i][0];  /* tal random x u y */
            let y = this.direction[i][1];

            if(x >= 0 && y >= 0 && x <= matrix.length - 1 && y <= matrix.length - 1){
                
                if(matrix[y][x] == ch){
                    found.push(this.direction[i])
                }

            }
        }

        return found
    }

    move(){
        this.energy--
        let arr1 = this.chooseCell(1)
        let arr2 = this.chooseCell(5)
        if(arr1.length > 0 || arr2.length > 0)
        {
            this.eat()
            if (this.energy >= 20) {
                
                this.mul()
            }
        }

        
        else
        {
            arr1 = this.chooseCell(0)
            let emptyCell = random(arr1)
            if (emptyCell) {
                let x = emptyCell[0]
                let y = emptyCell[1]

                matrix[y][x] = 2
                matrix[this.y][this.x] = 0

                this.x = x
                this.y = y
            }
            if(this.energy <= 0){
                this.die()
            }
        }

    }
    eat(){
        var newCell = random(this.chooseCell(1));
        var newCell2 = random(this.chooseCell(5))
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 2;

            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                                    
                    break;
                }
            }

            this.y = newY;
            this.x = newX;
            this.energy += 2;
        }
        else if (newCell2) {
            //console.log(6554858)
            var newX = newCell2[0];
            var newY = newCell2[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 2;

            for (var i in grassMutantArr) {
                if (newX == grassMutantArr[i].x && newY == grassMutantArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }

            this.y = newY;
            this.x = newX;
            this.energy += 1;
        }
    }
    
    die(){
        matrix[this.y][this.x] = 0
            for (var i in xotakerArr) {
                if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1)
                    break;
                }
            }
    }

    mul(){
        var newCell = random(this.chooseCell(0));
        
        let mutacia = getRandInt(1, 10)
        // console.log("abdosfgy8ahgadfuy")
        if (mutacia == 1 && newCell) {
            var newGrassEaterMutant = new XotakerMutant(newCell[0], newCell[1]);
            xotakerMutantArr.push(newGrassEaterMutant);
            matrix[newCell[1]][newCell[0]] = 6;
            
            this.energy = 8;
        }

        else if (newCell) {
            var newGrassEater = new Xotaker(newCell[0], newCell[1]);
            xotakerArr.push(newGrassEater);
            matrix[newCell[1]][newCell[0]] = 2;
            this.energy = 8;
        }

    }

}

class gishatich {
    constructor (x, y) {
        this.x = x
        this.y = y
        this.energy = 19
        this.direction = []
    }

    updateDirection(){
        this.direction = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],  
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }

    chooseCell(ch){
        this.updateDirection()
        var found = [];
        for(let i in this.direction){
            
            let x = this.direction[i][0];  /* tal random x u y */
            let y = this.direction[i][1];

            if(x >= 0 && y >= 0 && x <= matrix.length - 1 && y <= matrix.length - 1){
                
                if(matrix[y][x] == ch){
                    found.push(this.direction[i])
                }

            }
        }

        return found
    }


    move(){
        this.energy--
        let arr = this.chooseCell(2)

        if(arr.length > 0)
        {
            this.eat()
            if (this.energy >= 20) {
                
                this.mul()
            }
        }


        
        else
        {
            arr = this.chooseCell(0)
            let emptyCell = random(arr)
            if (emptyCell) {
                let x = emptyCell[0]
                let y = emptyCell[1]

                matrix[y][x] = 3
                matrix[this.y][this.x] = 0

                this.x = x
                this.y = y
            }
            if(this.energy <= 0){
              
                this.die()
            }
        }

    }

    eat(){
        var newCell = random(this.chooseCell(2));

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 3;

            for (var i in xotakerArr) {
                if (newX == xotakerArr[i].x && newY == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1);
                    break;
                }
            }
            

            this.y = newY;
            this.x = newX;
            this.energy += 2;
        }
    }

    die(){
        matrix[this.y][this.x] = 0

            for (var i in gishatichArr) {
                if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1)
                    break;
                }
            }
            
    }

    mul(){
        var newCell = random(this.chooseCell(0));
        
        let mutacia = getRandInt(1, 10)

        if (newCell && mutacia == 1) {
            var newGishatichMutant = new gishatichMutant(newCell[0], newCell[1]);
            gishatichMutantArr.push(newGishatichMutant);
            matrix[newCell[1]][newCell[0]] = 7;
            this.energy = 1;
        }
        else if (newCell) {
            var newGishatich = new gishatich(newCell[0], newCell[1]);
            gishatichArr.push(newGishatich);
            matrix[newCell[1]][newCell[0]] = 3;
            this.energy = 4;
        }

    }


}


class Mard {
    constructor (x, y) {
        this.x = x
        this.y = y
        this.energy = 19
        this.direction = []
    }

    updateDirection(){
        this.direction = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],  
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1],

            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y + 1],  
            [this.x + 2, this.y + 1 ],
            [this.x - 2, this.y - 1], 
            [this.x - 2, this.y + 2],  
            [this.x - 2, this.y + 0],
            [this.x    , this.y + 2],
            [this.x + 2, this.y + 2],
            
        ]
    }

    chooseCell(ch){
        this.updateDirection()
        var found = [];
        for(let i in this.direction){
            
            let x = this.direction[i][0];  /* tal random x u y */
            let y = this.direction[i][1];

            if(x >= 0 && y >= 0 && x <= matrix.length - 1 && y <= matrix.length - 1){
                
                if(matrix[y][x] == ch){
                    found.push(this.direction[i])
                }
                
            }
        }

        return found
    }


    move(){
        
        this.energy--
      
        let arr = this.chooseCell(0)
        let arr1 = this.chooseCell(1)
        let arr2 = this.chooseCell(2)
        let arr3 = this.chooseCell(3)

        if (arr1.length > 0 || arr2.length > 0 || arr3.length > 0) {
             this.eat()
             
             if (this.energy >= 29) {
                 this.mul() //amen meki tak kcel
            }
        }






        
        else
        {
            arr = this.chooseCell(0)
            let emptyCell = random(arr)
            if (emptyCell) {
                let x = emptyCell[0]
                let y = emptyCell[1]

                matrix[y][x] = 4
                matrix[this.y][this.x] = 0

                this.x = x
                this.y = y
            }
            if(this.energy <= 0){
                 this.die()
            }
        }

    }

    eat(){
        var newCell = random(this.chooseCell(1));
        var newCell2 = random(this.chooseCell(2));
        var newCell3 = random(this.chooseCell(3))
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 4;
        

           
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                                    
                    break;
                }
            }
            

            this.y = newY;
            this.x = newX;
            this.energy += 2;
        }


        else if (newCell2) {
            var newX = newCell2[0];
            var newY = newCell2[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 4;

            for (var i in xotakerArr) {
                if (newX == xotakerArr[i].x && newY == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1);
                    break;
                }
            }
            

            this.y = newY;
            this.x = newX;
            this.energy += 2;
        }


        else if (newCell3) {
            var newX = newCell3[0];
            var newY = newCell3[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 4;

            for (var i in gishatichArr) {
                if (newX == gishatichArr[i].x && newY == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1);
                    break;
                }
            }
            

            this.y = newY;
            this.x = newX;
            this.energy += 2;
        }

    }


    

    
    

    die() {
        matrix[this.y][this.x] = 0
            for (var i in mardArr) {
                if (this.x == mardArr[i].x && this.y == mardArr[i].y) {
                    mardArr.splice(i, 1)
                    break;
                }
            }
    }

    mul() {
        var newCell = random(this.chooseCell(0));
        

        if (newCell) {
            var newMard = new Mard(newCell[0], newCell[1]);
            mardArr.push(newMard);
            matrix[newCell[1]][newCell[0]] = 4;
            this.energy = 8;
        }
    }


}


class GrassMutant  {
    constructor(x,y){
        this.x = x
        this.y = y 
        this.multiply = 0;
        this.direction = [

            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ]
        matrix[y][x] = 5
    }

    chooseCell(ch){
        var found = [];

        for(let i in this.direction){
            
            let x = this.direction[i][0];
            let y = this.direction[i][1];

            if(x >= 0 && y >= 0 && x <= matrix.length - 1 && y <= matrix.length - 1){
                
                if(matrix[y][x] == ch){
                    found.push(this.direction[i])
                }

            }
        }

        return found
    }


    mul(){
        
        this.multiply++

        let emptyCells = this.chooseCell(0)
        let randomCell = random(emptyCells)

        if (this.multiply >= 1000000000 && randomCell != undefined) {
            
            let x = randomCell[0]
            let y = randomCell[1]

            matrix[y][x] = 5
            let grMt = new GrassMutant(x,y)
            grassMutantArr.push(grMt)
            this.multiply = 0
        }
    }
        
}


class XotakerMutant{
    constructor(x,y){
        this.x = x
        this.y = y
        this.energy = 13
        this.direction = []
    }
    
    updateDirection(){
        this.direction = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],  
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }

    chooseCell(ch){
        this.updateDirection()
        var found = [];
        for(let i in this.direction){
            
            let x = this.direction[i][0];  /* tal random x u y */
            let y = this.direction[i][1];

            if(x >= 0 && y >= 0 && x <= matrix.length - 1 && y <= matrix.length - 1){
                
                if(matrix[y][x] == ch){
                    found.push(this.direction[i])
                }

            }
        }

        return found
    }

    move(){
        this.energy--
        let arr1 = this.chooseCell(1)
        let arr2 = this.chooseCell(5)
        if(arr1.length > 0 || arr2.length > 0)
        {
            this.eat()
            if (this.energy >= 12) {
                
                this.mul()
            }
        }

        
        else
        {
            arr1 = this.chooseCell(0)
            let emptyCell = random(arr1)
            if (emptyCell) {
                let x = emptyCell[0]
                let y = emptyCell[1]

                matrix[y][x] = 6
                matrix[this.y][this.x] = 0

                this.x = x
                this.y = y
            }
            if(this.energy <= 0){
                this.die()
            }
        }

    }
    eat(){
        var newCell = random(this.chooseCell(1));
        var newCell2 = random(this.chooseCell(5))
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 2;

            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }

            this.y = newY;
            this.x = newX;
            this.energy += 1;
        }
        else if (newCell2) {
            var newX = newCell2[0];
            var newY = newCell2[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 6;

            for (var i in grassMutantArr) {
                if (newX == grassMutantArr[i].x && newY == grassMutantArr[i].y) {
                    grassMutantArr.splice(i, 1);
                    break;
                }
            }

            this.y = newY;
            this.x = newX;
            this.energy += 3;
        }
    }
    
    die(){
        matrix[this.y][this.x] = 0
            for (var i in xotakerMutantArr) {
                if (this.x == xotakerMutantArr[i].x && this.y == xotakerMutantArr[i].y) {
                    xotakerMutantArr.splice(i, 1)
                    break;
                }
            }
    }

    mul(){
        var newCell = random(this.chooseCell(0));
        // console.log("abdosfgy8ahgadfuy")

        if (newCell && 1 > 2) {
            var newGrassEaterM = new XotakerMutant(newCell[0], newCell[1]);
            xotakerMutantArr.push(newGrassEaterM);
            matrix[newCell[1]][newCell[0]] = 6;
            this.energy = 8;
        }
    }

}

class gishatichMutant {
    constructor (x, y) {
        this.x = x
        this.y = y
        this.energy = 35
        this.direction = []
    }

    updateDirection(){
        this.direction = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],  
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1],

            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y + 1],  
            [this.x + 2, this.y + 1 ],
            [this.x - 2, this.y + 0],
            [this.x    , this.y + 2],
            [this.x + 2, this.y + 2],
        ]
    }

    chooseCell(ch){
        this.updateDirection()
        var found = [];
        for(let i in this.direction){
            
            let x = this.direction[i][0];  /* tal random x u y */
            let y = this.direction[i][1];

            if(x >= 0 && y >= 0 && x <= matrix.length - 1 && y <= matrix.length - 1){
                
                if(matrix[y][x] == ch){
                    found.push(this.direction[i])
                }

            }
        }

        return found
    }


    move(){
        this.energy--
        let arr = this.chooseCell(2)
        let arr2 = this.chooseCell(6)
        if(arr.length || arr2.length > 0)
        {
            this.eat()
            if (this.energy >= 10000000001) {
                
                this.mul()
            }
        }

        
        else
        {
            
            arr = this.chooseCell(0)
            let emptyCell = random(arr)
            if (emptyCell) {
                let x = emptyCell[0]
                let y = emptyCell[1]

                matrix[y][x] = 7
                matrix[this.y][this.x] = 0

                this.x = x
                this.y = y
            }
            if(this.energy <= 0){
                this.die()
            }
        }

    }

    eat(){
        var newCell = random(this.chooseCell(2));
        var newCell2 = random(this.chooseCell(6))
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 7;

            for (var i in xotakerArr) {
                if (newX == xotakerArr[i].x && newY == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1);
                    break;
                }
            }
            

            this.y = newY;
            this.x = newX;
            this.energy += 2;
        }
        else if (newCell2) {
            var newX = newCell2[0];
            var newY = newCell2[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 7;

            for (var i in xotakerMutantArr) {
                if (newX == xotakerMutantArr[i].x && newY == xotakerMutantArr[i].y) {
                    xotakerMutantArr.splice(i, 1);
                    break;
                }
            }
            

            this.y = newY;
            this.x = newX;
            this.energy += 3;
        }

    }

    die(){
        matrix[this.y][this.x] = 0
            for (var i in gishatichMutantArr) {
                if (this.x == gishatichMutantArr[i].x && this.y == gishatichMutantArr[i].y) {
                    gishatichMutantArr.splice(i, 1)
                    break;
                }
            }
            
    }

    mul(){
        var newCell = random(this.chooseCell(0));
        

        if (newCell &&  1 > 2) {
            var newGishatichMutant = new gishatichMutant(newCell[0], newCell[1]);
            gishatichMutantArr.push(newGishatichMutant);
            matrix[newCell[1]][newCell[0]] = 7;
            this.energy = 8;
        }
    }


}




