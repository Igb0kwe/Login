
document.addEventListener("DOMContentLoaded", () => {

  const menubar1 = document.getElementById('menubar1');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const side1 = document.getElementById('side1');
  const side2 = document.getElementById('side2');
  const side3 = document.getElementById('side3');
  
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
  
  side1.addEventListener('click', redirectToNewPage);

  function redirectToNewPage() {
    window.location.href = "lifestyle.html";
  }
  
  side2.addEventListener('click', redirectToNewPage);

  function redirectToNewPage() {
    window.location.href = "album.html";
  }
  
  side3.addEventListener('click', redirectToNewPage);

  function redirectToNewPage() {
    window.location.href = "contact.html";
  }


  
  });
