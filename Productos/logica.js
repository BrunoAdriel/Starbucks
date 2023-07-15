
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

let vistaProductos = productos.map( function mostrarProductos(){

    nuestrosProductos.innerHTML = ' ';
    for(const prod of productos){
            nuestrosProductos.innerHTML += `
            <div class="card" style="width: 18rem;">
            <tr>
                <td><i class="card-img-top">${prod.foto}</i></td>
                <div class="card-body">
                <td class="card-title">${prod.nombre}</td>
                <td class="card-text">${prod.precio}</td>
                <td><button id="${prod.id}" class="btn btn-primary comprar">Comprar</button></td>
                </div>
            </tr>
            </div>
            `;
        }
        const botones = document.getElementsByClassName('comprar');
        for (const boton of botones) {
            boton.addEventListener('click', (e)=>{
            agregarACarrito(e.target.id);
        })
    }
    })

    // const prodACarro = productos.find((prod)=>prod.id === boton.id);


//Agregar elementos al carrito

function agregarACarrito(prodACarro){
    let prodFind = productos.map((prod)=>{
        return{
            id : prod.id,
            nombre: prod.nombre,
            precio : prod.precio,
            foto: prod.foto
        }
    })

    carro.push(prodFind);
        Swal.fire({
            title: 'Genial!',
            text: `Agregaste, ${prod.nombre} al carrito`,
            imageUrl: prod.foto,
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: prod.nombre,
            });
            tablaCarro.innerHTML='';
            tablaCarro.innerHTML += `
                <tr>
                <td><i>${prod.foto}</i></td>
                <td>${prod.nombre}</td>
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
