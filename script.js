let places = [];

// Load JSON data
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        places = data;
    });

function searchPlaces() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let resultsDiv = document.getElementById("results");

    resultsDiv.innerHTML = "";

    let filtered = places.filter(place => place.type.includes(input));

    if (filtered.length === 0) {
        resultsDiv.innerHTML = "<p>No places found</p>";
        return;
    }

    filtered.forEach(place => {
        let card = `
            <div class="card">
                <img src="images/${place.image}">
                <h3>${place.name}</h3>
                <p>${place.description}</p>
                <p><b>Best Time:</b> ${place.best_time}</p>
                <p><b>Budget:</b> ${place.budget}</p>
            </div>
        `;
        resultsDiv.innerHTML += card;
    });
}