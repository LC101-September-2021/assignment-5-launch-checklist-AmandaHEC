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
    let pilotName = document.querySelector("form").elements.pilotName.value;
    let copilotName = document.querySelector("form").elements.copilotName.value;
    let fuelLevel = document.querySelector("form").elements.fuelLevel.value;
    let cargoMass = document.querySelector("form").elements.cargoMass.value;
        
    formSubmission(form,list,pilotName,copilotName,fuelLevel,cargoMass);
    event.preventDefault();
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
        //pickPlanet(planets); 
    // let form = document.querySelector("form");
    // let list = document.getElementById("faultyItems");
    // list.style.visibility = "hidden";
    // let pilot = document.querySelector ("input[name = pilotName]").value;
    // let copilot = document.querySelector ("input[name = copilotName]").value;
    // let fuelLevel = document.querySelector ("input[name = fuelLevel]").value;
    // let cargoLevel = document.querySelector ("input[name = cargoMass]").value;

   
      
    
  
   
    
    
   
 