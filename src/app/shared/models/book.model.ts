export class Book {
    title: string;
    publisher: string;
    issue: number;
    price: number;
    qty: number;
    condition: string;
    value: number;
    box: string;
    notes: string;

    constructor(title: string, issue: number, price: number, qty: number, publisher: string, condition: string, value:  number, box: string, notes: string){
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