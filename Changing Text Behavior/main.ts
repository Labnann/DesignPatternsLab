import {BoldWriting, ItalicWriting, PlaneWriting, StrikeThroughWriting, Writing} from "./Writing";

let textData: Writing = new PlaneWriting("HelloWorld");

textData = new BoldWriting(textData);
console.log(textData.readData());

textData = new ItalicWriting(textData);
console.log(textData.readData());

let boldStrikeThroughItalicHelloWorld : Writing =
    new BoldWriting(new StrikeThroughWriting( new ItalicWriting( new PlaneWriting("Hello World"))));
console.log(boldStrikeThroughItalicHelloWorld.readData());






