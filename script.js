const menuAbrir = document.querySelector('.menu-abrir');
const menuFechar = document.querySelector('.menu-fechar');
const corpoSite = document.documentElement;

menuAbrir.addEventListener('click', function () {
    corpoSite.classList.add('menu-ativo');
});

menuFechar.addEventListener('click', function () {
    corpoSite.classList.remove('menu-ativo');
});

corpoSite.addEventListener('click', function (event) {
    if (corpoSite == event.target) {
        corpoSite.classList.remove('menu-ativo');
    }
});