const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.table(data.prophets); // teste no console
        displayProphets(data.prophets);
    } catch (error) {
        console.error('Error loading the prophets:', error);
    }
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Criar o card principal
        let card = document.createElement('section');

        // Criar o nome completo
        let fullName = document.createElement('h2');
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // Container para informações de nascimento
        let infoContainer = document.createElement('div');
        infoContainer.classList.add('card-info');

        let birthdate = document.createElement('p');
        birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;

        let birthplace = document.createElement('p');
        birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;

        infoContainer.appendChild(birthdate);
        infoContainer.appendChild(birthplace);

        // Criar a imagem
        let portrait = document.createElement('img');
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Montar o card
        card.appendChild(fullName);
        card.appendChild(infoContainer);
        card.appendChild(portrait);

        // Adicionar o card à div #cards
        cards.appendChild(card);
    });
};

// Chamar a função principal
getProphetData();
