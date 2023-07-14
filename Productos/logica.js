
let carro = JSON.parse(localStorage.getItem('carro')) || [];
let nuestrosProductos =  document.getElementById('nuestrosProductos');
let tablaCarro = document.getElementById('tablaCarro');
let btnFinalizar = document.getElementById('btnFinalizar');
let btnVaciar = document.getElementById('btnVaciar');

//si hay algo guardado en el local
// (carro != null ) && mostrarTabla();

//mostrar si encuentra algo guardado en el localStorage

// tablaCarro = productos.map(function mostrarTabla(){
//     tablaCarro.innerHTML='';
//     for(const prod of productos){
//         tablaCarro.innerHTML += `
//         <tr>
//         <td>${prod.foto}</td>
//         <td>${prod.nombre}</td>
//         <td><i>${prod.precio}</i></td>
//         <td><button onclick="elmiminarProd(event)">Eliminar</button></td>
//         </tr>
//         `;
//     }

//     pagoTotal = carro.reduce((acumulador,producto)=> acumulador + producto.precio, 0);
//     let infoTotal =document.getElementById('total');
//     infoTotal.innerHTML="Monto total a pagar: $"+pagoTotal;
// })


// //boton Eliminar
// function eliminar(ev){
//     let fila
// }


//mostrar los productos

let vistaProductos = nuestrosProductos = productos.map( function mostrarProductos(){
    nuestrosProductos.innerHTML = ' ';
    for(const prod of productos){
            nuestrosProductos.innerHTML += `
            <tr>
                <td><i>${prod.foto}</i></td>
                <td>${prod.nombre}</td>
                <td>${prod.precio}</td>
                <td><button onclick="comprar(ev)" id="${prod.id}" class="btn btn-primary comprar">Comprar</button></td>
            </tr>
            `;
        }
            let botones = document.getElementsByClassName('comprar');
                for (const boton of botones) {
                    boton.addEventListener('click', ()=>{
                    let prodACarro = productos.find((prod)=>prod.id === boton.id);
                    agregarACarrito(prodACarro);
                })
    }

    })    
    



//Agregar elementos al carrito

tablaCarro = productos.map(function agregarACarrito(producto){
        carro.push(producto);
        Swal.fire({
            title: 'Genial!',
            text: `Agregaste, ${producto.nombre} al carrito`,
            imageUrl: producto.foto,
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: producto.nombre,
            });
            tablaCarro.innerHTML='';
            tablaCarro.innerHTML += `
                <tr>
                <td><i>${producto.foto}</i></td>
                <td>${producto.nombre}</td>
                <td>${producto.precio}</td>
                <td><button onclick="elmiminarProd(event)">Eliminar</button></td>
                </tr>
            `

        //calcular el total
        let total = carro.reduce((ac,prod)=> ac + prod.precio, 0);
        document.getElementById('total').innerText = `Monto total a pagar: $ ${total}`;

        localStorage.setItem("carro",JSON.stringify(carro));
        })






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
