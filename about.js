// Get all menu items
var menuItems = document.querySelectorAll('.menuItem');

// Add click event listener to each menu item
menuItems.forEach(function(item) {
  item.addEventListener('click', function() {
    // Remove 'active' class from all menu items
    menuItems.forEach(function(item) {
      item.classList.remove('active');
    });
    // Add 'active' class to the clicked menu item
    this.classList.add('active');

    // Log the clicked menu item's text to the console
    console.log("Clicked:", this.textContent);
  });
});
