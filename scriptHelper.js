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
            console.log("All fields are required.");
            return "Empty";
        } else if (isNaN(numberInput)) {
            console.log("Make sure to enter valid information for each field.")
            return "Not a Number";
        } else if (!isNaN(numberInput)) {
            return "Is a Number";
        }
        
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    console.log("Form Submission");
    //let x = document.getElementsByClassName("formField");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus") ;
    let cargoStatus = document.getElementById("cargoStatus");
    //let list = document.getElementById("launchForm");

    //pilotStatus ===`${'Pilot Chris is ready for launch'}`;

    //copilotStatus === `${'Co-Pilot Blake is ready for launch'}`;
    let div = document.getElementById("launchStatusCheck"); 
    div.innerHTML = `
        <ol>
        <li id="pilotStatus" data-testid="pilotStatus">Pilot ${Chris} is Ready</li>
        <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${Blake} is Ready</li>
        <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
        <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
        </ol>
        `;
    
        if (fuelStatus < 10000) {
            list.style.visibility === "visible";
            console.log("There is not enough fuel for the journey.");
            //<h2 id="launchStatus" data-testid="launchStatus">${}</h2>
            document.getElementById("launchStatus") ===
            `${'Shuttle not ready for launch'}`;
            document.getElementById("launchStatusCheck").style.color = "red"; 
        }else if (cargoStatus > 10000) {
            list.style.visibility === "visible";
            console.log("There is too much mass for the shuttle to take off.");
            //<h2 id="launchStatus" data-testid="launchStatus">${}</h2>
            document.getElementById("launchStatus") ===
            `${'Shuttle not ready for launch'}`;
            document.getElementById("launchStatusCheck").style.color = "red";
        } else if (fuelStatus >= 10000){
            list.style.visibility === "visible";
            document.getElementById("launchStatus") ===
            `${'The shuttle is ready for launch'}`;
            document.getElementById("launchStatusCheck").style.color = "green";
        } else if (cargoStatus < 10000) {
            list.style.visibility === "visible";
            document.getElementById("launchStatus") ===
            `${'The shuttle is ready for launch'}`;
            document.getElementById("launchStatusCheck").style.color = "green";
        } else {
            list.style.visibility === "visible";
            console.log("Launch is good to go.")
            document.getElementById("launchStatus") ===
            `${'Launch is good to go.'}`;
        }
            //validateInput(testInput);
        
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
    console.log(response);
    });
    //response.json().then( function(json) {    
    //console.log(json);
         
    return response.json();
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
