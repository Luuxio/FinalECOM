export interface Product
{
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    createdAt: string;
    updatedAt: string;
    categoryId: number | null;
    category: any | null; // À adapter selon ta structure réelle
    Images: ProductImages[];
}

export interface ProductImages
{
    id: number;
    link: string;
    createdAt: string;
    updatedAt: string;
    ProductId: number;
}
