class Stringer{
    constructor(str, length){
        this.str = str;
        this.length = length;
        this.initialStr = str;
        this.initialLength = length;
    }
    toString(){
        return this.str;
    }
    increase(n){
        if(n > this.length){
            return '...';
        }
        return this.str.slice(n);
    }
    decrease(n){
        return this.str.slice(-n);
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test
