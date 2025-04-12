document.getElementById('mostrarRedes').addEventListener('click', function() {
    var redes = document.getElementById('redesSociais');
    
    // Verifica o estado atual e alterna entre exibir e ocultar as redes sociais
    if (redes.style.display === 'none' || redes.style.display === '') {
        redes.style.display = 'block';  // Exibe as redes sociais
    } else {
        redes.style.display = 'none';  // Oculta as redes sociais
    }
});