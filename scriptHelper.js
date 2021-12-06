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

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
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
    launchStatus = "" ;
   
    
    if (validateInput(pilot) === "Empty" || 
        validateInput(copilot) === "Empty" || 
        validateInput(fuelLevel) === "Empty" || 
        validateInput(cargoMass) === "Empty")
    {
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        list.style.visibility = "visible";
        document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";
        alert("All fields are required");
        return false;
        

    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number"){
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        list.style.visibility = "visible";
        document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";
        alert("Invalid Entry");
        return false;
        

        

    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        list.style.visibility = "visible";
        document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";
        alert("Invalid Entry");
        return false;
        
       


    } else {
        list.style.visibility = "hidden";
        document.getElementById("pilotStatus").textContent= `Pilot ${pilot} Ready`;
        document.getElementById("copilotStatus").textContent = `Co-pilot ${copilot} Ready`;
        document.getElementById("cargoStatus").textContent = "Cargo mass low enough for launch";
        document.getElementById("fuelStatus").textContent = "Fuel level high enough for launch";
        

        if (fuelLevel < 10000) {
            list.style.visibility = "visible";
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
            document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";
            document.getElementById("fuelStatus").textContent = "Fuel level too low for launch";
            document.getElementById("cargoStatus").textContent = "Cargo mass low enough for launch";
            document.getElementById("pilotStatus").textContent= `Pilot ${pilot} not ready for launch`;
            document.getElementById("copilotStatus").textContent = `Co-pilot ${copilot} not ready for launch`;
            alert("Fuel level too low for launch");
            return false;

        } else if (cargoMass > 10000) {
            list.style.visibility = "visible";
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
            document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";
            document.getElementById("cargoStatus").textContent = "Cargo mass too heavy for launch";
            document.getElementById("fuelStatus").textContent = "Fuel level high enough for launch";
            document.getElementById("pilotStatus").textContent = `Pilot ${pilot} not ready for launch`;
            document.getElementById("copilotStatus").textContent = `Co-pilot ${copilot} not ready for launch`;
            alert("Cargo mass too high for launch");
            return false;
                
        } else if (cargoMass > 10000 && fuelLevel < 10000){
            list.style.visibility = "visible";
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
            document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";
            document.getElementById("pilotStatus").textContent = `Pilot ${pilot} not ready for launch`;
            document.getElementById("copilotStatus").textContent = `Co-pilot ${copilot} not ready for launch`;
            document.getElementById("cargoStatus").textContent = "Cargo mass too heavy for launch";
            document.getElementById("fuelStatus").textContent = "Fuel level too low for launch";
            alert("Fuel level too low for launch" + "Cargo mass too high for launch");
            return false;
        
        } 
    
    } 
        if ((fuelStatus === "Fuel level too low for launch") && (cargoStatus === "Cargo mass too heavy for launch")) {
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
            list.style.visibility = "visible";
            document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";
            document.getElementById("pilotStatus").textContent = `Pilot ${pilot} not ready for launch`;
            document.getElementById("copilotStatus").textContent = `Co-pilot ${copilot} not ready for launch`;
            document.getElementById("cargoStatus").textContent = "Cargo mass too heavy for launch";
            document.getElementById("fuelStatus").textContent = "Fuel Level too low for launch";
            return true;
           
        } else {
            list.style.visibility = "visible";
            document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
            document.getElementById("pilotStatus").textContent = `Pilot ${pilot} is ready for launch`;
            document.getElementById("copilotStatus").textContent = `Co-pilot ${copilot} is ready for launch`;
            document.getElementById("launchStatus").style.color ="rgb(65, 159, 106)";
            document.getElementById("cargoStatus").textContent = "Cargo mass low enough for launch";
            document.getElementById("fuelStatus").textContent= "Fuel level high enough for launch";
            return true;
        
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
