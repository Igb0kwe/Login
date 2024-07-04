document.addEventListener("DOMContentLoaded", () => {

    const album1 = document.getElementById('album1');
    const album2 = document.getElementById('album2');
    const album3 = document.getElementById('album3');
    const album4 = document.getElementById('album4');
    const album5 = document.getElementById('album5');
    const album6 = document.getElementById('album6');
    const album2pic = document.getElementById('album2pic');
    const overlay = document.getElementById('overlay')



    let picOpen = false

    function picOpen() {
        picOpen = true;
        overlay.style.display = 'block';
        album2pic.style.display = 'block';
    }
    
    album2.addEventListener('click', function () {
        if (!picOpen) {
          picOpen();
        }
    });

    function picClose() {
        picOpen = false
        overlay.style.display = 'none'
        album2pic.style.display = 'none';
    }
    
    overlay.addEventListener('click', function () {
      if (picOpen) {
        picClose(); 
        }
      });
  



});