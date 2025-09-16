// sw.js amélioré
self.addEventListener('install', event => {
    console.log('Service Worker installé');
    // Forcer l'activation immédiate
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    console.log('Service Worker activé');
    // Prendre le contrôle immédiatement
    event.waitUntil(clients.claim());
});

// Améliorer la gestion des notifications pour iOS
self.addEventListener('push', event => {
    const data = event.data ? event.data.json() : {};
    
    const options = {
        body: data.body || 'C\'est l\'heure du biberon !',
        icon: '/logo.PNG',
        badge: '/logo.PNG',
        tag: data.tag || 'babytrack-reminder',
        requireInteraction: false, // Changé pour iOS
        silent: false,
        vibrate: [200, 100, 200], // Vibration pour mobile
        data: data,
        actions: [
            {
                action: 'open',
                title: 'Ouvrir',
                icon: '/logo.PNG'
            }
        ]
    };

    event.waitUntil(
        self.registration.showNotification('BabyTrack', options)
    );
});

self.addEventListener('notificationclick', event => {
    event.notification.close();

    const urlToOpen = new URL('/', self.location.origin).href;

    event.waitUntil(
        clients.matchAll({
            type: 'window',
            includeUncontrolled: true
        }).then(clientList => {
            // Chercher une fenêtre existante
            for (const client of clientList) {
                if (client.url === urlToOpen && 'focus' in client) {
                    return client.focus();
                }
            }
            // Ouvrir une nouvelle fenêtre
            if (clients.openWindow) {
                return clients.openWindow(urlToOpen);
            }
        })
    );
});