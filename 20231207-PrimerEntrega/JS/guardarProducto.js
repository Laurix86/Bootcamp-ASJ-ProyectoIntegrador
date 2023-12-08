import {guardarProducto} from "./jsProductos.js";

const btnGuardar = document.getElementById("btnSubmitProd");
const prov = document.getElementById("prov");
const sku = document.getElementById("sku");
const categoria  = document.getElementById("categoria");
const nombreProd = document.getElementById("nombre");
const descrip  = document.getElementById("descripcion");
const precio  = document.getElementById("precio");



let objProd;

btnGuardar.addEventListener("click", ()=>{
   
    //falta control de campos completos
    objProd = guardarProducto(prov.value, sku.value, categoria.value, nombreProd.value, descrip.value, precio.value);
    //localStorage.setItem("proveedores", JSON.stringify(objProv) );
    location.href = "./productos.html";
});


