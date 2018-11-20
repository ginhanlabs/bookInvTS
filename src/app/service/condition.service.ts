import { Injectable } from '@angular/core';

@Injectable()
export class ConditionService{
    conditions : string[] = [
        "Mint",
        "Near Mint",
        "Good",
        "Fair",
        "Poor"
    ] 


    getConditions(){
        return this.conditions;
    }
}