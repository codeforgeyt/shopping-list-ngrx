export class ShoppingItem {
    id: number;
    name: string;
    quantity: number;

    constructor(name: string, quantity: number) {
        this.id = new Date().getTime();
        this.name = name;
        this.quantity = quantity;
    }
}
