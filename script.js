// Efek scroll halus untuk semua link yang mengarah ke bagian halaman (anchor)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Cek jika elemen target ada sebelum melakukan scroll
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Menambahkan keyframes animasi via JavaScript agar lebih rapi
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    @keyframes scaleIn {
        from { opacity: 0; transform: scale(0.9); }
        to { opacity: 1; transform: scale(1); }
    }
`;
document.head.appendChild(styleSheet);


// Animasi saat halaman dimuat
window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');
    const photoFrame = document.querySelector('.photo-frame');

    if (heroContent) {
        heroContent.style.animation = 'fadeIn 1s ease-out forwards';
    }
    if (photoFrame) {
        photoFrame.style.animation = 'scaleIn 1s ease-out forwards';
    }
});