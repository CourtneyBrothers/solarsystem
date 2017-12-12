

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
function planetListMaker(){
    var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

    var el = document.getElementById("planets");
    planets.forEach (function(planet){
        el.innerHTML += `<div>${planet}</div>`;
    });
    let uppercasePlanets = planets.map(function(x){return x.charAt(0).toUpperCase()+x.slice(1)});
    let planetUpperCase = document.createTextNode(uppercasePlanets);
    el.appendChild(planetUpperCase);
    let filteredPlanets = planets.filter(function(x){return x.includes("e")});
    let plantsDiv = document.createElement("div");
    el.appendChild(plantsDiv);
    let plantsNode = document.createTextNode(filteredPlanets);
    plantsDiv.appendChild(plantsNode);
    

};


planetListMaker();

// Use the map method to create a new array where the first letter of each planet is capitalized

// Use the filter method to create a new array that contains planets with the letter 'e'

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
reduced = words.reduce((prev, curr) => prev +" "+ curr);

let cheeseSentence = document.getElementById("cheeseSentence");
cheeseSentence.innerHTML = reduced;