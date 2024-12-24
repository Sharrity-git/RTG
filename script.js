// Your SheetDB API URL
const sheetdbUrl = 'https://sheetdb.io/api/v1/1f9euyp8jy7nk';

// Fetch data from SheetDB
fetch(sheetdbUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data);  // This will log the array of objects from your sheet
    displayCards(data); // Function to display your cards with data
  })
  .catch(error => {
    console.error('Error fetching data from SheetDB:', error);
  });

// Function to display your data as cards
function displayCards(data) {
  const container = document.getElementById('cards-container'); // Your container element
  container.innerHTML = ''; // Clear the container before adding new cards

  data.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <p class="venue">${item['Venue']}</p>
      <p class="city">${item['City']}</p>
      <p class="time">${item['Time']}</p>
      <p class="date">${item['Date']}</p>
    `;
    container.appendChild(card);
  });
}

fetch('https://sheetdb.io/api/v1/1f9euyp8jy7nk')
  .then(response => response.json())
  .then(data => {
    console.log(data); // This should log the data from your Google Sheet
    // You can now work with the data and add it to your page
  })
  .catch(error => console.error('Error fetching data:', error));