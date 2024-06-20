if ('serviceWorker' in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register('service-worker.js').then(function(registration) {
            console.log('ServiceWorker registered');
          }).catch(function(err) {
            console.log('ServiceWorker error: ', err);
          });
    })
}