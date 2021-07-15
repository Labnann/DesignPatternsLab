import {Writing} from "../../src/Writings/Writing";
import {PlaneWriting} from "../../src/Writings/PlaneWriting";
import {BoldWriting} from "../../src/Writings/Decorations/BoldWriting";
import {ItalicWriting} from "../../src/Writings/Decorations/ItalicWriting";
import {StrikeThroughWriting} from "../../src/Writings/Decorations/StrikeThroughWriting";

let textData: Writing = new PlaneWriting("HelloWorld");

textData = new BoldWriting(textData);
console.log(textData.readData());


textData = new ItalicWriting(textData);
console.log(textData.readData());


let boldStrikeThroughItalicHelloWorld : Writing =
    new BoldWriting(new StrikeThroughWriting( new ItalicWriting( new PlaneWriting("Hello World"))));
console.log(boldStrikeThroughItalicHelloWorld.readData());





