export class PlantInstruction{
    title:string;
    description:string;
    photoUrl:string;
    photoDescription:string;

    constructor(title:string, description:string, photoUrl:string, photoDescription:string) {
        this.title = title;
        this.description = description;
        this.photoUrl = photoUrl;
        this.photoDescription = photoDescription;
    }
}