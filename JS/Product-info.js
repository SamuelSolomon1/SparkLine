// Get the search input element
const searchInput = document.getElementById('search-input');

// Function to filter product cards based on the search input
function filterProductCards() {
  const searchTerm = searchInput.value.toLowerCase();
  const productCards = document.querySelectorAll('.card');

  productCards.forEach((card) => {
    const cardTitle = card.querySelector('.card-title').textContent.toLowerCase();
    if (cardTitle.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
// Listen for input events in the search input
searchInput.addEventListener('input', filterProductCards);

 // JavaScript to handle thumbnail image clicks
 function changeImage(imageSrc) {
  document.getElementById('main-image').src = imageSrc;
}