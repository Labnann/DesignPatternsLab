import { PlaneWriting } from "./Writing";
console.log("Hello World");
const textElement = document.querySelector("#text");
const text = textElement.innerHTML;
const writing = new PlaneWriting(text);
console.log(writing.readData());
