document.querySelector('.more').addEventListener('click', function() {
    // Select all blog-content elements that also have the 'hide' class
    const hiddenDivs = document.querySelectorAll('.hide');
    
    // Remove the 'hide' class from each element to display them
    hiddenDivs.forEach(div => {
      div.classList.remove('hide');
    });
    
    // Optionally, you can hide the button after displaying the contents
    // this.style.display = 'none';
  });