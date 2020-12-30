export class VeggieItem{
    id: number;
    name:string;
    description:string;
    photoUrl:string;

    constructor(id:number, name:string, description:string, photoUrl:string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.photoUrl = photoUrl;
    }
}