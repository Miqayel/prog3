class Grass extends LivingCreature{
    
    mul() {
        this.multiply++;  
        var newCell = random(this.chooseCell(0));   
        let mutacia = getRandInt(1, 10)  
        let mutantIndex = 5  
  

        if(this.multiply >= 2 && newCell) {     
            
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
    
    mul() {
        this.multiply++;  
        var newCell = random(this.chooseCell(0));   
        let mutantIndex = 5  
  

        if(this.multiply >= 1000000000 && newCell) {                             
                var newGrassMutant = new GrassMutant(newCell[0],newCell[1], mutantIndex);        
                grassMutantArr.push(newGrassMutant);       
                matrix[newCell[1]][newCell[0]] = this.index;        
                this.multiply = 0;                  
        }
        
    }
}

