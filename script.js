//const { pickPlanet, myFetch } = require("./scriptHelper");
//const { validateInput, formSubmission, pickPlanet, myFetch, addDestinationInfo } = require("./scriptHelper");
// Write your JavaScript code here!
//const { myFetch, formSubmission, pickPlanet } = require("./scriptHelper");
//const { formSubmission } = require("./scriptHelper");
//let window;

//const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

    let form = document.querySelector("form");
    let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";
        
    form.addEventListener("submit", function(event){
    event.preventDefault();
    
    let pilotName = document.querySelector("input[name=pilotName]");
    let pilot = pilotName.value 
    let copilotName = document.querySelector("input[name=copilotName]");
    let copilot = copilotName.value
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let fuel = Number(fuelLevel.value)
    let cargoMass = document.querySelector("input[name=cargoMass]");
    let cargo = Number(cargoMass.value)
        
    formSubmission(document, form,list,pilot,copilot,fuel,cargo);
    
    });

    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       console.log(listedPlanets);
       let planet = pickPlanet(listedPlanets);

       addDestinationInfo(document, planet.name, planet.diameter, planet.star,planet.distance, planet.moons,planet.image);
   })

});
        

   
      
    
  
   
    
    
   
 