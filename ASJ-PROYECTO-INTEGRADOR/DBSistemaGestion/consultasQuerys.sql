-- Obtener todos los productos, mostrando nombre del producto,
--  categoría, proveedor (razón social y codigo proveedor), precio.

SELECT p.producto_denominacion as Nombre, c.categoria_denominacion as Categoria, pv.proveedor_razon_social, pv.proveedor_codigo, p.producto_precio
FROM productos p
JOIN categorias c on p.id_categoria = c.categoria_id
JOIN proveedores pv on p.id_proveedor = pv.proveedor_id;

-- En el listado anterior, además de los datos mostrados, traer el campo imagen aunque el 
-- producto NO tenga una. Sino tiene imagen, mostrar "-".

SELECT p.producto_denominacion as Nombre, c.categoria_denominacion as Categoria, pv.proveedor_razon_social, pv.proveedor_codigo, p.producto_precio, i.imagen_url ISNULL(pr.imagen, '-')
FROM productos p
JOIN categorias c on p.id_categoria = c.categoria_id
JOIN proveedores pv on p.id_proveedor = pv.proveedor_id
LEFT JOIN imagenes i on p.producto_id = i.producto_id;

--Mostrar los datos que se pueden modificar (en el front) del producto con ID = 2.

SELECT p.producto_sku as SKU,p.producto_denominacion as Nombre, p.producto_descripcion, c.categoria_denominacion as Categoria, pv.proveedor_razon_social, i.imagen_url ISNULL(pr.imagen, '-'), p.producto_precio as Precio
FROM productos p
JOIN categorias c on p.id_categoria = c.categoria_id
JOIN proveedores pv on p.id_proveedor = pv.proveedor_id
LEFT JOIN imagenes i on p.producto_id = i.producto_id;

-- Listar todo los proveedores cuyo teléfono tenga la 
-- característica de Córdoba o que la provincia sea igual a alguna de las 3 con más proveedores.

SELECT pv.proveedor_razon_social as Proveedor, pv.proveedor_telefono
FROM proveedores pv, jurisdicciones j
WHERE pv.proveedor_telefono like '+54351%'OR j.jurisdiccion_id in (SELECT TOP 3 pv.id_jurisdiccion
                                                                    FROM jurisdicciones j 
                                                                    JOIN proveedores pv on j.jurisdiccion_id = pv.id_jurisdiccion
                                                                    group by j.jurisdiccion_id
                                                                    order by COUNT(pv.id_jurisdiccion));

-- Traer un listado de todos los proveedores que no hayan sido eliminados , y ordenados 
-- por razon social, codigo proveedor y fecha en que se dió de alta ASC. 
-- De este listado mostrar los datos que correspondan con su tabla del front.

SELECT pv.proveedor_codigo as Codigo, pv.proveedor_razon_social as Proveedor, pv.proveedor_sitio_web as Web, pv.proveedor_email as email, pv.proveedor_telefono as Telefono, pv.proveedor_cuit as cuit, pv.proveedor_calle as calle, pv.proveedor_nro_calle, pv.proveedor_ciudad, j.jurisdiccion_nombre as Provincia
FROM proveedores pv
JOIN JURISDICCIONES j on pv.id_jurisdiccion = j.jurisdiccion_id
WHERE pv.is_eliminado = 0
order by  pv.created_at;

--Obtener razon social, codigo proveedor, imagen, web, email, teléfono y 
-- los datos del contacto del proveedor con más ordenes de compra cargadas.

SELECT pv.pv.proveedor_razon_social as Proveedor, pv.proveedor_sitio_web as Web, pv.proveedor_email as email, pv.proveedor_telefono as Telefono, pv.proveedor_apellido_contacto, pv.proveedor_nombre_contacto, pv.proveedor_telefono_contacto
FROM proveedores pv
WHERE pv.proveedor_id = (SELECT oc.id_proveedor
                        FROM ordenes_compras oc
                        )

-- Mostrar la fecha emisión, nº de orden, razon social y codigo de proveedor, 
-- y la cantidad de productos de cada orden.

