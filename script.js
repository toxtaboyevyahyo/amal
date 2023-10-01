window.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scrool', function() {
        const  header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0)
    })
})