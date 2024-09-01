// Select elements
const sliders = document.querySelectorAll('.slider');

sliders.forEach((slider) => {
  const slidesContainer = slider.querySelector('.slides');
  const slides = slider.querySelectorAll('.slide');
  const dots = slider.querySelectorAll('.dot');

  // Initialize index
  let currentIndex = 0;

  // Function to update slide position
  function updateSlides() {
    slidesContainer.style.transform = `translateX(${(-currentIndex * 100)}%)`;
  }

  // Function to update dot active state
  function updateDots() {
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }

  // Function to go to a specific slide
  function goToSlide(slideIndex) {
    currentIndex = slideIndex;
    updateSlides();
    updateDots();
  }

  // Add event listeners to dots
  dots.forEach((dot, dotIndex) => {
    dot.addEventListener('click', () => {
      goToSlide(dotIndex);
    });
  });

  // Function to go to the next slide
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides();
    updateDots();
  }

  // Set interval to change slide every 2 seconds
  setInterval(nextSlide, 2000);
});

// JavaScript for product pages
document.addEventListener('DOMContentLoaded', () => {
  const addToCartButton = document.querySelector('.btn1');

  addToCartButton.addEventListener('click', () => {
      const productElement = document.getElementById('product-description');
      const productId = productElement.dataset.id;
      const productName = document.querySelector('h1').textContent;
      const productPrice = parseFloat(document.querySelector('span').textContent);
      const productImage = document.getElementById('main-preview').src;

      const product = {
          id: productId,
          name: productName,
          price: productPrice,
          image: productImage
      };

      // Get cart from localStorage or initialize it
      const cart = JSON.parse(localStorage.getItem('cart')) || [];

      // Add the new product to the cart
      cart.push(product);

      // Save the updated cart back to localStorage
      localStorage.setItem('cart', JSON.stringify(cart));

      alert('Product added to cart!');
  });
});
