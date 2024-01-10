-- Obtener todos los productos, mostrando nombre del producto,
--  categoría, proveedor (razón social y codigo proveedor), precio.

SELECT p.producto_denominacion as Nombre, c.categoria_denominacion as Categoria, pv.proveedor_razon_social, pv.proveedor_codigo, p.producto_precio
FROM productos p