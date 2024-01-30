function menu_on_main() {
    document.getElementById('menu_background_main').style.display = "block";
    document.getElementById('menu_background_main').style.animation = "menu_on 200ms";
}

function menu_off_main() {
    document.getElementById('menu_background_main').style.animation = "menu_off 200ms";
    setTimeout(function() {
        document.getElementById('menu_background_main').style.display = "none";
      }, 200);
}