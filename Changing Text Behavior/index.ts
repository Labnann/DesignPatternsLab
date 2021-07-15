import {PlaneWriting, Writing} from "./Writing";

console.log("Hello World");

const textElement = document.querySelector("#text") as HTMLElement;
const text = textElement.innerHTML;

const writing : Writing = new PlaneWriting(text);
console.log(writing.readData());