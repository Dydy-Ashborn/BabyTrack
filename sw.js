// sw.js
self.addEventListener('install', event => {
    console.log('Service Worker installé');
});

self.addEventListener('activate', event => {
    console.log('Service Worker activé');
});

// Gérer les notifications push
self.addEventListener('push', event => {
    const options = {
        body: event.data ? event.data.text() : 'C\'est l\'heure du biberon !',
        icon: 'logo.PNG',
        badge: 'logo.PNG',
        tag: 'biberon-reminder',
        requireInteraction: true,
        actions: [
            {
                action: 'open',
                title: 'Ouvrir l\'app'
            },
            {
                action: 'dismiss',
                title: 'Ignorer'
            }
        ]
    };

    event.waitUntil(
        self.registration.showNotification('BabyTrack - Rappel biberon', options)
    );
});

// Gérer les clics sur les notifications
self.addEventListener('notificationclick', event => {
    event.notification.close();

    if (event.action === 'open') {
        event.waitUntil(
            clients.openWindow('/')
        );
    }
});