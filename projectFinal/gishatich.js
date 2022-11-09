class Gishatich extends LivingCreature {

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
            if (this.energy >= 20) {
                
                this.mul()
            }
        }

        
        else
        {
            food = this.chooseCell(0)
            let emptyCell = random(food)
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
        var food = random(this.chooseCell(1));
        var food2 = random(this.chooseCell(5))
        if (food) {
            var newX = food[0];
            var newY = food[1];
            
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;

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
        else if (food2) {
            var newX = food2[0];
            var newY = food2[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;

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
        if (mutacia == 1 && newCell) {
            var newGrassEaterMutant = new GrassEaterMutant(newCell[0], newCell[1]);
            xotakerMutantArr.push(newGrassEaterMutant);
            matrix[newCell[1]][newCell[0]] = 6;
            
            this.energy = 8;
        }

        else if (newCell) {
            var newGrassEater = new GrassEater(newCell[0], newCell[1], this.index);
            xotakerArr.push(newGrassEater);
            matrix[newCell[1]][newCell[0]] = 2;
            this.energy = 8;
        }

    }


}