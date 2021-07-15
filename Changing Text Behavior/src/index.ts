import {BoldWriting, ItalicWriting, PlaneWriting, StrikeThroughWriting, Writing} from "./Writing";


const textElement = document.querySelector("#text") as HTMLElement;
const text = textElement.innerHTML;

let writing : Writing = new PlaneWriting(text);



const wrapWithBold = () =>{
    writing = new BoldWriting(writing);
    setText(writing.readData());
}

const wrapWithItalic = () =>{
    writing = new ItalicWriting(writing);
    setText(writing.readData());
}

const wrapWithStrike = () =>{
    writing = new StrikeThroughWriting(writing);
    setText(writing.readData());
}

const changeText = ()=>{
    setText(inputField.value);
}


let italicWrapperButton = document.querySelector("#italic-wrapper") as HTMLElement;
italicWrapperButton.addEventListener("click", wrapWithItalic);

let boldWrapperButton = document.querySelector("#bold-wrapper") as HTMLElement;
boldWrapperButton.addEventListener("click", wrapWithBold);

let strikeWrapperButton = document.querySelector("#strike-wrapper") as HTMLElement;
strikeWrapperButton.addEventListener("click", wrapWithStrike);

let inputField = document.querySelector("#text-input") as HTMLInputElement;
inputField.addEventListener("keyup",changeText);



const setText = (data: string) =>{
    textElement.innerHTML = data;
}


