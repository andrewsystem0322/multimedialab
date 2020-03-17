data = sessionStorage.getItem('campo1');

a = document.getElementById('hola');
a.textContent = "Bienvenido "+data+"    ";

function cerrar() {
    
        window.location="index.html";
        sessionStorage.clear();

    }


