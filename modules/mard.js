let LivingCreature = require('./LivingCreature')
module.exports = class Mard extends LivingCreature {

    constructor(x, y, index) {

        super(x, y, index);
        this.energy = 20;

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
                    [this.x - 2, this.y - 1], 
                    [this.x - 2, this.y + 2],  
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
        let food1Arr = this.chooseCell(1);
        let food2Arr = this.chooseCell(2);
        let food3Arr = this.chooseCell(3);
        if(food1Arr.length > 0 || food2Arr.length > 0 || food3Arr.length > 0)
        {
            this.eat()
            if (this.energy >= 30) {                
                this.mul()
            }
        }

        
        else
        {
            let datarkArr = this.chooseCell(0)
            let emptyCell = random(datarkArr)
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

    
        let food1 = random(this.chooseCell(1));
        let food2 = random(this.chooseCell(2));
        let food3 = random(this.chooseCell(3));
        if (food1) {
            var newX = food1[0];
            var newY = food1[1];
            
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
            console.log(this.energy);
        }
        else if (food2) {
            var newX = food2[0];
            var newY = food2[1];

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
        else if (food3) {
            var newX = food3[0];
            var newY = food3[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;

            for (var i in gishatichArr) {
                if (newX == gishatichArr[i].x && newY == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1);
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
            for (var i in mardArr) {
                if (this.x == mardArr[i].x && this.y == mardArr[i].y) {
                    mardArr.splice(i, 1)
                    break;
                }
            }
    }

    mul(){
        var newCell = random(this.chooseCell(0));
        console.log("bax");

        if (newCell) {
            var newMard = new Mard(newCell[0], newCell[1], 4);
            mardArr.push(newMard);
            matrix[newCell[1]][newCell[0]] = 4;
            this.energy = 20;
        }

     

    }


}







// class Mard {
//     constructor (x, y) {
//         this.x = x
//         this.y = y
//         this.energy = 19
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
//             [this.x + 1, this.y + 1],

//             [this.x - 2, this.y - 2],
//             [this.x - 1, this.y - 2],
//             [this.x + 2, this.y - 2],
//             [this.x - 2, this.y + 1],  
//             [this.x + 2, this.y + 1 ],
//             [this.x - 2, this.y - 1], 
//             [this.x - 2, this.y + 2],  
//             [this.x - 2, this.y + 0],
//             [this.x    , this.y + 2],
//             [this.x + 2, this.y + 2],
            
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
      
//         let arr = this.chooseCell(0)
//         let arr1 = this.chooseCell(1)
//         let arr2 = this.chooseCell(2)
//         let arr3 = this.chooseCell(3)

//         if (arr1.length > 0 || arr2.length > 0 || arr3.length > 0) {
//              this.eat()
             
//              if (this.energy >= 29) {
//                  this.mul() //amen meki tak kcel
//             }
//         }






        
//         else
//         {
//             arr = this.chooseCell(0)
//             let emptyCell = random(arr)
//             if (emptyCell) {
//                 let x = emptyCell[0]
//                 let y = emptyCell[1]

//                 matrix[y][x] = 4
//                 matrix[this.y][this.x] = 0

//                 this.x = x
//                 this.y = y
//             }
//             if(this.energy <= 0){
//                  this.die()
//             }
//         }

//     }

//     eat(){
//         var newCell = random(this.chooseCell(1));
//         var newCell2 = random(this.chooseCell(2));
//         var newCell3 = random(this.chooseCell(3))
//         if (newCell) {
//             var newX = newCell[0];
//             var newY = newCell[1];

//             matrix[this.y][this.x] = 0;
//             matrix[newY][newX] = 4;
        

           
//             for (var i in grassArr) {
//                 if (newX == grassArr[i].x && newY == grassArr[i].y) {
//                     grassArr.splice(i, 1);
                                    
//                     break;
//                 }
//             }
            

//             this.y = newY;
//             this.x = newX;
//             this.energy += 2;
//         }


//         else if (newCell2) {
//             var newX = newCell2[0];
//             var newY = newCell2[1];

//             matrix[this.y][this.x] = 0;
//             matrix[newY][newX] = 4;

//             for (var i in xotakerArr) {
//                 if (newX == xotakerArr[i].x && newY == xotakerArr[i].y) {
//                     xotakerArr.splice(i, 1);
//                     break;
//                 }
//             }
            

//             this.y = newY;
//             this.x = newX;
//             this.energy += 2;
//         }


//         else if (newCell3) {
//             var newX = newCell3[0];
//             var newY = newCell3[1];

//             matrix[this.y][this.x] = 0;
//             matrix[newY][newX] = 4;

//             for (var i in gishatichArr) {
//                 if (newX == gishatichArr[i].x && newY == gishatichArr[i].y) {
//                     gishatichArr.splice(i, 1);
//                     break;
//                 }
//             }
            

//             this.y = newY;
//             this.x = newX;
//             this.energy += 2;
//         }

//     }


    

    
    

//     die() {
//         matrix[this.y][this.x] = 0
//             for (var i in mardArr) {
//                 if (this.x == mardArr[i].x && this.y == mardArr[i].y) {
//                     mardArr.splice(i, 1)
//                     break;
//                 }
//             }
//     }

//     mul() {
//         var newCell = random(this.chooseCell(0));
        

//         if (newCell) {
//             var newMard = new Mard(newCell[0], newCell[1]);
//             mardArr.push(newMard);
//             matrix[newCell[1]][newCell[0]] = 4;
//             this.energy = 8;
//         }
//     }


// }