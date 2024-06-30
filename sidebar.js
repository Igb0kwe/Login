
document.addEventListener("DOMContentLoaded", () => {

  const menubar1 = document.getElementById('menubar1');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  
  let menuOpen = false;
  
  function openMenu() {
    menuOpen = true;
    overlay.style.display = 'block';
    sidebar.style.width = '180px';
  }
  
  menubar1.addEventListener('click', function () {
    if (!menuOpen) {
      openMenu();
    }
  });
  
  function closeMenu() {
      menuOpen = false
      overlay.style.display = 'none'
      sidebar.style.width = '0px'
  }
  
  overlay.addEventListener('click', function () {
    if (menuOpen) {
      closeMenu(); 
      }
    });
  
  });