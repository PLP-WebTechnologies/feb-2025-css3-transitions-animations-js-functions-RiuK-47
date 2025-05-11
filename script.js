// script.js
// Store user preferences
function savePreferences() {
    const theme = document.getElementById('theme').value;
    const fontSize = document.getElementById('font-size').value;
    
    localStorage.setItem('userTheme', theme);
    localStorage.setItem('userFontSize', fontSize);
    
    applyPreferences();
    triggerConfirmationAnimation();
  }
  
  // Retrieve and apply preferences
  function applyPreferences() {
    const savedTheme = localStorage.getItem('userTheme');
    const savedFontSize = localStorage.getItem('userFontSize');
    
    if (savedTheme) {
      document.body.className = savedTheme;
      document.getElementById('theme').value = savedTheme;
    }
    
    if (savedFontSize) {
      document.body.style.fontSize = savedFontSize + 'px';
      document.getElementById('font-size').value = savedFontSize;
    }
  }
  
  // Animation trigger
  function triggerConfirmationAnimation() {
    const confirmation = document.getElementById('confirmation');
    confirmation.classList.add('show');
    
    setTimeout(() => {
      confirmation.classList.remove('show');
    }, 3000);
  }
  
  // Toggle image animation
  function toggleAnimation() {
    const img = document.getElementById('animated-image');
    img.classList.toggle('animated-img');
  }
  
  // Initialize on page load
  window.addEventListener('DOMContentLoaded', () => {
    applyPreferences();
    
    // Set up event listeners
    document.getElementById('save-btn').addEventListener('click', savePreferences);
    document.getElementById('animate-btn').addEventListener('click', toggleAnimation);
  });