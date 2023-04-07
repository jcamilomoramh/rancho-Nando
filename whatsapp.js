const webdriver = require('selenium-webdriver');
const By = webdriver.By;

const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

driver.get('https://web.whatsapp.com').then(() => {
  // Esperamos a que el usuario inicie sesión en WhatsApp Web
  console.log('Por favor, inicie sesión en WhatsApp Web y presione ENTER...');
  process.stdin.once('data', function () {
    // Buscamos el campo de búsqueda
    const searchInput = driver.findElement(By.xpath('//div[@contenteditable="true"][@data-tab="3"]'));

    // Escribimos el nombre del contacto o grupo al que queremos enviar el mensaje
    searchInput.sendKeys('Nombre del contacto o grupo');

    // Esperamos a que aparezcan los resultados de búsqueda
    driver.sleep(2000);

    // Hacemos clic en el contacto o grupo correspondiente
    const contact = driver.findElement(By.xpath('//span[@title="Nombre del contacto o grupo"]'));
    contact.click();

    // Buscamos el campo de texto donde se escribe el mensaje
    const messageInput = driver.findElement(By.xpath('//div[@contenteditable="true"][@data-tab="1"]'));

    // Escribimos el mensaje que queremos enviar
    messageInput.sendKeys('Hola, ¿cómo estás?');

    // Enviamos el mensaje
    const sendButton = driver.findElement(By.xpath('//span[@data-icon="send"]'));
    sendButton.click();

    console.log('Mensaje enviado.');
    driver.quit();
  });
});
