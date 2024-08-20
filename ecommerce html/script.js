const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('activate');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('activate');
    })
}

/* Carrito */

const productosArray = [
    {
        id:"cafe-peru",
        titulo:"Cafe Peru",
        imagen: "./img/product/product1.png",
        precio: 17000,
        categoria:{
            nombre:"cafe",
            id:"cafe"
        }     
  
    },

    {
        id:"cafe-brasil",
        titulo:"Cafe Brasil",
        imagen: "img/product/product3.png",
        precio: 21000,
        categoria:{
            nombre:"cafe",
            id:"cafe"
        }  
    },

    {
        id:"cafe-argentina",
        titulo:"Cafe Argentina",
        imagen: "img/product/product4.png",
        precio: 17000,
        categoria:{
            nombre:"cafe",
            id:"cafe"
        }  
    },

    {
        id:"cafe-colombia",
        titulo:"Cafe Colombia",
        imagen: "img/product/product2.png",
        precio: 15000,
        categoria:{
            nombre:"cafe",
            id:"cafe"
        }  
    },

    {
        id:"taza-cafecito",
        titulo:"Taza Cafecito",
        imagen: "img/product/product5.png",
        precio: 12000,
        categoria:{
            nombre:"cafe",
            id:"cafe"
        }  

    },

    {
        id:"vaso-cafecito",
        titulo:"Vaso Cafecito",
        imagen: "img/product/product6.png",
        precio: 12000,
        categoria:{
            nombre:"cafe",
            id:"cafe"
        }  
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

/*
function cargarProductos(){
    productos.forEach(producto => {
        const div = document.createElement ("div");
        div.classList.add("pro");
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.titulo}">
            <div class="des">
            <span>Cafe</span>
            <h5>${producto.titulo}</h5>
            <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <h4>${producto.precio}</h4>
            </div>
            <button class="black" id="${producto.id}">Agregar al carrito</button>
        `;

        pro-container.append(div);
    });
} 
*/

function cargarProductos(){
    const container = document.getElementById("pro-container"); // Select the container

    productosArray.forEach(producto => { // Use the correct array name
        const div = document.createElement("div");
        div.classList.add("pro");
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.titulo}">
            <div class="des">
                <span>Cafe</span>
                <h5>${producto.titulo}</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>$${producto.precio}</h4> <!-- Added dollar sign for price -->
            </div>
            <button class="black producto-agregar" id="${producto.id}">Agregar al carrito</button>
        `;

        container.append(div); // Append to the selected container
    });
    actualizarBotonesAgregar ();
};


function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if(productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productosArray.find(producto => producto.id === idBoton); // Corrected reference

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito) );
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}

// Call cargarProductos to display products and attach event listeners
cargarProductos(); 






