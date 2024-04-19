// Get all portfolio items
var portfolioItems = document.querySelectorAll('.portfolio-item');

// Add click event listener to each portfolio item
portfolioItems.forEach(function(item) {
  item.addEventListener('click', function() {
    // Toggle the visibility of the text
    var text = this.querySelector('.portfolio-text');
    text.classList.toggle('show');
  });
});
