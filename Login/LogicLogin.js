//vinculacion del formulario con JS
const loginForm = document.getElementById('loginForm')

//Funciones
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = document.getElementById('email').value;
    const contrasenia = document.getElementById('contrasenia').value;
    const usuarios = JSON.parse(localStorage.getItem('usuariosNuevos')) || [] ;
    const userValido = usuarios.find(e => e.email === email && e.contrasenia === contrasenia );
    if(!userValido){
        Swal.fire({
            icon: 'error',
            title: 'Constraseñas distintas!',
            text: 'Las contraseñas deben ser iguales, intenta nuevamente',
        });
    }else{
        Swal.fire(
            `Bienvenido ${userValido.nombre}!`,
            'Te llevaremos a la pantalla de inico',
            'success'
            );
        window.location.href ='../index.html';
    }

})








