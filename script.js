//const { pickPlanet, myFetch } = require("./scriptHelper");
//const { validateInput, formSubmission, pickPlanet, myFetch, addDestinationInfo } = require("./scriptHelper");
// Write your JavaScript code here!
//const { myFetch, formSubmission, pickPlanet } = require("./scriptHelper");

//const { formSubmission } = require("./scriptHelper");

//let window;
window.addEventListener("load", function() {
   // let list = document.querySelector("#faultyItems");
    // let pilot = document.querySelector("input[name=pilotName]").value;
    // let copilot = document.querySelector("input[name=copilotname]").value;
    // let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    // let cargoLevel = document.querySelector("input[name=cargoMass]").value;

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
        //pickPlanet(planets); 
    let form = document.querySelector("form");
    let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";
    let pilot = document.querySelector ("input[name = pilotName]").value;
    let copilot = document.querySelector ("input[name = copilotName]").value;
    let fuelLevel = document.querySelector ("input[name = fuelLevel]").value;
    let cargoLevel = document.querySelector ("input[name = cargoMass]").value;

    form.addEventListener('submit', function (event) {
        //get all the values out of the form
    //formSubmission(document, list, form.pilotName.value, form.copilotName.value, form.fuelLevel.value, form.cargoMass.value);
    
   formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
   
    });
    event.preventDefault();
});

   
