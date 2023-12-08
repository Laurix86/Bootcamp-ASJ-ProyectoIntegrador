let listaProductos =[];

export const listadoProductos = () =>{
    listaProductos = JSON.parse(localStorage.getItem("productos")) || [];
    return listaProductos;

};

export function guardarProducto(prov, sku, categoria, nombreProd, descrip, precio){

    let nuevoProducto = {
        proveedor: prov,
        sku: sku,
        categoria:categoria,
        nombre: nombreProd,
        descripcion: descrip, 
        precio: precio
        
    }
    listaProductos = JSON.parse(localStorage.getItem("productos")) || [];
   
    listaProductos.push(nuevoProducto);
    
    localStorage.setItem(`productos`,  JSON.stringify(listaProductos));
    console.log("lista guardada "+ JSON.stringify(listaProductos));

    //localStorage.clear();
    return nuevoProducto;
    
}

export function eliminarProducto(index){
    //console.log("borrar")
     listaProductos.splice(index, 1);
    
    localStorage.setItem("productos", JSON.stringify(listaProductos))
    console.log("lista "+ JSON.stringify(listaProductos));
    location.href = "./productos.html";

}    