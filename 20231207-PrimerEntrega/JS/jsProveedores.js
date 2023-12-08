let listaProveedores = [/* {
        codigo: "ABC1", 
        razonSocial: "Proveduria", 
        rubro: "De todo",
        web: "https://proveduria.com.ar",
        email: "proveduria@detodo.com.ar", 
        telefono: "2214557321", 
        direccion: "un objeto direccion",
        cuit: "30-35248541-1",
        iva: true,
        contacto: "datos de contaco"
    },
    {
        codigo: "222", 
        razonSocial: "Libros", 
        rubro: "Libreria",
        web: "https://libretira.com.ar",
        email: "libretira@libros.com.ar", 
        telefono: "3514236541", 
        direccion: "un objeto direccion",
        cuit: "30-65854263-1",
        iva: false,
        contacto: "datos de contaco"
    } */
];

/* if(localStorage.length>0){
    listaProveedores.push(JSON.parse(localStorage.getItem("proveedores")));
} */
    
export function eliminarProveedor(index){
    //console.log("borrar")
     listaProveedores.splice(index, 1);
    
    localStorage.setItem("proveedores", JSON.stringify(listaProveedores))
    console.log("lista "+ JSON.stringify(listaProveedores));
    location.href = "./proveedores.html";

}    

export function guardarProveedor(cod, razon, rubro, sitio, email, tel, direccion, cuit, iva, contacto){

    let nuevoProveedor = {
        codigo: cod, 
        razonSocial: razon, 
        rubro: rubro,
        web: sitio,
        email: email, 
        telefono: tel, 
        direccion: direccion,
        cuit: cuit,
        iva: iva,
        contacto: contacto
        
    }
    listaProveedores = JSON.parse(localStorage.getItem("proveedores")) || [];
   
    listaProveedores.push(nuevoProveedor);
    
    localStorage.setItem(`proveedores`,  JSON.stringify(listaProveedores));
    console.log("lista guardada "+ JSON.stringify(listaProveedores));

    //localStorage.clear();
    return nuevoProveedor;
    
}

export const listadoProveedores = () =>{
    listaProveedores = JSON.parse(localStorage.getItem("proveedores")) || [];
    return listaProveedores;
    /* if(localStorage.length>0){
        listaProveedores.push(JSON.parse(localStorage.getItem("proveedores")));
        console.log(listaProveedores)
        return listaProveedores;
    }else if(listadoProveedores.length === 0){
        console.log("No hay nada")
        return [];
    
    } */
}

function devolverProveedor(cod){
    for (const p in listaProveedores) {
        if (p.codigo === cod){
            return p;
        }else{
            return null;
        }
    }
};