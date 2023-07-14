//vinculo el formulario al JS
const registerForm = document.querySelector('#registerForm');

//obtencion de datos y guardado en local
registerForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const contrasenia = document.querySelector('#contrasenia').value;
    const contraseniaConfirm = document.querySelector('#contraseniaConfirm').value;

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