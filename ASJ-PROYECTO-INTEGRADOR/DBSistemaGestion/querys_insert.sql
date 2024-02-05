-- Insertar Países
INSERT INTO countries (countries_id, countries_name, is_deleted) VALUES
(1, 'Argentina',false),
(2, 'Uruguay',false);

-- Insertar Jurisdicciones
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

-- Insertar Rubros
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

INSERT INTO providers(providers_id, 
providers_code,
providers_denomination,
providers_website,
providers_email,
providers_phone,
providers_cuit, 
providers_street, 
providers_addressnumber,
providers_addressInfo,
providers_logo,
providers_city,
providers_cp,
providers_contact_firstName,
providers_contact_lastName,
providers_contact_phone,
providers_contact_email,
providers_contact_role,
is_deleted,
jurisdictions_id_jurisdictions_id, 
taxCategories_id_taxCategories_id,
sectorsfield_id_sectorsfield_id,
created_at,
updated_at) VALUES
(1, 'T001', 'Lucaioli', 'www.lucaioli.com.ar', 'contacto@lucaioli.com.ar', '+542914553022','30688087722','Patricios', 762, 'esquina Sixto Laspiur', 'https://lucaioli.com.ar/wp-content/themes/max-news/images/head-back.webp', 'Bahía Blanca', 'Héctor', 'Gimenez', '+542914251012', 'hgimenez@lucaioli.com.ar', 'Gerente', 0,1,1, 9, '2015-03-15 10:34:23.55', NULL),
(2, 'T002', 'Garbarino', 'www.garbarino.com.ar', 'contacto@garbarino.com.ar', '+542914514252','30652142581','Donado', 362, NULL, 'https://d2eebw31vcx88p.cloudfront.net/garbarino/uploads/a38f075de7e420f4a20866be034d36508c3b40c8.png.webp', 'Bahía Blanca', 'Graciela', 'Gutierrez', '+542915211012', 'ggutierrez@garbarino.com.ar', 'Gerente', 0,1,1, 1, '2016-04-16 10:34:23.55', NULL),
(3, 'T003', 'Naldo', 'www.naldo.com.ar', 'contacto@naldo.com.ar', '+5411654652022','30632087722','Corrientes', 1123, 'Balvanera', 'https://naldoar.vtexassets.com/assets/vtex.file-manager-graphql/images/54a95df7-7ec4-4df6-9d6f-49129b5e61c3___6e8637ed9cdf05ece4d125a5c8bb9320.svg', 'Ciudad Autónoma de Buenos Aires', 'Raúl', 'Gomez', '+541136524107', 'rgomez@naldo.com.ar', 'Empleado', 0,24,1, 1, '2017-11-01 10:34:23.55', NULL),
(4, 'A001', 'Arcor', 'www.arcor.com.ar', 'contacto@arcor.com.ar', '+543514265212','30325036521','Callao', 325, NULL, 'https://www.arcor.com/ar/dist/images/logos/logo-grupo-arcor.png', 'Villa General Belgrano', 'Gastón', 'Perez', '+54351426525', 'gperez@arcor.com.ar', 'Adminsitrativo', 1,2,1, 4, '2011-11-01 10:34:23.55', NULL),
(5, 'A002', 'Arcor', 'www.arcor.com.ar', 'contacto@arcor.com.ar', '+543514265212','30325036521','Gascón', 2352, NULL, 'https://www.arcor.com/ar/dist/images/logos/logo-grupo-arcor.png', 'Villa General Belgrano', 'Jimena', 'Velasquez', '+543514635212', 'jvelasquez@arcor.com.ar', 'Adminsitrativo', 0,2,1, 4, '2021-09-01 10:34:23.55', NULL),
(6, 'A003', 'La Familia', 'www.lafamilia.com.ar', 'contacto@lafamilia.com.ar', '+54351412536','30521041262','Sarmiento', 2104, NULL, NULL, 'Córdoba', 'Gastón', 'Perez', '+5435163214252', 'gperez@lafamilia.com.ar', 'Manager', 0,2,12, 4, '2023-11-01 10:34:23.55', NULL),
(7, 
'T002', 
'Garbarino', 
'www.garbarino.com.ar', 
'contacto@garbarino.com.ar', 
'+542914514252',
'30652142581',
'Donado', 
362, 
NULL, 
'https://d2eebw31vcx88p.cloudfront.net/garbarino/uploads/a38f075de7e420f4a20866be034d36508c3b40c8.png.webp', 
'Bahía Blanca', 
'8000',
'Graciela', 
'Gutierrez', 
'+542915211012', 
'ggutierrez@garbarino.com.ar', 
'Gerente', 
0,
1,
1, 
1, 
'2016-04-16 10:34:23.55', 
NULL);



INSERT INTO productos(producto_id,producto_sku,producto_denominacion,producto_descripcion,
producto_precio, stock,is_eliminado,id_proveedor,id_categoria,created_at,updated_at) VALUES
(1, 'B123', 'IPHONE 13 PRO', 'Celular SmartPhone', 1500000, 13, 0, 1, 1, '2023-12-01 11:34:23.55', NULL),
(2, 'PH12R', 'IPHONE 13 PRO', 'Celular SmartPhone', 1700000, 7, 0, 2, 1, '2023-12-29 11:34:23.55', NULL),
(3, 'K123', 'Jugos Clight Naranja', 'Jugo en polvo', 50, 115, 0, 5, 7, '2021-12-01 11:34:23.55','2021-09-01 11:34:23.55'),
(4, '003LU', 'Jugos La Familia', 'Jugo', 99, 78, 0, 6, 7, '2024-01-01 11:34:23.55', NULL),
(5, '123ABC', 'Resmas Ledesma', 'A4 80grs', 1005, 3, 0, 1, 17, '2023-03-01 11:34:23.55', NULL);

INSERT INTO imagenes(imagen_id,imagen_url,id_producto) VALUES
(1, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHp8frOlqthSps8xLDYidyflUChyFV55-2WmSI0fV5r0f95i-R9Jyh_Nx_MmCaJ_DenJg&usqp=CAU', 2),
(2,'https://d2r9epyceweg5n.cloudfront.net/stores/001/108/127/products/clight1-f54d1baa0f150fc17d15906150370226-1024-1024.png', 3);

INSERT INTO ordenes_compras(orden_id,orden_codigo,orden_fecha,orden_fecha_entrega,orden_adicional,
orden_total, is_pendiente,is_activo,id_proveedor,created_at,updated_at) VALUES
(1, '001EL', '2024-01-02', '2024-02-01', NULL, 1500000, 1, 1, 1, '2024-01-03 12:34:23.55', NULL),
(2, '30JL', '2023-11-12', '2024-01-01', NULL, 100, 1, 1,5, '2023-11-12 12:34:23.55', NULL),
(3, 'KJD1', '2023-03-02', '2023-03-15', NULL, 1500000, 0, 1, 2, '2023-03-02 12:34:23.55', NULL);

INSERT INTO ordenes_detalles(detalle_id,detalle_precio_producto,
detalle_cantidad_producto,id_producto,id_orden) VALUES
(1, 1500000, 1, 1, 1),
(2, 50,2,3,2),
(3, 1500000, 1, 2, 3);



