document.querySelector('.more').addEventListener('click', function() {
    // Select all blog-content elements that also have the 'hide' class
    const hiddenDivs = document.querySelectorAll('.hide');
    
    hiddenDivs.forEach(div => {
    div.classList.remove('hide');
    });
    
});