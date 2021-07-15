export class PlaneWriting {
    constructor(data) {
        this.data = data;
    }
    readData() {
        return this.data;
    }
    writeData(data) {
        this.data = data;
    }
}
export class WritingDecorator {
    constructor(wrappee) {
        this.wrappee = wrappee;
    }
    readData() {
        return this.wrappee.readData();
    }
    writeData(data) {
        this.wrappee.writeData(data);
    }
}
export class BoldWriting extends WritingDecorator {
    constructor(wrappee) {
        super(wrappee);
        super.writeData(`<b>${super.readData()}</b>`);
    }
}
export class ItalicWriting extends WritingDecorator {
    constructor(wrappee) {
        super(wrappee);
        super.writeData(`<i>${super.readData()}</i>`);
    }
}
export class StrikeThroughWriting extends WritingDecorator {
    constructor(wrappee) {
        super(wrappee);
        super.writeData(`<del>${super.readData()}</del>`);
    }
}
