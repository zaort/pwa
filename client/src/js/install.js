const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;

// Event handler for the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
 event.preventDefault():
 deferredPrompt = event;
 butInstall.style.display = 'block';
});

// Click event handler for the `butInstall` element
butInstall.addEventListener('click', async () => {
 if (deferredPrompt) {
  deferredPrompt.prompt();
  const choiceResult = await deferredPrompt.userChoice;
  if (choiceResult.outcome === 'accepted') {
   console.log('User accepted the installation prompt');
  } else {
   console.log('User dismissed the installation prompt');
  }
  // Reset the deferredPrompt variable
  deferredPrompt = null;
  butInstall.style.display = 'none';
 }
});

// Event handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
 console.log('App installed successfully');
});