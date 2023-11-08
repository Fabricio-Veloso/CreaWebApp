let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the browser's default prompt
  event.preventDefault();

  // Stash the event so it can be triggered later
  deferredPrompt = event;

  // Show your custom install UI or button
  showInstallButton();
});

function showInstallButton() {
  // Display a button or UI element to trigger the install
  const installButton = document.getElementById('install-button');

  // Show the button
  installButton.style.display = 'block';

  // Add a click event listener to trigger the installation
  installButton.addEventListener('click', () => {
    // Hide the button
    installButton.style.display = 'none';

    // Show the browser's install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }

      // Clear the deferredPrompt variable, as it can only be used once
      deferredPrompt = null;
    });
  });
}

function registrarPreferenciaTelaCheia() {
  localStorage.setItem('preferenciaTelaCheia', 'true');
  verificarEAplicarTelaCheia();
}

function verificarEAplicarTelaCheia() {
  const preferenciaTelaCheia = localStorage.getItem('preferenciaTelaCheia');
  if (preferenciaTelaCheia === 'true') {
    // Chame o método para colocar o aplicativo em tela cheia
    requestFullScreen();
  }
}

function requestFullScreen() {
  const element = document.documentElement;

  if (element.requestFullscreen) {
    element.requestFullscreen();
  }
}
