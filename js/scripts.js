function ingresar() {
    
    campo1 = document.getElementById('InputUser').value;
    campo2 = document.getElementById('InputPassword').value;

    if (campo1 == "admin" && campo2 == "123") {
        window.location="home.html";
        sessionStorage.setItem('campo1', campo1);
    }
    
    if (campo1 == "admin2" && campo2 == "123") {
        window.location="home.html";
        sessionStorage.setItem('campo1', campo1);
    }

    if (campo1 == "admin3" && campo2 == "123") {
        window.location="home.html";
        sessionStorage.setItem('campo1', campo1);
    }


    else{

        if (campo1 != "admin" && campo1 != "admin2" && campo1 != "admin3" && campo2 != "123" ) {
            alert("Su usuario y contraseña son incorrectos");
            user = document.getElementById('UserError');
            user.style.display = "block" ;
            user = document.getElementById('PassError');
            user.style.display = "block" ;
            document.getElementById("InputUser").focus();
        }  
        else{


                if (campo1 != "admin" && campo1 != "admin2" && campo1 != "admin3") {
                    alert("Su usuario es incorrecto");
                    user = document.getElementById('UserError');
                    user.style.display = "block" ;
                    document.getElementById("InputUser").focus();
                    user2 = document.getElementById('PassError');
                    user2.style.display = "none" ;

                }  

                if (campo2 != "123") {
                    alert("Su contraseña es incorrecta");
                    user = document.getElementById('PassError');
                    user.style.display = "block" ;
                    document.getElementById("InputPassword").focus();
                    user = document.getElementById('UserError');
                    user.style.display = "none" ;

                }
        }

    }


}
