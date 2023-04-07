const iconoMenu = document.querySelector('#icono-menu'),
      menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {

    // Alternamos estilos para el menú y body
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

    // Alternamos su atributo 'src' para el ícono del menú
    const rutaActual = e.target.getAttribute('src');

    if(rutaActual == 'https://img.icons8.com/ios-filled/100/null/menu-rounded.png'){
        e.target.setAttribute('src',"https://img.icons8.com/ios/150/null/delete-sign--v1.png");
    }else{
        e.target.setAttribute('src','https://img.icons8.com/ios-filled/100/null/menu-rounded.png');
    }
});