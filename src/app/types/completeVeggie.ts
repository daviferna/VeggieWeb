import { Veggie } from './veggie';

export class CompleteVeggie extends Veggie{
    plantSeasson: string;
    harvestSeasson:string;
    minHumidity:number;
    maxHumidity:number;
    minTemperature:number;
    maxTemperature:number;

    constructor(id:number, name:string, description:string, photoUrl:string, plantSeasson:string, harvestSeasson:string, minHumidity:number, maxHumidity:number, minTemperature:number, maxTemperature:number){
        super(id, name, description, photoUrl);
        this.plantSeasson = plantSeasson;
        this.harvestSeasson = harvestSeasson;
        this.minHumidity = minHumidity;
        this.maxHumidity = maxHumidity;
        this.minTemperature = minTemperature;
        this.maxTemperature = maxTemperature;
    }
}