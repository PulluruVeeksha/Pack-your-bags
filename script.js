// All cities and places used in search + section 2 & 3
const allCityPlaces = {
  // Section 1 Cities
  hyderabad: ["Charminar", "Golconda Fort", "Ramoji Film City", "Hussain Sagar Lake"],
  jaipur: ["Hawa Mahal", "Amber Fort", "City Palace", "Jal Mahal"],
  shimla: ["Mall Road", "Jakhoo Temple", "Kufri", "Christ Church"],
  mysore: ["Mysore Palace", "Brindavan Gardens", "Chamundi Hill", "St. Philomena’s Church"],
  paris: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral", "Seine River Cruise"],
  rome: ["Colosseum", "Trevi Fountain", "Vatican Museums", "Pantheon"],
  bali: ["Uluwatu Temple", "Tegallalang Rice Terraces", "Seminyak Beach", "Sacred Monkey Forest"],
  newyork: ["Statue of Liberty", "Central Park", "Empire State Building", "Times Square"],

  // 🟢 Section 2 - Popular Indian Regions
  gokarna: ["Om Beach", "Mahabaleshwar Temple", "Paradise Beach", "Half Moon Beach"],
  udaipur: ["City Palace", "Lake Pichola", "Fateh Sagar Lake", "Jag Mandir"],
  kerala: ["Munnar Hills", "Alleppey Backwaters", "Kochi Fort", "Wayanad Caves"],
  goa: ["Baga Beach", "Dudhsagar Falls", "Fort Aguada", "Chapora Fort"],

  // 🌍 Section 3 - International Cities
  japan: ["Mount Fuji", "Kyoto Temples", "Tokyo Disneyland", "Osaka Castle"],
  singapore: ["Gardens by the Bay", "Sentosa Island", "Marina Bay Sands", "Chinatown"],
  uae: ["Burj Khalifa", "Desert Safari", "Dubai Marina", "Ferrari World"],
  thailand: ["Phuket Beaches", "Floating Markets", "Grand Palace", "Wat Pho"]
};

// 🔍 Section 1 - Search bar function
function handleSearch() {
  const input = document.getElementById("searchInput").value.trim().toLowerCase();
  const container = document.getElementById("searchResults");

  if (allCityPlaces[input]) {
    const places = allCityPlaces[input];
    container.innerHTML = `
      <h3>Explore in ${capitalize(input)}</h3>
      <ul>
        ${places.map(place => `<li>${place}</li>`).join("")}
      </ul>
    `;
  } else {
    container.innerHTML = `<p>No results found for "<strong>${input}</strong>".</p>`;
  }

  // Auto-clear results after 8 seconds
  setTimeout(() => {
    container.innerHTML = "";
  }, 8000);
}

// 📍 Section 2 - Indian City Places
function showPlacesIndia(city) {
  const container = document.getElementById("indiaPlacesContainer");
  const places = allCityPlaces[city];
  if (!places) return;

  container.innerHTML = `
    <h3>Places to visit in ${capitalize(city)}</h3>
    <ul>${places.map(place => `<li>${place}</li>`).join("")}</ul>
  `;
}

// 🌏 Section 3 - International City Places
function showPlaces(city) {
  const container = document.getElementById("placesList");
  const places = allCityPlaces[city];
  if (!places) return;

  container.innerHTML = `
    <h3>Explore in ${capitalize(city)}</h3>
    <ul>${places.map(place => `<li>${place}</li>`).join("")}</ul>
  `;
}

// 🧠 Utility function to capitalize first letter
function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// 🌍 Section 1 Navigation Info Box (with fade-in effect)
function showInfo(type, element) {
  const infoContent = {
    regions: `
      <h3>Popular Regions in India</h3>
      <p>From the serene beaches of Gokarna to the heritage city of Udaipur, explore regions that offer a diverse blend of culture, cuisine, and calm.</p>
    `,
    destinations: `
      <h3>Top Destinations</h3>
      <p>Visit world-famous destinations like Paris, Bali, and New York — each offering unique experiences and beauty.</p>
    `,
    landmarks: `
      <h3>Iconic Landmarks</h3>
      <p>Explore architectural marvels like the Eiffel Tower, Hawa Mahal, Colosseum, and more from history and culture.</p>
    `,
    explore: `
      <h3>Explore More</h3>
      <p>Dive deeper into food trails, adventure sports, cultural walks, and hidden gems — curated for the curious traveler.</p>
    `
  };

  const infoBox = document.getElementById("infoBox");

  const rect = element.getBoundingClientRect();
  const navOffsetTop = rect.bottom + window.scrollY + 8;

  // Default position
  let navOffsetLeft = rect.left + window.scrollX;

  // 👉 Shift "explore" box to the left
  if (type === "explore") {
    navOffsetLeft -= 140; // shift left to keep it on screen
  }

  infoBox.innerHTML = infoContent[type] || '';
  infoBox.style.top = `${navOffsetTop}px`;
  infoBox.style.left = `${navOffsetLeft}px`;
  infoBox.style.display = 'block';
  infoBox.style.opacity = 1;
}
