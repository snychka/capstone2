
let list = document.getElementById('list');
let parks = document.getElementById('parks');


// displays the parks in parks.
function displayParks() {
    clearList(parks);
    let state = statesList.value;
    let stateResults = [];
    if (state.length > 0) {
        stateResults = nationalParksArray.filter(park => park.State === state);
    }

    let parkType = parkTypesList.value;
    let typeResults = [];
    if (parkType.length > 0) {
        typeResults = nationalParksArray.filter(park => park.LocationName.includes(parkType));
    }

    let results = [];
    if (stateResults.length > 0 && typeResults.length > 0) {
        results = Array.from(new Set(stateResults.filter(item => typeResults.includes(item))));
    } else {
        results = stateResults.length > 0 ? stateResults : typeResults;
    }

    results.forEach(park => {
        const li = document.createElement("li");
        const text = document.createTextNode(`${park.LocationName}`);
        li.appendChild(text);
        parks.appendChild(li);
    });

}

function displayAll() {
    //tbd!
}


function populateWithStates() { populateDropdown(list, locationsArray); }
function populateWithTypes() { populateDropdown(list, parkTypesArray); }


window.onload = function () {
    // list.onchange = 
    states.onclick = populateWithStates;
    types.onclick = populateWithTypes;
    all.onclick = displayAll;

}
