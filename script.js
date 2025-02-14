function calculateCreatures(){
	   
     let initialPopulation = parseFloat(prompt('Enter the initial population :'));
     let growthRate = parseFloat(prompt('Enter the rate of growth: '));
     let time = parseFloat(prompt('Enter the time in hours: '));
	               
     let finalPopulation = Math.round(initialPopulation*Math.pow(Math.E, (growthRate*time)));
                      
     let creaturesLocation = prompt('Enter the region or location of the monster: ');
     let creaturesName = prompt('Enter the name of the monster: ');
	 
	 let creaturesInfo = creaturesLocation.concat(" ", creaturesName).toUpperCase();
                      
      document.getElementById("result").innerHTML = "After " + time + " hours, the population of " + creaturesInfo + " has increased to " + finalPopulation;
      
   }
