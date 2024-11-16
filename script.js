// 1. Select elements
const itemsContainer = document.getElementById("items");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const currentPageText = document.getElementById("current-page");

// 2. Data & Pagination state
const data = [
  { title: "Product 1", description: "This is a great product.", price: "$29.99", image: "./download.jpg" },
  { title: "Product 2", description: "This is another product.", price: "$59.99", image: "./download.jpg" },
  { title: "Product 3", description: "Amazing item for you.", price: "$89.99", image: "./download.jpg" },
  { title: "Product 4", description: "Excellent quality product.", price: "$39.99", image: "./download.jpg" },
  { title: "Product 5", description: "Top-rated product in the market.", price: "$49.99", image: "./download.jpg" },
  { title: "Product 6", description: "Best choice for your needs.", price: "$79.99", image: "./download.jpg" },
  { title: "Product 7", description: "Exclusive limited edition.", price: "$99.99", image: "./download.jpg" },
  { title: "Product 8", description: "Great for gifting.", price: "$19.99", image: "./download.jpg" },
  { title: "Product 9", description: "Premium quality product.", price: "$109.99", image: "./download.jpg" },
  { title: "Product 10", description: "Highly rated by users.", price: "$79.99", image: "./download.jpg" },
];

let currentPage = 1;
const itemsPerPage = 4;

// 3. Render function
function render() {
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const itemsToDisplay = data.slice(start, end);

  // Clear existing items
  itemsContainer.innerHTML = "";

  // Create new items
  itemsToDisplay.forEach(item => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("item");

    itemElement.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <div class="price">${item.price}</div>
    `;
    
    itemsContainer.appendChild(itemElement);
  });

  // Update current page
  currentPageText.textContent = currentPage;

  // Disable/Enable buttons
  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage * itemsPerPage >= data.length;
}

// 4. Event Listeners for buttons
prevButton.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    render();
  }
});

nextButton.addEventListener("click", () => {
  if (currentPage * itemsPerPage < data.length) {
    currentPage++;
    render();
  }
});

// 5. Initial render
render();
