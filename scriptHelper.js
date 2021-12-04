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
            console.log(testInput + "is not a number.")
            return "Not a Number";
        } else {
            console.log(testInput + "is a number.")
            return "Is a Number";
        }
        
}
// function alert(alertMessage){
//     //console.log(alertMessage);
//     window.alert(alertMessage);
//     event.preventDefault();

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    list = document.querySelector("#faultyItems");
    pilot = document.querySelector("input[name=pilotName]");
    copilot = document.querySelector("input[name=copilotName]");
    fuelLevel = document.querySelector("input[name=fuelLevel]");
    cargoLevel = document.querySelector("input[name=cargoMass]");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus") ;
    let cargoStatus = document.getElementById("cargoStatus");
    console.log("Form Submission");

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
        alert("All fields are required");
        event.preventDefault();

    } else if (validateInput(fuelLevel) === "Not a number" || validateInput(cargoLevel) === "Not a number"){
        alert("Invalid entry")
        event.preventDefault();

    } else if (validateInput(pilot) === "Is a number" || validateInput(copilot) === "Is a number") {
        alert("Invalid entry");

    } else if (fuelLevel < 10000) {
            list.style.visibility === "visible";
            let fuelStatus = "There is not enough fuel for the journey.";
            
            alert(fuelStatus);
            return fuelStatus;
    } else if (cargoLevel > 1000) {
            let cargoStatus = "There is too much mass for the shuttle to take off.";
            list.style.visibility === "visible";
            alert(cargoStatus);
            return cargoStatus;
            
    } else {
            document.getElementById("pilotStatus") = `Pilot ${pilot} is ready for launch`;
            document.getElementById("copilotStatus") = `Co-pilot ${copilot} is ready for launch`;
            list.style.visibility = "visible";
            let shuttleReady = true;

    } 
    
    if (fuelLevelStatus(fuelLevel) ===  "Fuel level too low for launch.") {
            document.getElementById("fuelStatus") = "Fuel level too low for launch";
            document.getElementById("launchStatus") = "Shuttle not ready for launch";
            document.getElementById("launchStatus").style.color = "red";
            shuttleReady = false;

    } else if (cargoLevelStatus(cargoLevel) === "Cargo level too high for launch") {
            document.getElementById("cargoStatus") = "Cargo mass too high for launch";
            document.getElementById("launchStatus") = "Shuttle not ready for launch";
            document.getElementById("launchStatus").style.color = "red";
            shuttleReady = false;

    } else { (shuttleReady === true) 
            document.getElementById("launchStatus") = "Shuttle is ready for launch";
            list.style.visibility = "visible";
            document.getElementById("launchStatus").style.color = "green";
            }
    // } expect(list.style.visibility).toEqual("visible");
    // expect(h2.style.color).toEqual("rgb(65, 159, 106)");
    // expect(h2.textContent).toEqual("Shuttle is Ready for Launch");
     expect(pilotStatus.textContent).toEqual("Pilot Chris is ready for launch");
      expect(copilotStatus.textContent).toEqual("Co-pilot Bob is ready for launch");
     expect(fuelStatus.textContent).toEqual("Fuel level high enough for launch");
     expect(cargoStatus.textContent).toEqual("Cargo mass low enough for launch");
    // expect(list.style.visibility).toEqual("visible");
    // expect(h2.style.color).toEqual("rgb(199, 37, 78)");
    // expect(h2.textContent).toEqual("Shuttle Not Ready for Launch");
    // expect(pilotStatus.textContent).toEqual("Pilot Chris is ready for launch");
    //  expect(copilotStatus.textContent).toEqual("Co-pilot Bob is ready for launch");
    // expect(fuelStatus.textContent).toEqual("Fuel level too low for launch");
    // expect(cargoStatus.textContent).toEqual("Cargo mass low enough for launch");
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
