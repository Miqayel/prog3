let LivingCreature = require('./LivingCreature')

module.exports = class Grass extends LivingCreature{
    
    
    mul() {
        if (season == "spring") {
            var multiplySem = 2;
        }
        else if (season == "summer") {
            var multiplySem = 1;
        }
        else if (season == "autumn") {
            var multiplySem = 4;
        }
        else if (season == "winter") {
            var multiplySem = 6;
        }
        //console.log(season);
        this.multiply++;  
        var newCell = super.random(this.chooseCell(0));   
        let mutacia = super.getRandInt(1, 10)  
        let mutantIndex = 5  
  

        if(this.multiply >= multiplySem && newCell) {      
                if (mutacia == 1) { 
                    var newGrassMutant = new GrassMutant(newCell[0],newCell[1], mutantIndex);       
                    grassMutantArr.push(newGrassMutant);       
                    matrix[newCell[1]][newCell[0]] = mutantIndex;        
                    this.multiply = 0;      
                } else {
                    var newGrass = new Grass(newCell[0],newCell[1], this.index);        
                    grassArr.push(newGrass);       
                    matrix[newCell[1]][newCell[0]] = this.index;        
                    this.multiply = 0;
                }
        }  
            
            
        
        
    }
}

class GrassMutant extends LivingCreature{
    constructor(x, y, index) {

        super(x, y, index);
        this.index = 5
    }
    mul() {
        this.multiply++;  
        var newCell =  super.random(this.chooseCell(0));   
 
  

        if(this.multiply >= 1000000000 && newCell) {                             
                var newGrassMutant = new GrassMutant(newCell[0],newCell[1],  this.index);        
                grassMutantArr.push(newGrassMutant);       
                matrix[newCell[1]][newCell[0]] = this.index;        
                this.multiply = 0;                  
        }
        
    }
}

