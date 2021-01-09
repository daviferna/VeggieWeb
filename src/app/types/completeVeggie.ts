import { PlantInstruction } from './plantInstruction';
import { Veggie } from './veggie';

export class CompleteVeggie extends Veggie{
    plantSeasson: string;
    harvestSeasson:string;
    minHumidity:number;
    maxHumidity:number;
    minTemperature:number;
    maxTemperature:number;
    plantInstructions:PlantInstruction[];

    constructor(id:number, name:string, type:string, description:string, photoUrl:string, photoDescription:string, plantSeasson:string, harvestSeasson:string, minHumidity:number,
        maxHumidity:number, minTemperature:number, maxTemperature:number, plantInstructions:PlantInstruction[]){
        super(id, name, type, description, photoUrl, photoDescription);
        this.plantSeasson = plantSeasson;
        this.harvestSeasson = harvestSeasson;
        this.minHumidity = minHumidity;
        this.maxHumidity = maxHumidity;
        this.minTemperature = minTemperature;
        this.maxTemperature = maxTemperature;
        this.plantInstructions = plantInstructions;
    }
}