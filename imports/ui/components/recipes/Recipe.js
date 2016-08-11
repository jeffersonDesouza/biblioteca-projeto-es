export class Recipe{

    constuctor(name, desc, author){

        this.name = name;
        this.desc = desc;
        this.author = author;
        this.createdAt = new Date;
    }
}