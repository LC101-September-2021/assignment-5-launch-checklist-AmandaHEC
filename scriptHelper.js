// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
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
    let numberInput = Number(testInput);
        if (testInput === "") {
            //console.log("All fields are required.");
            return "Empty";
        } else if (isNaN(numberInput)) {
            //console.log(testInput + "is not a number.")
            return "Not a Number";
        } else {
            //console.log(testInput + "is a number.")
            return "Is a Number";
        }
        
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    list = document.querySelector("#faultyItems");
    pilot = document.querySelector("input[name=pilotName]").value;
    copilot = document.querySelector("input[name=copilotName]").value;
    fuelLevelStatus = document.querySelector("input[name=fuelLevel]").value;
    cargoLevelStatus = document.querySelector("input[name=cargoMass]").value;
    pilotStatus = document.getElementById("pilotStatus");
    copilotStatus = document.getElementById("copilotStatus");
    fuelStatus = document.getElementById("fuelStatus");
    cargoStatus = document.getElementById("cargoStatus");
    //console.log(pilotStatus);
    //console.log("Form Submission");

    if (validateInput(pilot.value) === "Empty" || 
        validateInput(copilot.value) === "Empty" || 
        validateInput(fuelLevel.value) === "Empty" || 
        validateInput(cargoLevel.value) === "Empty"
    ){
        alert("All fields are required");
        event.preventDefault();

    } else if (validateInput(fuelLevel.value) === "Not a number" || validateInput(cargoLevel.value) === "Not a number"){
        alert("Invalid entry")
        event.preventDefault();

    } else if (validateInput(pilot.value) === "Is a number" || validateInput(copilot.value) === "Is a number") {
        alert("Invalid entry");

    } else if (fuelLevelStatus < 10000) {
            list.style.visibility === "visible";
            let fuelStatus = "Fuel level too low for launch";
            alert(fuelStatus);
            return fuelStatus;

    } else if (cargoLevelStatus > 10000) {
            let cargoStatus = "Cargo mass too high for launch";
            list.style.visibility === "visible";
            alert(cargoStatus);
            return cargoStatus;
            
    } else if (fuelStatus ===  "Fuel level too low for launch") {
            document.getElementById("fuelStatus") === "Fuel level too low for launch";
            document.getElementById("launchStatus") === "Shuttle not ready for launch";
            document.getElementById("launchStatus").style.color = "red";
            

    } else if (cargoStatus === "Cargo mass too high for launch") {
            document.getElementById("cargoStatus") === "Cargo mass too high for launch";
            document.getElementById("launchStatus") === "Shuttle not ready for launch";
            document.getElementById("launchStatus").style.color = "red";
            

    } else { 
            document.getElementById("launchStatus") === "Shuttle is ready for launch"; //<h2 id="launchStatus" >Awaiting Information Before Launch</h2>
            list.style.visibility = "visible";
            document.getElementById("launchStatus").style.color = "green";
           // <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
           // <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
            // pilotStatus = document.querySelector("input[name=pilotStatus]").value;
            // copilotStatus = document.querySelector("input[name=copilotStatus]").value;
            list.style.visibility = "visible";
            

    } 
    
}

    async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
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
