document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.getElementById('menu_hamburguer');
    const menu = document.getElementById('menu');
    

    
    hamburgerMenu.addEventListener('click', function () {
      menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    });

    
  });

  // ! botão pra ir pra cima
  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector('.back-to-top-btn').style.display = "block";
  } else {
    document.querySelector('.back-to-top-btn').style.display = "none";
  }
}

document.querySelector('.back-to-top-btn').addEventListener('click', function(e) {
  e.preventDefault();
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});