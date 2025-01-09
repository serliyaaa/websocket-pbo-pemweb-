const socket = new WebSocket('ws://localhost:8080');

// Saat koneksi terbuka
socket.addEventListener('open', () => {
    console.log('Connected to WebSocket server');
});

// Saat pesan diterima
socket.addEventListener('message', (event) => {
    const data = JSON.parse(event.data);

    if (data.type === 'data') {
        // Tampilkan data dari server
        const dataDiv = document.getElementById('data');
        dataDiv.innerHTML = '<pre>' + JSON.stringify(data.data, null, 2) + '</pre>';
    } else if (data.type === 'notification') {
        // Tampilkan notifikasi
        const notificationsDiv = document.getElementById('notifications');
        notificationsDiv.textContent = data.message;
    }
});

// Saat koneksi ditutup
socddket.addEventListener('close', () => {
    console.log('Disconnected from WebSocket server');
});
