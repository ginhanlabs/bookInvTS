import { Injectable } from '@angular/core';

@Injectable()
export class InventoryService {

  constructor() { }

  getCompanies() {
    return [
      {name:"DC"},
      {name:"Marvel"},
      {name:"Image"}
    ]
  }

  getInventory() {
    return [
      {publisher: "DC",
        "Titles" : [
          {name: "Superman", count: 100},
          {name: "Batman", count: 23}
        ] 
      },
      {
        publisher: "Marvel",
          "Titles": [
            {name: "Spiderman", count: 100},
            {name: "Avengers", count: 50},
            {name: "Iron Man", count: 5}
          ]
      },
      {
        publisher: "Image",
          "Titles": [
            {name: "Spawn", count: 15},
            {name: "Savage Dragon", count: 50}
          ]
      }
    ]
  }
}
