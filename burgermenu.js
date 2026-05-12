document.querySelector('.burger')?.addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('nav').classList.toggle('active');
});

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.burger')?.classList.remove('active');
        document.querySelector('nav')?.classList.remove('active');
    });
});