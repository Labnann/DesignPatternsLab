import {WritingDecorator} from "./WritingDecorator";
import {Writing} from "../Writing";

export class BoldWriting extends WritingDecorator {
    constructor(wrappee: Writing) {
        super(wrappee);
        super.writeData(`<b>${super.readData()}</b>`)
    }

}