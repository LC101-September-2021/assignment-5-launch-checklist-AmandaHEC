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

function stopFormSubmission(alertMessage){
    console.log(alertMessage);
    window.alert(alertMessage);
    event.preventDefault();
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    console.log("Form Submission");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus") ;
    let cargoStatus = document.getElementById("cargoStatus");
    let list = document.getElementById("launchForm");
    let div = document.getElementById("launchStatusCheck"); 
    div.innerHTML = `
        <ol>
        <li id="pilotStatus" data-testid="pilotStatus">Pilot ${'Chris'} is Ready</li>
        <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${'Blake'} is Ready</li>
        <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
        <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
        </ol>
        `;

    function fuelLevelStatus(fuelLevel){
        if (fuelLevel < 10000) {
            list.style.visibility === "visible";
            let FuelStatus = "There is not enough fuel for the journey.";
            stopFormSubmission(fuelStatus);
            return fuelStatus;
        }
    }
            // document.getElementById("launchStatus") ===
            // `${'Shuttle not ready for launch'}`;
            //document.getElementById("launchStatusCheck").style.color = "red"; 
        function cargoLevelStatus(cargoLevel) {
            if (cargoLevel > 1000) {
                let cargoStatus = "There is too much mass for the shuttle to take off.";
                stopFormSubmission(cargoStatus);
                return cargoStatus;
            }
        }
            //list.style.visibility === "visible";
            //document.getElementById("launchStatus") ===
            //`${'Shuttle not ready for launch'}`;
            //document.getElementById("launchStatusCheck").style.color = "red";
        function formSubmission(document,list,pilot,copilot,fuelLevel, cargoLevel){

            if (validateInput(pilot) === "Empty" ||
                validateInput(copilot) === "Empty" ||
                validateInput(fuelLevel) === "Empty" ||
                validateInput(cargoLevel) === "Empty"){

                stopFormSubmission("All fields are required");

            } else if (validateInput(fuelLevel === "Not a Number") {

                stopFormSubmission("Fuel level must be a number");

            } else if (validateInput(cargoLevel) === "Not a Number") {

                stopFormSubmission("Cargo Mass must be a number");

            } else {
                list.style.visibility = "visible";
                document.getElementById("pilotStatus").textContent = `Pilot ${pilot} is ready for launch`;
                document.getElementById("copilotStatu").textContent = `Copilot ${copilot} is ready for launch`;
                let shuttleReady = true;
            }

                if (fuelLevelStatus(fuelLevel) ===  "Fuel level too low for launch.") {
                document.getElementById("fuelStatus").textContent = "Not enought fuel for the journey.";
                document.getElementById("launchStatus").textContent = "Shuttle not ready for launch";
                document.getElementById("launchStatus").style.color = "red";
                shuttleReady = false;
            }

            if (cargoLevelStatus(cargoLevel) === "Cargo level too high for launch") {
                document.getElementById("cargoStatus").textcontent = "Cargo mass too high for journey";
                document.getElementById("launchStatus").textContent = "Shuttle not ready for launch";
                document.getElementById("launchStatus").style.color = "red";
                shuttleReady = false;
            }
            
            if (shuttleReady === true) {
                document.getElementById("launchStatus").textContent = "Shuttle is ready for launch";
                document.getElementById("launchStatus").style.color = "green";
            }

           // event.preventDefault();
            
            // } (fuelStatus >= 10000){
        //     list.style.visibility === "visible";
        //     document.getElementById("launchStatus") ===
        //     `${'The shuttle is ready for launch'}`;
        //     document.getElementById("launchStatusCheck").style.color = "green";
        // } else if (cargoStatus < 10000) {
        //     list.style.visibility === "visible";
        //     document.getElementById("launchStatus") ===
        //     `${'The shuttle is ready for launch'}`;
        //     document.getElementById("launchStatusCheck").style.color = "green";
        // } else {
        //     list.style.visibility === "hidden";
        //     console.log("Launch is good to go.")
        //     document.getElementById("launchStatus") ===
        //     `${'Launch is good to go.'}`;
        // }
        //     validateInput(testInput);
        
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
