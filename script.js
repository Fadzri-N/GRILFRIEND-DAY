// Fungsi untuk navigasi antar halaman dengan efek transisi mulus
function goToPage(pageId) {
    const activePage = document.querySelector('.page.active');
    const targetPage = document.getElementById(pageId);

    if (activePage) {
        activePage.classList.remove('active');
        activePage.classList.add('fade-out');

        setTimeout(() => {
            activePage.classList.remove('fade-out');
            targetPage.classList.add('active');
        }, 300); // Waktu jeda transisi keluar masuk
    } else {
        targetPage.classList.add('active');
    }
}

// Fungsi ketika amplop di halaman 1 ditekan
function openEnvelope() {
    goToPage('page2');
}