function calculateMonsterPopulation() {
	
    let startingPopulation = parseFloat(prompt('Enter the initial population:'));
    let growthFactor = parseFloat(prompt('Enter the rate of growth:'));
    let hoursPassed = parseFloat(prompt('Enter the time in hours:'));
    
    let updatedPopulation = Math.round(startingPopulation * Math.pow(Math.E, (growthFactor * hoursPassed)));
    
    let monsterRegion = prompt('Enter the region or location of the monster:');
    let monsterName = prompt('Enter the name of the monster:');
    
    let monsterInfo = monsterRegion.concat(" ", monsterName).toUpperCase();
    
    document.getElementById("result").innerHTML = 
        "After " + hoursPassed + " hours, the population of " + monsterInfo + " has grown to " + updatedPopulation + ".";
}

