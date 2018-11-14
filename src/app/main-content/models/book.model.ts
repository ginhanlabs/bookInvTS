export class Book {
    issue: number;
    price: number;
    qty: number;
    condition: string;
    value: number;
    box: string;
    date: string;

    constructor(issue: number, price: number, qty: number, condition: string, value:  number, box: string,
        date: string){
            this.issue = issue;
            this.price = price;
            this.qty = qty;
            this.condition = condition;
            this.value = value;
            this.box = box;
            this.date = date;
        }
}