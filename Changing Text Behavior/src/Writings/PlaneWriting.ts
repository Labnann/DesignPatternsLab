import {Writing} from "./Writing";

export class PlaneWriting implements Writing {
    data: string;

    constructor(data: string) {
        this.data = data;
    }


    readData(): string {
        return this.data;
    }

    writeData(data: string): void {
        this.data = data;
    }

}