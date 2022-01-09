function changeImg() {
    var image = document.getElementById('myImg');
    if (image.src.match("images/home.svg")) {
        image.src = "images/home_active.svg";
    }
    else {
        image.src = "images/home_active.svg";
    }
}