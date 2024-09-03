function toggleContent(tabName) {
    var content = document.getElementById(tabName);
    var buttons = document.getElementsByClassName("tab-button");
    var contents = document.getElementsByClassName("content");
    
    // Close all other tabs
    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove("active");
    }
    
    // Remove active class from all buttons
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }
    
    // Toggle current tab
    content.classList.toggle("active");
    
    // Toggle arrow and active class
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].onclick.toString().includes(tabName)) {
            buttons[i].classList.toggle("active");
        }
    }
}
