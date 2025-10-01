/* Visit Tracking */

// DOM references
const visitCount = document.querySelector('#visit-count');
const visitSince = document.querySelector('#visit-since');

// Get current time
const currentTime = Date.now();

// --- Total Visits ---
let totalVisits = Number(localStorage.getItem('visits-total')) || 0;
totalVisits++;
localStorage.setItem('visits-total', totalVisits);

// --- First Visit ---
let firstVisit = Number(localStorage.getItem('visit-since')) || 0;

// Caso primeira visita
if (!firstVisit) {
    localStorage.setItem('visit-since', currentTime);
    visitSince.textContent = "Welcome! This is your first visit 🎉";
} else {
    // Calcula diferença em dias
    const msToDays = 86400000;
    let dayDifference = Math.floor((currentTime - firstVisit) / msToDays);

    if (dayDifference === 0) {
        // Mesma data
        visitSince.textContent = "Back so soon! Awesome!";
    } else if (dayDifference === 1) {
        visitSince.textContent = "You last visited 1 day ago.";
    } else {
        visitSince.textContent = `You last visited ${dayDifference} days ago.`;
    }
}

// --- Last Visit ---
let lastVisit = Number(localStorage.getItem('last-visit')) || currentTime;
let diffMinutes = Math.round((currentTime - lastVisit) / 60000);

if (totalVisits > 1) {
    console.log(`Minutes since last visit: ${diffMinutes}`);
}

localStorage.setItem('last-visit', currentTime);

// --- Display Total Visits ---
visitCount.textContent = totalVisits;
