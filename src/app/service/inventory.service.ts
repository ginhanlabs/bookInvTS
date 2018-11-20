import { Injectable } from '@angular/core';

@Injectable()
export class InventoryService {

  constructor() { }

  getCompanies() {
    return [
      {name:"DC", id: 1},
      {name:"Marvel", id: 2},
      {name:"Image", id: 3}
    ]
  }

  getCollection() {
    return [
      {publisher: "DC",
        "Titles" : [
          {name: "Superman", count: 100, id: 100},
          {name: "Batman", count: 23, id:101}
        ] 
      },
      {
        publisher: "Marvel",
          "Titles": [
            {name: "Spiderman", count: 100, id:1000},
            {name: "Avengers", count: 50, id: 1001},
            {name: "Iron Man", count: 5, id: 1002 }
          ]
      },
      {
        publisher: "Image",
          "Titles": [
            {name: "Spawn", count: 15, id: 2000},
            {name: "Savage Dragon", count: 50, id: 2001}
          ]
      }
    ]
  }
}
