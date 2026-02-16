function toggleText(idName) {
    var text = document.getElementById(idName);
    
    if (text) {
        text.classList.toggle("show");
    }
}