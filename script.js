// Write your JavaScript code here!

//const { myFetch, formSubmission, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   let form = document.querySelector("form");
   let listedPlanetsResponse = myFetch("https://handlers.education.launchcode.org/static/planets.json");
   console.log(listedPlanetsResponose);
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planet = pickPlanet(planets);
        addDestinationInfo(planet.name, planet.diameter, planet.star,planet.distance, planet.moons,planet.imageUrl );
   })
   pickPlanet(planets);

   form.addEventListener('submit', function (e) {
    e.preventDefault();
console.log("Hello");
    });
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    console.log("Goodbye");
});
