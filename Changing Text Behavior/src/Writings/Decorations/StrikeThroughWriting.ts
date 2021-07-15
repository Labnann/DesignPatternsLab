import {WritingDecorator} from "./WritingDecorator";
import {Writing} from "../Writing";

export class StrikeThroughWriting extends WritingDecorator {
    constructor(wrappee: Writing) {
        super(wrappee);
        super.writeData(`<del>${super.readData()}</del>`)
    }

}