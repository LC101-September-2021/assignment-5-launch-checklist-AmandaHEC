// Write your helper functions here!
require("isomorphic-fetch");
function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  let div = document.getElementById("missionTarget");
  div.innerHTML = `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">
    `;
}
function validateInput(testInput) {
  if (testInput === "") {
    return "Empty";
  } else if (Number(isNaN(testInput))) {
    return "Not a Number";
  } else {
    return "Is a Number";
  }
}
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
  pilotStatus = document.getElementById("pilotStatus");
  copilotStatus = document.getElementById("copilotStatus");
  fuelStatus = document.getElementById("fuelStatus");
  cargoStatus = document.getElementById("cargoStatus");
  launchStatus = document.getElementById("launchStatus");
  if (
    validateInput(pilot) === "Empty" ||
    validateInput(copilot) === "Empty" ||
    validateInput(fuelLevel) === "Empty" ||
    validateInput(cargoMass) === "Empty"
  ) {
    alert("All fields are required!");
  } else if (
    validateInput(pilot) === "Is a Number" ||
    validateInput(copilot) === "Is a Number" ||
    validateInput(fuelLevel) === "Not a Number" ||
    validateInput(cargoMass) === "Not a Number"
  ) {
    alert("Make sure to enter valid information for each field!");
  } else {
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    list.style.visibility = "visible";
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = "rgb(199, 37, 78)";
    if (cargoMass > 10000 && fuelLevel < 10000) {
      cargoStatus.innerHTML = "Cargo mass too heavy for launch";
      fuelStatus.innerHTML = "Fuel level too low for launch";
    } else if (fuelLevel < 10000) {
      console.log("Fuel");
      fuelStatus.innerHTML = "Fuel level too low for launch";
    } else if (cargoMass > 10000) {
      console.log("cargoMass");
      cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    } else {
      console.log("else");
      launchStatus.innerHTML = "Shuttle is Ready for Launch";
      launchStatus.style.color = "rgb(65, 159, 106)";
    }
  }
}
async function myFetch() {
  let planetsReturned;
  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    return response.json();
  });
  return planetsReturned;
}
function pickPlanet(planets) {
  let chosenPlanet = Math.floor(Math.random() * planets.length);
  return planets[chosenPlanet];
}
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;


