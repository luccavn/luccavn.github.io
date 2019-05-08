$(document).ready(function() {
    $('.btn-sidenav').sideNav({
        menuWidth: 230, // Largura do menu lateral
        edge: 'left', // Posicionamento do menu lateral
        closeOnClick: false, // Esconder o menu ao clicar nos links
        draggable: true // Poder arrastar para abrir em dispositivos touchscreen
    });
});