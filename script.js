document.getElementById('mostrarRedes').addEventListener('click', function() {
    var redes = document.getElementById('redesSociais');
    
    
    if (redes.style.display === 'none' || redes.style.display === '') {
        redes.style.display = 'block';  
    } else {
        redes.style.display = 'none';  
    }
});