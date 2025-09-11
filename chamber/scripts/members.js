const container = document.getElementById("membersContainer");
 const gridBtn = document.getElementById("gridBtn");
 const listBtn = document.getElementById("listBtn");

// Fetch members.json
async function loadMembers() {
    try {
        const response = await fetch("data/members.json");
        if (!response.ok) throw new Error("Failed to fetch members");
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        container.innerHTML = `<p>Error loading members: ${error.message}</p>`;
    }
}

// Display members
function displayMembers(members) {
    container.innerHTML = ""; // clear
    members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("member-card");
        card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo">
      <h3>${member.name}</h3>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><a href="${member.website}" target="_blank">Visit Website</a></p>
      <p><strong>Membership:</strong> ${getMembershipLevel(member.membership_level)}</p>
      <p>${member.description}</p>
    `;
        container.appendChild(card);
    });
}

// Convert membership level to text
function getMembershipLevel(level) {
    switch (level) {
        case 1: return "Member";
        case 2: return "Silver";
        case 3: return "Gold";
        default: return "Unknown";
    }
}


// Toggle views
gridBtn.addEventListener("click", () => {
    container.classList.add("grid-view");
    container.classList.remove("list-view");
});


listBtn.addEventListener("click", () => {
    container.classList.add("list-view");
    container.classList.remove("grid-view");
});

// Load members when page loads
loadMembers();
