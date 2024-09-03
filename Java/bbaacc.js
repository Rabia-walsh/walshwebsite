function showContent(section, element) {
    // Hide all content sections
    var sections = document.querySelectorAll('.content-section');
    sections.forEach(function(sec) {
        sec.classList.remove('active');
    });
    
    // Show the selected content section
    document.getElementById(section).classList.add('active');
    
    // Remove the active class from all options
    var options = document.querySelectorAll('.option');
    options.forEach(function(opt) {
        opt.classList.remove('active');
    });

    // Add the active class to the clicked option
    element.classList.add('active');
}
