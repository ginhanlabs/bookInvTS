import { Injectable } from '@angular/core';

@Injectable()
export class TitleService{
    titles = [
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
        return this.titles;
    }

    addTitles(newTitle){
        this.titles.push(newTitle);
    }
}