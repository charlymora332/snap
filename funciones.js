const menuItems = document.querySelectorAll('.opcionesMenu');

// Añadir evento 'mouseenter' para mostrar el submenú
menuItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        const submenu = this.querySelector('.subOpcionesMenu');
        submenu.classList.add('show');
    });

    // Añadir evento 'mouseleave' para ocultar el submenú
    item.addEventListener('mouseleave', function() {
        const submenu = this.querySelector('.subOpcionesMenu');
        submenu.classList.remove('show');
    });
});







document.addEventListener('DOMContentLoaded', function() {
    const imagenAbrir = document.getElementById('imagen-abrir');
    const imagenCerrar = document.getElementById('imagen-cerrar');
    const menu = document.getElementById('menu');

    
    imagenAbrir.addEventListener('click', function() {
        menu.style.display = 'none';
        imagenAbrir.style.display = 'none';
        imagenCerrar.style.display = 'block';
        menu.classList.add('quitar');
   menu.classList.remove('mostrar');

    });

    imagenCerrar.addEventListener('click', function() {
                    menu.style.display = 'block';
        imagenAbrir.style.display = 'block';
        imagenCerrar.style.display = 'none';
          menu.classList.remove('quitar');
      menu.classList.add('mostrar');

    });


    window.addEventListener('resize', () => {
        if (window.innerWidth > 480) {
          //  menu.classList.remove('open');
            menu.style.display = 'flex';

        }
    });
    // Close the menu if window is resized above 768px


});
  






