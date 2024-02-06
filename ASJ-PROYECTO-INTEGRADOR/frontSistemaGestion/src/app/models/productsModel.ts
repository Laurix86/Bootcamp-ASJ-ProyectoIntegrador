export interface ProductsModel{
    products_id:number,
    products_sku: string,
    products_denomination: string,
    products_description: string,
    products_price: number,
    products_stock: string,
    is_deleted: boolean,
    categories_id:{
        categories_id: number,
        categories_denominations: string
    };
    providers_id:{
        providers_id: number,
        providers_denomination: string
    };
    
}

export interface CategoriesModel{
    categories_id: number,
    categories_denominations: string,
    is_deleted: boolean
}

export interface ImagesModel{
    images_id: number,
    images_url: string
}