import { Injectable } from '@angular/core';

@Injectable()
export class PublisherService{
    publisherList = [
        "DC",
        "Marvel",
        "Image",
        "Boom Studios",
        "Harvey Comics"
    ]

    getPublisherList(){
        return this.publisherList;
    }

    addPublisher(publisher){
        this.publisherList.push(publisher);
    }

    getPublisher(titleId){
        //todo get a publisher based on title
    }
}