
//filtros del JSON 
fetch("/productos.json")
.then(res => res.json())
.then(data => {
    mostrarCards(data)
    productos = data;
})


let carro = JSON.parse(localStorage.getItem('carro')) || [];
let nuestrosProductos =  document.getElementById('nuestrosProductos');
let tablaCarro = document.getElementById('tablaCarro');
let btnFinalizar = document.getElementById('btnFinalizar');
let btnVaciar = document.getElementById('btnVaciar');

//si hay algo guardado en el local 
(carro.length != 0 ) && mostrarTabla();

//mostrar si encuentra algo guardado en el localStorage

function mostrarTabla(){
    tablaCarro.innerHTML='';
    //Se pide que por cada  elemento del array devuelva
    for(const prod of carro){
        tablaCarro.innerHTML += `
        <tr>
        <td><img src="${prod.foto}" alt="${prod.nombre}"></img></td>
        <td>${prod.nombre}</td>
        <td>${prod.precio}</td>
        <td><button onclick="eliminarProd(event)">❌</button></td>
        </tr>
        `;
    }

    //Calcular el total del carrito guardado
    pagoTotal = carro.reduce((acumulador,producto)=> acumulador + producto.precio, 0);
    let infoTotal =document.getElementById('total');
    infoTotal.innerHTML="Monto total a pagar: $"+pagoTotal;
}

//mostrar los productos

function mostrarCards(array) {
    
    
    const vistaProductos = array.map( function mostrarProductos(){

    nuestrosProductos.innerHTML = '';
    for(const prod of array){
            nuestrosProductos.innerHTML += `
            <div class="col">
                <div class="card container">
                    <tr>
                    <td><img class="card-img-top" src="${prod.foto}" alt="${prod.nombre}" ></img></td>
                    <div class="card-body alinearContenido">
                        <section>
                        <td class="card-title ">${prod.nombre}</td>
                        </section>
                        <section>
                        <td class="card-text ">${prod.precio}</td>
                        </section>
                        <td><button id="${prod.id}" class="btn btn-outline-success comprar">$$$</button></td>
                    </div>
                    </tr>
                </div>
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
}

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
            for (const prodFind of carro) {
            tablaCarro.innerHTML += `
                <tr>
                <td><img src="${prodFind.foto}" alt="${prodFind.nombre}"></img></td>
                <td>${prodFind.nombre}</td>
                <td>${prodFind.precio}</td>
                <td><button onclick="eliminarProd(event)">❌</button></td>
                </tr>
            `
        }
        //calcular el total
        let total = carro.reduce((ac,prod)=> ac + prod.precio, 0);
        document.getElementById('total').innerText = `Monto total a pagar: $ ${total}`;

        localStorage.setItem("carro",JSON.stringify(carro));
} 

//Funcionalidad de los botones 

//Boton Eliminar
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

// Boton finalizar compra

btnFinalizar.onclick=()=>{
    carro =[];
    document.getElementById('tablaCarro').innerHTML = '';
    document.getElementById('total').innerText="Total a pagar $:";
    Swal.fire('Gracias por tu compra pronto recibiras tu pedido','Podes volver a comprar si te quedaste con ganas de algo mas 🤔', 'success');

    // eliminar el local
    localStorage.removeItem('carro');
}

// Boton vaciar carro

btnVaciar.onclick=()=>{
    carro =[];
    document.getElementById('tablaCarro').innerHTML = '';
    document.getElementById('total').innerText="Total a pagar $:";
    Swal.fire('Hemos vaciado el carrito','Ya podes seleccionar nuevamente','success')
    localStorage.removeItem('carro');
}


