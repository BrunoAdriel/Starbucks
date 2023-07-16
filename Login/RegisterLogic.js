//vinculo el formulario al JS
const registerForm = document.querySelector('#registerForm');

//obtencion de datos y guardado en local
registerForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let contrasenia = document.getElementById('contrasenia').value;
    let contraseniaConfirm = document.getElementById('contraseniaConfirm').value;

    const usuarios = JSON.parse(localStorage.getItem('usuariosNuevos')) || [];
    const usuarioRegistrado = usuarios.find (e => e.email === email );
    if(usuarioRegistrado){
        Swal.fire({
            icon: 'info',
            title: 'Email registrado!',
            text: 'Parece que ya hay un usuario creado con este Email',
        });
    } else if(contrasenia != contraseniaConfirm){

        Swal.fire({
            icon: 'error',
            title: 'Constraseñas distintas!',
            text: 'Las contraseñas deben ser iguales, intenta nuevamente',
        });
    } 
    else{
        Swal.fire({
            icon: 'success',
            title: 'Registro Exitoso 🎉!',
            text: 'te llevaremos a la pagina de Ingreso',
        });
        window.location.href = 'Login.html'
    }

//subida de datos al array en el caso de que se cumplan las condiciones
    usuarios.push({nombre: nombre, email: email, contrasenia: contrasenia, contraseniaConfirm: contraseniaConfirm})
    localStorage.setItem('usuariosNuevos', JSON.stringify(usuarios))

})

// localStorage.removeItem('usuariosNuevos');
// localStorage.setItem('usuariosNuevos', JSON.stringify(usuarios))