let listaProveedores = [{
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
    }
];

if(localStorage.length>0){
    listaProveedores.push(JSON.parse(localStorage.getItem("proveedores")));
}
    
export function modificarProveedor(index){
    
}    

export function guardarProveedor(cod, razon, rubro, sitio, email, tel, direccion, cuit, iva, contacto){
    console.log("datos que llegan a guardar: " + cod +" "+ razon);
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
    listaProveedores.push(nuevoProveedor);
    console.log("lista guardada "+ JSON.stringify(listaProveedores));

    //localStorage.clear();
    return nuevoProveedor;
    
}

export const listadoProveedores = () =>{
    if(listadoProveedores == 0){
        console.log("No hay nada")
        return [];
    }else{
        return listaProveedores;
    }
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