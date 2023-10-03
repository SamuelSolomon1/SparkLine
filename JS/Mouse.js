//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



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

