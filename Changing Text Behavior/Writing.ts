export interface Writing {
    readData (): string;
    writeData(data:string) :void;

}


export class PlaneWriting implements Writing{
    data: string;

    constructor(data:string) {
        this.data = data;
    }


    readData(): string {
        return this.data;
    }

    writeData(data:string): void {
        this.data = data;
    }

}


export class WritingDecorator implements Writing{
    private wrappee: Writing;
    constructor(wrappee: Writing) {
        this.wrappee = wrappee;
    }



    readData(): string {
        return this.wrappee.readData();
    }

    writeData(data:string): void {
        this.wrappee.writeData(data);
    }

}


export class BoldWriting extends WritingDecorator{
    constructor(wrappee:Writing) {
        super(wrappee);
        super.writeData(`<b>${super.readData()}</b>`)
    }

}

export class ItalicWriting extends WritingDecorator{
    constructor(wrappee:Writing) {
        super(wrappee);
        super.writeData(`<i>${super.readData()}</i>`)
    }

}



export class StrikeThroughWriting extends WritingDecorator{
    constructor(wrappee:Writing) {
        super(wrappee);
        super.writeData(`<del>${super.readData()}</del>`)
    }

}


