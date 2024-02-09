# Proyect Integrador Final 

Desarrollo de un *Sistema de Gestión* para manejar información de Proveedores, Productos y Órdenes de compra.

---- (Se encuentra alojado en la carpeta ASJ-PROYECTO-INTEGRADOR)


## Ejecutar localmente

Pasos necesarios para correr el proyecto localmente

- Crear una base de datos llamada
```sql
  CREATE DATABASE sistemaGestion;
```

- Crear la(s) siguiente(s) tabla(s)
(Se crearán automáticamente gracias a la magia de Java)
```

- Insertar **Paises**

```sql
INSERT INTO countries (countries_id, countries_name, is_deleted) VALUES
(1, 'Argentina',false),
(2, 'Uruguay',false);
```

-- Insertar **Jurisdicciones**
```sql
  INSERT INTO jurisdictions (jurisdictions_id, jurisdictions_name, countries_id_countries_id, is_deleted) VALUES
(1, 'Buenos Aires', 1, false),
(2, 'Córdoba', 1, false),
(3, 'Santa Fe', 1, false),
(4, 'Mendoza', 1, false),
(5, 'Tucumán', 1, false),
(6, 'Entre Ríos', 1, false),
(7, 'Salta', 1, false),
(8, 'Chaco', 1, false),
(9, 'Formosa', 1, false),
(10, 'Chubut', 1, false),
(11, 'Neuquén',1, false),
(12, 'Jujuy',1, false),
(13, 'La Rioja', 1, false),
(14, 'Catamarca', 1, false),
(15, 'Corrientes',1, false),
(16, 'Santa Cruz', 1, false),
(17, 'Tierra del Fuego',1, false),
(18, 'Río Negro', 1, false),
(19, 'La Pampa',1, false),
(20, 'San Luis', 1, false),
(21, 'San Juan', 1, false),
(22, 'Santiago del Estero',1, false),
(23, 'Misiones',1, false),
(24, 'CABA', 1, false),
(25, 'Montevideo', 2, false),
(26, 'Canelones', 2, false),
(27, 'Maldonado', 2, false),
(28, 'Rocha', 2, false),
(29, 'Colonia', 2, false),
(30, 'San José', 2, false),
(31, 'Soriano', 2, false),
(32, 'Tacuarembó', 2, false),
(33, 'Rivera', 2, false),
(34, 'Cerro Largo', 2, false);
```

-- Insertar Rubros
```sql
INSERT INTO sectorsfield (sectorsfield_id, sectorsfield_name, is_deleted) VALUES
(1, 'Tecnología', false),
(2, 'Construcción', false),
(3, 'Sanidad', false),
(4, 'Alimentos Bebidas', false),
(5, 'Ropa', false),
(6, 'Calzado', false),
(7, 'Librería', false),
(8, 'Jueguetería', false), 
(9, 'Varios', false);
```
-- Insertar **Taxes**
```sql
INSERT INTO taxcategories(taxcategories_id, taxcategories_denominations, is_deleted) VALUES
(1,'IVA Responsable Inscripto', false),
(2, 'IVA Responsable no Inscripto', false),
(3, 'IVA no Responsable', false),
(4,'IVA Sujeto Exento', false),
(5,'Consumidor Final', false),
(6,'Responsable Monotributo', false),
(7,'Sujeto no Categorizado', false),
(8,'Proveedor del Exterior', false),
(9,'Cliente del Exterior', false),
(10,'IVA Liberado Ley Nº 19.640', false),
(11,'IVA Responsable Inscripto Agente de Percepcion', false),
(12,'Pequeño Contribuyente Eventual', false),
(13,'Monotributista Social', false),
(14,'Pequeño Contribuyente Eventual Social', false);
```
--- Insertar Categorias
```sql
INSERT INTO categories(categories_id,categories_denominations, is_deleted) VALUES
(1, 'Celulares', false),
(2, 'SmartWatch', false),
(3, 'Notebooks', false),
(4, 'Aberturas', false),
(5, 'Almacén', false),
(6, 'Bebidas con alcohol', false),
(7, 'Bebidas sin alcohol', false),
(8, 'Lácteos', false),
(9, 'Pastas Frescas', false),
(10, 'Pantalones', false),
(11, 'Remeras', false),
(12, 'Vestidos',false),
(13, 'Accesorios Vestimenta', false),
(14, 'Zapatos', false),
(15, 'Botas', false),
(16, 'Zapatillas', false),
(17, 'Resmas', false),
(18, 'Escritura', false),
(19, 'Abrochadoras', false),
(20, 'Adhesivos', false),
(21, 'Juegos de Mesa', false),
(22, 'Aire Libre', false),
(23, 'Muñecos/as', false),
(24, 'Didácticos', false),
(25, 'Autos y relacionados', false),
(26, 'Electrónicos', false);
````

- Ejecutar el servidor de Angular (*puerto 4200*)

```bash
  ng start -o
```

- Ejecutar el servidor de Java (*puerto 8080*)

- Insertar algunas **Proveedores** desde el FRONT

- Insertar algunas **Productos** desde el FRONT

- Insertar algunas **Ordenes de Compra** desde el FRONT
## Aclaraciones sobre algunas partes de su código
## API Reference

#### Obtener todos los proveedores

```http
  GET /providers
```


#### Obtener un proveedor

```http
  GET /providers/${id}
```

| Parámetro | Tipo     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `Integer` | **Obligatorio**. ID del Proveedor a buscar |


#### Obtener todos los productos

```http
  GET /products
```


#### Obtener un producto

```http
  GET /products/${id}
```

| Parámetro | Tipo     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `Integer` | **Obligatorio**. ID del Producto a buscar |


#### Obtener todas las órdenes

```http
  GET /purchase-order
```


#### Obtener un producto

```http
  GET /purchase-order/${id}
```

| Parámetro | Tipo     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `Integer` | **Obligatorio**. ID de la orden a buscar |



## Desarrollado por 

Este proyecto fue desarrollado por: **laurix**

Aún en desarrollo (ambos)
