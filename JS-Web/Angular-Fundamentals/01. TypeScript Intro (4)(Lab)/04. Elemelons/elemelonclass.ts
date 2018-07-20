abstract class Melon {
    public weight: number;
    public melonSort: string;
    public name: string;

    constructor(weight: number, melonSort: string) {
        this.weight = weight;
        this.melonSort = melonSort;
        this.name = this.constructor.name;
    }

    public toString(): string {
        let element: string = this.name
            .split("melon")
            .filter((e) => e !== "")[0];

        if (this.name === "Melolemonmelon") {
            element = "Water";
        }

        return `Element: ${element}\nSort: ${this.melonSort}\n`;
    }
}

export class Watermelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    public elementIndex(): number {
        return this.weight * this.melonSort.length;
    }

    public toString(): string {
        return super.toString() + `Element Index: ${this.elementIndex()}`;
    }
}

export class Firemelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    public elementIndex(): number {
        return this.weight * this.melonSort.length;
    }

    public toString(): string {
        return super.toString() + `Element Index: ${this.elementIndex()}`;
    }
}

export class Earthmelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    public elementIndex(): number {
        return this.weight * this.melonSort.length;
    }

    public toString(): string {
        return super.toString() + `Element Index: ${this.elementIndex()}`;
    }
}

export class Airmelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    public elementIndex(): number {
        return this.weight * this.melonSort.length;
    }

    public toString(): string {
        return super.toString() + `Element Index: ${this.elementIndex()}`;
    }
}

export class Melolemonmelon extends Watermelon {
    public counter: number;
    public elements: any;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.counter = 0;
        this.elements = [Watermelon, Firemelon, Earthmelon, Airmelon];
    }

    public morph(): void {
        this.counter++;
    }

    public toString(): string {
        return new this.elements[this.counter % 4](this.weight, this.melonSort).toString();
    }
}