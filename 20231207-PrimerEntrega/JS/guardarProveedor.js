import {guardarProveedor} from "./jsProveedores.js";

const btnGuardar = document.getElementById("btnSubmit");
const cod = document.getElementById("codigo");
const razon = document.getElementById("razon");
const rubro  = document.getElementById("rubro");
const sitio = document.getElementById("web");
const mail  = document.getElementById("email");
const tel  = document.getElementById("tel");
const address  = document.getElementById("address");
const cuit  = document.getElementById("cuit");
let iva;
const contacto =  document.getElementById("contacto")


let objProv;

btnGuardar.addEventListener("click", ()=>{
    if (document.getElementById('ivatrue').checked) {
        iva = true;
      }else{
        iva = false;
    }
    console.log("click")
    //falta control de campos completos
    objProv = guardarProveedor(cod.value, razon.value, rubro.value, sitio.value, mail.value, tel.value, address.value, cuit.value, iva, contacto.value);
    localStorage.setItem("proveedores", JSON.stringify(objProv) );
    location.href = "./proveedores.html";
});


