CREATE DATABASE sistemaGestion;
USE sistemaGestion;


-------- CREACI�N TABLAS

CREATE TABLE "countries"
  (
     "countries_id"   INT NOT NULL PRIMARY KEY,
     "countries_name" VARCHAR(255) NOT NULL,
     "created_at"   DATETIME NOT NULL,
     "updated_at"   DATETIME NULL
  );

CREATE TABLE "jurisdictions"
  (
     "jurisdictions_id"     INT NOT NULL PRIMARY KEY,
     "jurisdictions_name" VARCHAR(255) NOT NULL,
     "country_id"             INT NOT NULL,
      "created_at"   DATETIME NOT NULL,
     "updated_at"   DATETIME NULL
  );

CREATE TABLE "sectorsfield"
  (
     "sectorsfield_id"           INT NOT NULL PRIMARY KEY,
     "sectorsfield_name" VARCHAR(255) NOT NULL,
     "is_deleted" BIT NOT NULL,
      "created_at"   DATETIME NOT NULL,
     "updated_at"   DATETIME NULL
  );

CREATE TABLE "taxcategories"
  (
     "taxcategories_id"           INT NOT NULL PRIMARY KEY,
     "taxcategories_denominations" VARCHAR(255) NOT NULL,
      "created_at"   DATETIME NOT NULL,
     "updated_at"   DATETIME NULL
  );

CREATE TABLE "categories"
  (
     "categories_id"           INT NOT NULL PRIMARY KEY,
     "categories_denominations" VARCHAR(255) NOT NULL,
     "is_deleted" BIT NOT NULL,
      "created_at"   DATETIME NOT NULL,
     "updated_at"   DATETIME NULL
  );

CREATE TABLE "providers"
  (
     "providers_id"                BIGINT NOT NULL PRIMARY KEY,
     "providers_code"            VARCHAR(255) NOT NULL,
     "providers_denomination"      VARCHAR(255) NOT NULL,
     "providers_website"         VARCHAR(255) NULL,
     "providers_email"             VARCHAR(255) NOT NULL,
     "providers_phone"          VARCHAR(15) NOT NULL,
     "providers_cuit"              VARCHAR(11) NOT NULL,
     "providers_street"             VARCHAR(255) NOT NULL,
     "providers_addressNumber"         INT NOT NULL,
     "providers_addressinfo"    VARCHAR(255) NULL,
     "providers_logo"              VARCHAR(255) NOT NULL,
     "providers_city"            VARCHAR(255) NOT NULL,
     "providers_contact_firstname"   VARCHAR(50) NOT NULL,
     "providers_contact_lastname" VARCHAR(50) NOT NULL,
     "providers_contact_phone" VARCHAR(15) NOT NULL,
     "providers_contact_email"    VARCHAR(255) NOT NULL,
     "providers_contact_role"      VARCHAR(50) NOT NULL,
     "is_deleted"                BIT NOT NULL,
     "jurisdictions_id"             INT NOT NULL,
     "taxcategories_id"            INT NOT NULL,
     "sectorfields_id"                    INT NOT NULL,
     "created_at"                  DATETIME NOT NULL,
     "updated_at"                  DATETIME NULL
  );

CREATE TABLE "products"
  (
     "products_id"           BIGINT NOT NULL PRIMARY KEY,
     "products_sku"          VARCHAR(15) NOT NULL,
     "products_denomination" VARCHAR(100) NOT NULL,
     "products_description"  VARCHAR(255) NULL,
     "products_price"       DECIMAL(8, 2) NOT NULL,
     "products_stock"                 INT NOT NULL,
     "is_deleted"          BIT NOT NULL,
     "provider_id"          BIGINT NOT NULL,
     "category_id"          INT NOT NULL,
     "created_at"            DATETIME NOT NULL,
     "updated_at"            DATETIME NULL
  );

CREATE TABLE "images"
  (
     "images_id"   BIGINT NOT NULL PRIMARY KEY,
     "images_url"  VARCHAR(255) NOT NULL,
      "is_deleted"          BIT NOT NULL,
     "product_id" BIGINT NOT NULL,
     "created_at"            DATETIME NOT NULL,
     "updated_at"            DATETIME NULL
  );

CREATE TABLE "purchases_orders"
  (
     "purchases_orders_id"            BIGINT NOT NULL PRIMARY KEY,
     "purchases_orders_code"        VARCHAR(15) NOT NULL,
     "purchases_orders_date"         DATE NOT NULL,
     "purchases_orders_delivery_date" DATE NOT NULL,
     "purchases_orders_information"     VARCHAR(255) NULL,
     "purchases_orders_final_price"         DECIMAL(8, 2) NOT NULL,
     "is_pending"        BIT NOT NULL,
     "is_active"           BIT NOT NULL,
     "providers_id"        BIGINT NOT NULL,
     "created_at"          DATETIME NOT NULL,
     "updated_at"          DATETIME NULL
  );

CREATE TABLE "orders_detail"
  (
     "orders_detail_id"                BIGINT NOT NULL PRIMARY KEY,
     "orders_detail_product_price"   DECIMAL(8, 2) NOT NULL,
     "orders_detail_quantity" INT NOT NULL,
     "products_id"               BIGINT NOT NULL,
     "purchases_order_id"                  BIGINT NOT NULL
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