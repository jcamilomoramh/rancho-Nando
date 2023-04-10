function init() {
    const button = document.querySelector('#whatsapp-button');
    const form = document.querySelector('#whatsapp-form');

    button.addEventListener('click', function() {
      form.style.display = 'block';
      button.style.display = 'none';
    });

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const mesa = document.querySelector('#mesa').value;
      const opciones = document.querySelector('#opciones').value;

      if (mesa && opciones) {
        const mensaje = `Mesa ${mesa}: ${opciones}`;
        const telefono = '573195792747'; // ¡Reemplaza esto con tu número de teléfono de WhatsApp!

        window.open(`https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(mensaje)}`);
      }

      form.reset();
      form.style.display = 'none';
      button.style.display = 'block';
    });
  }

  window.addEventListener('load', init);