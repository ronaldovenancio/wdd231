import { places } from "../data/places.mjs";

const showHere = document.querySelector("#showHere");
//const placesDetails = document.querySelector("#course-details");
const placesDetails = document.getElementById("course-details");

function displayItems(places) {
    places.forEach(x => {
        const thecard = document.createElement("div");
        thecard.classList.add("place-card");

        const thephoto = document.createElement("img");
        thephoto.classList.add("img");
        thephoto.src = `images/${x.photo_link}`;
        thephoto.alt = x.name;
        thephoto.setAttribute("loading", "lazy");
        thecard.appendChild(thephoto);

        const thetitle = document.createElement("h2");
        thetitle.innerText = x.name;
        thecard.appendChild(thetitle);

        const theaddress = document.createElement("address");
        theaddress.innerText = x.address;
        thecard.appendChild(theaddress);

        const thedesc = document.createElement("p");
        thedesc.innerText = x.description;
        thecard.appendChild(thedesc);

        const thebutton = document.createElement("a");
        thebutton.innerText = "Learn More";
        thebutton.classList.add("learn-btn");
        thebutton.href = x.url;
        thebutton.target = "_blank";
        thecard.appendChild(thebutton);

        // 🧩 Abre modal com detalhes ao clicar no card
        thecard.addEventListener("click", () => {
            displayPlacesDetails(x);
        });

        showHere.appendChild(thecard);
    });
}

function displayPlacesDetails(place) {
    placesDetails.innerHTML = `
    <button id="closeModal" class="close">❌</button>
    <h2>${place.name}</h2>
    <img src="images/${place.photo_link}" alt="${place.name}" class="modal-img">
    <h4><strong>Address: </strong>${place.address}</h4>
    <h4><strong>Cost: </strong>${place.cost || "Free"}</h4>
    <p><strong>Description:</strong> ${place.description}</p>
    <p><a href="${place.url}" target="_blank" class="learn-btn">Visit Site</a></p>
  `;

    placesDetails.showModal();

    document.getElementById("closeModal").addEventListener("click", () => {
        placesDetails.close();
    });

    placesDetails.addEventListener("click", (event) => {
        const rect = placesDetails.getBoundingClientRect();
        const inDialog =
            rect.top <= event.clientY &&
            event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX &&
            event.clientX <= rect.left + rect.width;

        if (!inDialog) {
            placesDetails.close();
        }
    });
}

displayItems(places);
