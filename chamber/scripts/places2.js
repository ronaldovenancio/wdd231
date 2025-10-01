import { places } from "../data/places.mjs"
//console.log(temples);

//import {url} from "../data/places.js"
//console.log(url);

// ------- GRAB A REFERENCE TO THE DIVISION WHERE WE DISPLAY THE ITENS
const showHere = document.querySelector("#showHere");

// ------- LOOP THROUGH THE ARRAY OF JSON ITEMS
function displayItems(places) {
    console.log(places)
    places.forEach(x => {
        console.log(x)
        //build the card element
        const thecard = document.createElement('div')
        //build the photo element
        const thephoto = document.createElement('img')
        thephoto.src = `images/${x.photo_link}`
        thephoto.alt = x.name
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

        // Build the image attributes by using the setAttribute method for the loading attribute values. (Fill in the blank with the appropriate variable).
      //  thephoto.setAttribute('src', places.photo_link);
        thephoto.setAttribute('loading', 'lazy');
     //   thephoto.setAttribute('alt', 'Logo of ' + x.name);
        
        showHere.appendChild(thecard)
    }) //end loop//
} //end function


// START DISPLAYING ALL ITEMS IN THE JSON FILE
displayItems(places)
