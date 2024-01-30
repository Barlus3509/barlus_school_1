import React from 'react';
import '../style/navbar.css';
import '../style/icon.css';
import '../style/font.css';

function Navbar() {
  const menuOnMain = () => {
    const menuBackgroundMain = document.getElementById('menu_background_main');
    const menuMain = document.getElementById('menu_main');
    if (menuBackgroundMain) {
      menuBackgroundMain.style.display = 'block';
      menuMain.style.animation = 'menu_on 200ms';
      menuBackgroundMain.style.animation = 'menu_on_background 200ms';
    }
  };

  const menuOffMain = () => {
    const menuBackgroundMain = document.getElementById('menu_background_main');
    const menuMain = document.getElementById('menu_main');
    if (menuBackgroundMain) {
      menuMain.style.animation = 'menu_off 225ms';
      menuBackgroundMain.style.animation = 'menu_off_background 225ms';
      setTimeout(() => {
        menuBackgroundMain.style.display = 'none';
      }, 200);
    }
  };

  return (
    <>
      <nav className="navbar_main">
        <div className="navbar_main_box">
          <h2>ໂຮງຮຽນ barlus</h2>
          <i className="fi fi-rr-apps i-1" onClick={menuOnMain}></i>
        </div>
      </nav>
      <div id="menu_background_main">
        <div id="menu_main">
          <ul className="menu_head_main">
            <div>
              <h3>ໂຮງຮຽນ Barlus</h3>
              <i className="fi fi-rr-apps-delete i-2" onClick={menuOffMain}></i>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;