
let carro = JSON.parse(localStorage.getItem('carro')) || [];
let nuestrosProductos =  document.getElementById('nuestrosProductos');
let tablaCarro = document.getElementById('tablaCarro');
let btnFinalizar = document.getElementById('btnFinalizar');
let btnVaciar = document.getElementById('btnVaciar');

//si hay algo guardado en el local
(carro != null ) && mostrarTabla();

//mostrar si encuentra algo guardado en el localStorage

function mostrarTabla(){
    tablaCarro.innerHTML='';
    for(const prod of productos){
        tablaCarro.innerHTML += `
        <tr>
        <td>${prod.foto}</td>
        <td>${prod.nombre}</td>
        <td><i>${prod.precio}</i></td>
        <td><button onclick="eliminarProd(event)">Eliminar</button></td>
        </tr>
        `;
    }

    //Calcular el total del carrito guardado
    pagoTotal = carro.reduce((acumulador,producto)=> acumulador + producto.precio, 0);
    let infoTotal =document.getElementById('total');
    infoTotal.innerHTML="Monto total a pagar: $"+pagoTotal;
}


//boton Eliminar
function eliminarProd(ev){
    let fila  = ev.target.parentElement.parentElement;
    let id = fila.children[0].innerText;
    let indice =  carro.findIndex(producto =>  producto.id === id);
    
    //Remover el producto del carro y la fila
    carro.splice(indice,  1);
    fila.remove();

    //remover el total a pagar
    let productosModificados =  carro.reduce((ac, prod)=>ac+ prod.precio, 0);
    document.getElementById('total').innerText="Monto total a pagar: $"+productosModificados;

    //Remover del  local
    localStorage.setItem("carro", JSON.stringify(carro));
}


//mostrar los productos

let vistaProductos = productos.map( function mostrarProductos(){

    nuestrosProductos.innerHTML = ' ';
    for(const prod of productos){
            nuestrosProductos.innerHTML += `
            <div class="card" style="width: 18rem;">
            <tr>
                <td><img class="card-img-top" src="${prod.foto}"></img></td>
                <div class="card-body">
                <td class="card-title">${prod.nombre}</td>
                <td class="card-text">${prod.precio}</td>
                <td><button id="${prod.id}" class="btn btn-primary comprar">Comprar</button></td>
                </div>
            </tr>
            </div>
            `;
        }
        // funcion del boton comprar
        const botones = document.getElementsByClassName('comprar');
        for (const boton of botones) {
            boton.addEventListener('click', (e)=>{
            agregarACarrito(e.target.id);
        })
    }
    })

//Agregar elementos al carrito

function agregarACarrito(prodACarro){
let prodFind = productos.find((el)=> el.id === parseInt(prodACarro));

    //Sweet Alert 
    carro.push(prodFind);
        Swal.fire({
            title: 'Genial!',
            text: `Agregaste, ${prodFind.nombre} al carrito`,
            imageUrl: prodFind.foto,
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: prodFind.nombre,
            });
            //Que los productos se agreguen al carro
            tablaCarro.innerHTML='';
            tablaCarro.innerHTML += `
                <tr>
                <td><img src="${prodFind.foto}"></img></td>
                <td>${prodFind.nombre}</td>
                <td>${prodFind.precio}</td>
                <td><button onclick="elmiminarProd(event)">Eliminar</button></td>
                </tr>
            `

        //calcular el total
        let total = carro.reduce((ac,prod)=> ac + prod.precio, 0);
        document.getElementById('total').innerText = `Monto total a pagar: $ ${total}`;

        localStorage.setItem("carro",JSON.stringify(carro));
} 
    



//

///
// let prodFind = productos.map((prod)=>{
//     return{
//         id: prod.id,
//         nombre :prod.nombre,
//         foto : prod.foto,
//         precio: prod.precio
//     }
// })
////
///
        //_______------_____//////
// function agregarACarrito(productos){
//     carro.push(productos);
//     Swal.fire({
//         title: 'Genial!',
//         text: `Agregaste, ${productos.nombre} al carrito`,
//         imageUrl: productos.foto,
//         imageWidth: 200,
//         imageHeight: 200,
//         imageAlt: productos.nombre,
//         });
//         tablaCarro.innerHTML += `
//             <tr>
//             <td><i>${productos.foto}</i></td>
//             <td>${productos.nombre}</td>
//             <td>${productos.precio}</td>
//             <td><button onclick="elmiminarProd(event)">Eliminar</button></td>
//             </tr>
//         `
// }
