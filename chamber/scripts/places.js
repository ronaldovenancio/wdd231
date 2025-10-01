import { places } from "../data/places.mjs"

// Pega a div onde os cards serão exibidos
const showHere = document.querySelector("#showHere");

// Função que cria os cards dinamicamente
function displayItems(places) {
    console.log(places)
    places.forEach(x => {
        //build the card element
        const thecard = document.createElement('div')
        thecard.classList.add("place-card") // classe p/ estilizar no CSS

        //build the photo element
        const thephoto = document.createElement('img')
        thephoto.src = `images/${x.photo_link}`
        thephoto.alt = x.name
        thephoto.setAttribute('loading', 'lazy')
        thecard.appendChild(thephoto)

        //build the title element
        const thetitle = document.createElement('h2')
        thetitle.innerText = x.name
        thecard.appendChild(thetitle)

        //build the address element
        const theaddress = document.createElement('address')
        theaddress.innerText = x.address
        thecard.appendChild(theaddress)

        //build the description element
        const thedesc = document.createElement('p')
        thedesc.innerText = x.description
        thecard.appendChild(thedesc)

        //build the button element
        //build the button element as a link
        const thebutton = document.createElement('a');
        thebutton.innerText = "Learn More";
        thebutton.classList.add("learn-btn");
        thebutton.href = x.url;       // pega a URL diretamente do places.mjs
        thebutton.target = "_blank";  // abre em nova aba
        thecard.appendChild(thebutton);

        showHere.appendChild(thecard)
    }) //end loop//
} //end function

// Exibe os lugares
displayItems(places);


// Add the dialog in the home
// pega o dialog
const placesDetails = document.getElementById("course-details");

function displayCourseDetails(places) {
    // limpa o conteúdo anterior
    placesDetails.innerHTML = "";

    // adiciona novo conteúdo
    placesDetails.innerHTML = `
    <button id="closeModal" class="close">❌</button>
    <h2>${places.subject} ${places.cost}</h2>
    <h3>${places.adress}</h3>
    <p><strong>Credits</strong>: ${places.credits}</p>
    <p><strong>Certificate</strong>: ${places.description}</p>
    <p>${places.description}</p>
    <p><strong>Technologies</strong>: ${places.name.join(", ")}</p>
  `;

    // abre o modal
    placesDetails.showModal();

    // botão de fechar
    document.getElementById("closeModal").addEventListener("click", () => {
        placesDetails.close();
    });

    // fechar clicando fora do modal (no backdrop)
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

