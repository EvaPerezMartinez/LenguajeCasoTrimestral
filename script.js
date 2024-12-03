// Interacciones del menú desplegable 
document.querySelectorAll('.dropdown').forEach((dropdown) => {
    dropdown.addEventListener('mouseenter', () => {
      dropdown.querySelector('.submenu').style.display = 'block';
    });
  
    dropdown.addEventListener('mouseleave', () => {
      dropdown.querySelector('.submenu').style.display = 'none';
    });
  });
  