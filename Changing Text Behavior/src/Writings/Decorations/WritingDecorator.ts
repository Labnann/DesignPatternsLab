import {Writing} from "../Writing";

export class WritingDecorator implements Writing {
    private wrappee: Writing;

    constructor(wrappee: Writing) {
        this.wrappee = wrappee;
    }


    readData(): string {
        return this.wrappee.readData();
    }

    writeData(data: string): void {
        this.wrappee.writeData(data);
    }

}