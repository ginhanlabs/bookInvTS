import { Injectable } from '@angular/core';

@Injectable()
export class TitleService{
    titleList = [
        "Amazing Spider-man",
        "Aquaman",
        "Batman",
        "Batman Beyond",
        "Blue Beetle",
        "Firestorm",
        "Fantastic Four",
        "Hawkeye",
        "He-man",
        "Hulk",
        "Spider-man",
        "Silver Surfer",
        "Superman",
        "Wonder Woman"

    ]

    getTitles(){
        return this.titleList;
    }

    addTitles(newTitle: string){
        this.titleList.push(newTitle);
    }
}