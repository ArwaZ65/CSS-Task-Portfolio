function mode() {
    let icon = document.getElementById('dark-mode-icon');   
    document.body.classList.toggle('dark-mode');    
    //If the dark-mode class is present, toggle() will remove it.
// If the dark-mode class is absent, toggle() will add it.
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}
