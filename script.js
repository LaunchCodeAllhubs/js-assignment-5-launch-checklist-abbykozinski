// Write your JavaScript code here!

window.addEventListener("load", ()=> {
    const form = document.querySelector("form");
    let list = window.document.getElementById('faultyItems');
    list.styles.visibility = 'inherit'

    form.addEventListener("submit", (event)=>{
        event.preventDefault();
        //List DOM
        let pilot = form.querySelector("input[name=pilotName]").value;
        let copilot = form.querySelector("input[name=copilotName]").value;
        let fuelLevel = form.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = form.querySelector("input[name=cargoMass]").value;
        

        //use formsubmission to validate and update list
        formSubmission(document,list,pilot,copilot,fuelLevel,cargoLevel);
    })

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planet = pickPlanet(listedPlanets);
       let name = planet.name;
       let diameter = planet.diameter;
       let star = planet.star;
       let distance = planet.distance;
       let imageUrl = planet.image;
       let moons = planet.moons;
       addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
    })
   
});