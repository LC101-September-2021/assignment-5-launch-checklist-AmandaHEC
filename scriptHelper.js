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
    //let numberInput = Number(testInput);
        if (testInput === "") {
            //console.log("All fields are required.");
            return "Empty";
        } else if (isNaN(testInput)) {
            //console.log(testInput + " is not a number.")
            return "Not a Number";
        } else {
            //console.log(testInput + " is a number.")
            return "Is a Number";
        }
        
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    list = document.querySelector("#faultyItems");
    pilot = document.querySelector("input[name=pilotName]").value;
    copilot = document.querySelector("input[name=copilotName]").value;
    fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    cargoMass = document.querySelector("input[name=cargoMass]").value;
    faultyItems = "";
    pilotStatus = "";
    copilotStatus = "";
    fuelStatus = "";
    cargoStatus = "";
    invalidEntry = "";
    allFieldsRequired = "";
    launchStatus = "" ;
    
    if (validateInput(pilot) === "Empty" || 
        validateInput(copilot) === "Empty" || 
        validateInput(fuelLevel) === "Empty" || 
        validateInput(cargoMass) === "Empty")
    {
        
        allFieldsRequired = "All fields are required";
        alert(allFieldsRequired);
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";
        list.style.visibility = "visible";
        
        

    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number"){
        invalidEntry = "Invalid Entry";
        alert(invalidEntry);
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";
        list.style.visibility = "visible";
        

        

    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        invalidEntry = "Invalid Entry";
        alert(invalidEntry);
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";
        list.style.visibility = "visible";
       


    } else {
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;

        if (fuelLevel < 10000) {
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
            document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";
            document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
            list.style.visibility = "visible";
            fuelStatus = "Fuel level too low for launch";
            alert(fuelStatus);
            

        } else if (cargoMass > 10000) {
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
            document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too high for launch";
            list.style.visibility = "visible";
            cargoStatus = "Cargo mass too high for launch";
            alert(cargoStatus);
            
                
        } else if (cargoMass > 10000 && fuelLevel < 10000){
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
            document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too high for launch";
            document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
            list.style.visibility = "visible";
            fuelStatus = "Fuel level too low for launch";
            alert(fuelStatus);
            cargoStatus = "Cargo mass too high for launch";
            list.style.visibility = "visible";
            alert(cargoStatus);
        
        } 
    
    } 
        if ((fuelStatus === "Fuel level too low for launch") && (cargoStatus === "Cargo mass too high for launch")) {
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
            document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too high for launch";
            document.getElementById("fuelStatus").innerHTML = "Fuel Level too low for launch";
            list.style.visibility = "visible";
           
        } else {
            document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
            list.style.visibility = "visible";
            document.getElementById("launchStatus").style.color ="rgb(65, 159, 106)";
            
            
        
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
