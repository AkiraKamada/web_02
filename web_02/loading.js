const loading = document.querySelector('.loading');

window.addEventListener('load', () => {
    setTimeout(function() {
        loading.classList.add('loaded');
    }, 1000);
});

const buttn = document.querySelector('#logo')
const nav = document.querySelector('.nav');

buttn.addEventListener('click', () =>  {
    nav.classList.toggle('active'); 
});