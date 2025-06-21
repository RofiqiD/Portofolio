// Animasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Animasi fade-in untuk konten about
    const aboutContent = document.querySelector('.about-content');
    aboutContent.style.opacity = '0';
    aboutContent.style.transform = 'translateY(20px)';
    aboutContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    // Animasi untuk foto profil
    const aboutImage = document.querySelector('.image-frame');
    aboutImage.style.opacity = '0';
    aboutImage.style.transform = 'scale(0.9)';
    aboutImage.style.transition = 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s';
    
    // Animasi untuk skill bars
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        bar.style.width = '0';
        bar.style.transition = 'width 1.5s ease 0.8s';
    });
    
    // Trigger animasi setelah delay kecil
    setTimeout(() => {
        aboutContent.style.opacity = '1';
        aboutContent.style.transform = 'translateY(0)';
        
        aboutImage.style.opacity = '1';
        aboutImage.style.transform = 'scale(1)';
        
        skillBars.forEach(bar => {
            bar.style.width = bar.parentElement.previousElementSibling.lastElementChild.textContent;
        });
    }, 100);
    
    // Animasi hover untuk tombol
    const btn = document.querySelector('.btn');
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
    
    // Smooth scroll untuk semua link
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});