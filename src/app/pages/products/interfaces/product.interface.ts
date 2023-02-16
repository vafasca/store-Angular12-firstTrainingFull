export interface Producto {
    //campos del contrato segun el backend los datos que reciben
    //desde el backend (products) recibo "id, name, price, description, categoryId, stock"
    id: number;
    name: string;
    price: number;
    description: string;
    categoryId: string;
    stock: number;
    qty: number;
}