class GrassEater extends LivingCreature {

    constructor(x, y, index) {

        super(x, y, index);
        this.energy = 8;

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
        let food = this.chooseCell(1)
        let foodMutant = this.chooseCell(5)
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
        if (mutacia == 1 && newCell) {
            var newGrassEaterMutant = new XotakerMutant(newCell[0], newCell[1]);
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



// class XotakerMutant{
//     constructor(x,y){
//         this.x = x
//         this.y = y
//         this.energy = 13
//         this.direction = []
//     }
    
//     updateDirection(){
//         this.direction = [
//             [this.x - 1, this.y - 1],
//             [this.x    , this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y    ],  
//             [this.x + 1, this.y    ],
//             [this.x - 1, this.y + 1],
//             [this.x    , this.y + 1],
//             [this.x + 1, this.y + 1]
//         ]
//     }

//     chooseCell(ch){
//         this.updateDirection()
//         var found = [];
//         for(let i in this.direction){
            
//             let x = this.direction[i][0];  /* tal random x u y */
//             let y = this.direction[i][1];

//             if(x >= 0 && y >= 0 && x <= matrix.length - 1 && y <= matrix.length - 1){
                
//                 if(matrix[y][x] == ch){
//                     found.push(this.direction[i])
//                 }

//             }
//         }

//         return found
//     }

//     move(){
//         this.energy--
//         let arr1 = this.chooseCell(1)
//         let arr2 = this.chooseCell(5)
//         if(arr1.length > 0 || arr2.length > 0)
//         {
//             this.eat()
//             if (this.energy >= 12) {
                
//                 this.mul()
//             }
//         }

        
//         else
//         {
//             arr1 = this.chooseCell(0)
//             let emptyCell = random(arr1)
//             if (emptyCell) {
//                 let x = emptyCell[0]
//                 let y = emptyCell[1]

//                 matrix[y][x] = 6
//                 matrix[this.y][this.x] = 0

//                 this.x = x
//                 this.y = y
//             }
//             if(this.energy <= 0){
//                 this.die()
//             }
//         }

//     }
//     eat(){
//         var newCell = random(this.chooseCell(1));
//         var newCell2 = random(this.chooseCell(5))
//         if (newCell) {
//             var newX = newCell[0];
//             var newY = newCell[1];

//             matrix[this.y][this.x] = 0;
//             matrix[newY][newX] = 2;

//             for (var i in grassArr) {
//                 if (newX == grassArr[i].x && newY == grassArr[i].y) {
//                     grassArr.splice(i, 1);
//                     break;
//                 }
//             }

//             this.y = newY;
//             this.x = newX;
//             this.energy += 1;
//         }
//         else if (newCell2) {
//             var newX = newCell2[0];
//             var newY = newCell2[1];

//             matrix[this.y][this.x] = 0;
//             matrix[newY][newX] = 6;

//             for (var i in grassMutantArr) {
//                 if (newX == grassMutantArr[i].x && newY == grassMutantArr[i].y) {
//                     grassMutantArr.splice(i, 1);
//                     break;
//                 }
//             }

//             this.y = newY;
//             this.x = newX;
//             this.energy += 3;
//         }
//     }
    
//     die(){
//         matrix[this.y][this.x] = 0
//             for (var i in xotakerMutantArr) {
//                 if (this.x == xotakerMutantArr[i].x && this.y == xotakerMutantArr[i].y) {
//                     xotakerMutantArr.splice(i, 1)
//                     break;
//                 }
//             }
//     }

//     mul(){
//         var newCell = random(this.chooseCell(0));
//         // console.log("abdosfgy8ahgadfuy")

//         if (newCell && 1 > 2) {
//             var newGrassEaterM = new XotakerMutant(newCell[0], newCell[1]);
//             xotakerMutantArr.push(newGrassEaterM);
//             matrix[newCell[1]][newCell[0]] = 6;
//             this.energy = 8;
//         }
//     }

// }




