let LivingCreature = require('./LivingCreature')
module.exports = class Gishatich extends LivingCreature {

    constructor(x, y, index) {

        super(x, y, index);
        this.energy = 18;

    }

    getNewCoordinates() {

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

    chooseCell(character) {

        this.getNewCoordinates();

        return super.chooseCell(character);

    }

    // eat, mul, move, die

    move(){
        this.energy--
        let food = this.chooseCell(2)
        let foodMutant = this.chooseCell(6)
        if(food.length > 0 || foodMutant.length > 0)
        {
            this.eat()
                if (season == "spring") {
                    var multiplySem = 15;
                }
                else if (season == "summer") {
                    var multiplySem = 10;
                }
                else if (season == "autumn") {
                    var multiplySem = 20;
                }
                else if (season == "winter") {
                    var multiplySem = 30;
                }
            if (this.energy >= multiplySem) {
                
                this.mul()
            }
        }

        
        else
        {
            food = this.chooseCell(0)
            let emptyCell =  super.random(food)
            if (emptyCell) {
                let x = emptyCell[0]
                let y = emptyCell[1]

                matrix[y][x] = this.index
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
        var food =  super.random(this.chooseCell(2));
        var food2 =  super.random(this.chooseCell(6))
        if (food) {
            var newX = food[0];
            var newY = food[1];
            
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;

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
        else if (food2) {
            var newX = food2[0];
            var newY = food2[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;

            for (var i in xotakerMutantArr) {
                if (newX == xotakerMutantArr[i].x && newY == xotakerMutantArr[i].y) {
                    xotakerMutantArr.splice(i, 1);
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
            for (var i in gishatichArr) {
                if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1)
                    break;
                }
            }
    }

    mul(){
        var newCell =  super.random(this.chooseCell(0));
        
        let mutacia =  super.getRandInt(1, 10)
        if (mutacia == 1 && newCell) {
            var newGishatichMutant = new GishatichMutant(newCell[0], newCell[1], 7);
            gishatichMutantArr.push(newGishatichMutant);
            matrix[newCell[1]][newCell[0]] = 7;
            
            this.energy = 8;
        }

        else if (newCell) {
            var newGishatich = new Gishatich(newCell[0], newCell[1], this.index);
            gishatichArr.push(newGishatich);
            matrix[newCell[1]][newCell[0]] = 3;
            this.energy = 8;
        }

    }


}

class GishatichMutant extends LivingCreature {

    constructor(x, y, index) {

        super(x, y, index);
        this.energy = 35;

    }

    getNewCoordinates() {

        this.directions = [
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
        ];

    }

    chooseCell(character) {

        this.getNewCoordinates();

        return super.chooseCell(character);

    }


    move(){
        this.energy--
        let food = this.chooseCell(2)
        let foodMutant = this.chooseCell(6)
        if(food.length > 0 || foodMutant.length > 0)
        {
            this.eat()
            if (this.energy >= 1000000) {
                
                this.mul()
            }
        }

        
        else
        {
            food = this.chooseCell(0)
            let emptyCell =  super.random(food)
            if (emptyCell) {
                let x = emptyCell[0]
                let y = emptyCell[1]

                matrix[y][x] = this.index
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
        var food =  super.random(this.chooseCell(2));
        var food2 =  super.random(this.chooseCell(6))
        if (food) {
            var newX = food[0];
            var newY = food[1];
            
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;

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
        else if (food2) {
            var newX = food2[0];
            var newY = food2[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;

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
        var newCell =  super.random(this.chooseCell(0));
        

        if (newCell) {
            var newGishatichMutant = new GishatichMutant(newCell[0], newCell[1], 7);
            gishatichMutantArr.push(newGishatichMutant);
            matrix[newCell[1]][newCell[0]] = 7;
            this.energy = 35;
        }

     

    }


}

