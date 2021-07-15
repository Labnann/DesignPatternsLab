import {WritingDecorator} from "./WritingDecorator";
import {Writing} from "../Writing";

export class ItalicWriting extends WritingDecorator {
    constructor(wrappee: Writing) {
        super(wrappee);
        super.writeData(`<i>${super.readData()}</i>`)
    }

}