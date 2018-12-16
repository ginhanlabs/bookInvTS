export class Book {
    id: number;
    title: string;
    publisher: string;
    issue: number;
    price: number;
    qty: number;
    condition: string;
    value: number;
    box: string;
    notes: string;

    constructor(id: number, title: string, issue: number, price: number, qty: number, publisher: string, condition: string, value:  number, box: string, notes: string){
        this.id = id;
        this.title = title;
        this.publisher = publisher;
        this.issue = issue;
        this.price = price;
        this.qty = qty;
        this.condition = condition;
        this.value = value;
        this.box = box;
        this.notes = notes;
    }
}