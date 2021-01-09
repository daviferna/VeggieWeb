export class Veggie{
    id: number;
    name:string;
    type:string;
    description:string;
    photoUrl:string;
    photoDescription:string;

    constructor(id:number, name:string, type:string, description:string, photoUrl:string, photoDescription:string){
        this.id = id;
        this.name = name;
        this.type = type;
        this.description = description;
        this.photoUrl = photoUrl;
        this.photoDescription = photoDescription;
    }
}