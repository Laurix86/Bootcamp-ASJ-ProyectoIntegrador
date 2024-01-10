CREATE DATABASE sistemaGestion;
USE sistemaGestion;


-------- CREACI�N TABLAS

CREATE TABLE "paises"
  (
     "pais_id"     INT NOT NULL PRIMARY KEY,
     "pais_nombre" VARCHAR(255) NOT NULL
  );

CREATE TABLE "jurisdicciones"
  (
     "jurisdiccion_id"     INT NOT NULL PRIMARY KEY,
     "jurisdiccion_nombre" VARCHAR(255) NOT NULL,
     "id_pais"             INT NOT NULL
  );

CREATE TABLE "rubros"
  (
     "rubro_id"           INT NOT NULL PRIMARY KEY,
     "rubro_denominacion" VARCHAR(255) NOT NULL
  );

CREATE TABLE "condiciones_iva"
  (
     "condicion_iva_id"           INT NOT NULL PRIMARY KEY,
     "condicion_iva_denominacion" VARCHAR(255) NOT NULL
  );

CREATE TABLE "categorias"
  (
     "categoria_id"           INT NOT NULL PRIMARY KEY,
     "categoria_denominacion" VARCHAR(255) NOT NULL
  );

CREATE TABLE "proveedores"
  (
     "proveedor_id"                BIGINT NOT NULL PRIMARY KEY,
     "proveedor_codigo"            VARCHAR(255) NOT NULL,
     "proveedor_razon_social"      VARCHAR(255) NOT NULL,
     "proveedor_sitio_web"         VARCHAR(255) NULL,
     "proveedor_email"             VARCHAR(255) NOT NULL,
     "proveedor_telefono"          VARCHAR(15) NOT NULL,
     "proveedor_cuit"              VARCHAR(11) NOT NULL,
     "proveedor_calle"             VARCHAR(255) NOT NULL,
     "proveedor_nro_calle"         INT NOT NULL,
     "proveedor_info_direccion"    VARCHAR(255) NULL,
     "proveedor_logo"              VARCHAR(255) NOT NULL,
     "proveedor_ciudad"            VARCHAR(255) NOT NULL,
     "proveedor_nombre_contacto"   VARCHAR(50) NOT NULL,
     "proveedor_apellido_contacto" VARCHAR(50) NOT NULL,
     "proveedor_telefono_contacto" VARCHAR(15) NOT NULL,
     "proveedor_email_contacto"    VARCHAR(255) NOT NULL,
     "proveedor_rol_contacto"      VARCHAR(50) NOT NULL,
     "is_eliminado"                BIT NOT NULL,
     "id_jurisdiccion"             INT NOT NULL,
     "id_condicion_iva"            INT NOT NULL,
     "id_rubro"                    INT NOT NULL,
     "created_at"                  DATETIME NOT NULL,
     "updated_at"                  DATETIME NULL
  );

CREATE TABLE "productos"
  (
     "producto_id"           BIGINT NOT NULL PRIMARY KEY,
     "producto_sku"          VARCHAR(15) NOT NULL,
     "producto_denominacion" VARCHAR(100) NOT NULL,
     "producto_descripcion"  VARCHAR(255) NULL,
     "producto_precio"       DECIMAL(8, 2) NOT NULL,
     "stock"                 INT NOT NULL,
     "is_eliminado"          BIT NOT NULL,
     "id_proveedor"          BIGINT NOT NULL,
     "id_categoria"          INT NOT NULL,
     "created_at"            DATETIME NOT NULL,
     "updated_at"            DATETIME NULL
  );

CREATE TABLE "imagenes"
  (
     "imagen_id"   BIGINT NOT NULL PRIMARY KEY,
     "imagen_url"  VARCHAR(255) NOT NULL,
     "id_producto" BIGINT NOT NULL
  );

CREATE TABLE "ordenes_compras"
  (
     "orden_id"            BIGINT NOT NULL PRIMARY KEY,
     "orden_codigo"        VARCHAR(15) NOT NULL,
     "orden_fecha"         DATE NOT NULL,
     "orden_fecha_entrega" DATE NOT NULL,
     "orden_adicional"     VARCHAR(255) NULL,
     "orden_total"         DECIMAL(8, 2) NOT NULL,
     "is_pendiente"        BIT NOT NULL,
     "is_activo"           BIT NOT NULL,
     "id_proveedor"        BIGINT NOT NULL,
     "created_at"          DATETIME NOT NULL,
     "updated_at"          DATETIME NULL
  );

CREATE TABLE "ordenes_detalles"
  (
     "detalle_id"                BIGINT NOT NULL PRIMARY KEY,
     "detalle_precio_producto"   DECIMAL(8, 2) NOT NULL,
     "detalle_cantidad_producto" INT NOT NULL,
     "id_producto"               BIGINT NOT NULL,
     "id_orden"                  BIGINT NOT NULL
  );

  --------- CREACI�N DE FOREIGN KEYS

ALTER TABLE "proveedores"
  ADD CONSTRAINT "proveedores_id_jurisdiccion_foreign" 
  FOREIGN KEY("id_jurisdiccion") 
  REFERENCES "jurisdicciones"("jurisdiccion_id");

ALTER TABLE "ordenes_compras"
  ADD CONSTRAINT "ordenes_compras_id_proveedor_foreign" 
  FOREIGN KEY("id_proveedor") 
  REFERENCES "proveedores"("proveedor_id");

ALTER TABLE "productos"
  ADD CONSTRAINT "productos_id_categoria_foreign" 
  FOREIGN KEY("id_categoria")
  REFERENCES "categorias"("categoria_id");

ALTER TABLE "imagenes"
  ADD CONSTRAINT "imagenes_id_producto_foreign" 
  FOREIGN KEY("id_producto")
  REFERENCES "productos"("producto_id");

ALTER TABLE "proveedores"
  ADD CONSTRAINT "proveedores_id_rubro_foreign" 
  FOREIGN KEY("id_rubro")
  REFERENCES "rubros"("rubro_id");

ALTER TABLE "productos"
  ADD CONSTRAINT "productos_id_proveedor_foreign" 
  FOREIGN KEY("id_proveedor")
  REFERENCES "proveedores"("proveedor_id");
  
ALTER TABLE "jurisdicciones"
  ADD CONSTRAINT "jurisdicciones_id_pais_foreign" 
  FOREIGN KEY("id_pais")
  REFERENCES "paises"("pais_id");

ALTER TABLE "ordenes_detalles"
  ADD CONSTRAINT "ordenes_detalles_id_producto_foreign" 
  FOREIGN KEY("id_producto") 
  REFERENCES "productos"("producto_id"); 

 ALTER TABLE "ordenes_detalles"
  ADD CONSTRAINT "ordenes_detalles_id_orden_foreign" 
  FOREIGN KEY("id_orden")
  REFERENCES "ordenes_compras"("orden_id");

 ALTER TABLE "proveedores"
  ADD CONSTRAINT "proveedores_id_condicion_iva_foreign" 
  FOREIGN KEY("id_condicion_iva") 
  REFERENCES "condiciones_iva"("condicion_iva_id");