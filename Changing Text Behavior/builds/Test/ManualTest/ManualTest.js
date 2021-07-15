import { BoldWriting, ItalicWriting, PlaneWriting, StrikeThroughWriting } from "../../Writing";
let textData = new PlaneWriting("HelloWorld");
textData = new BoldWriting(textData);
console.log(textData.readData());
textData = new ItalicWriting(textData);
console.log(textData.readData());
let boldStrikeThroughItalicHelloWorld = new BoldWriting(new StrikeThroughWriting(new ItalicWriting(new PlaneWriting("Hello World"))));
console.log(boldStrikeThroughItalicHelloWorld.readData());
