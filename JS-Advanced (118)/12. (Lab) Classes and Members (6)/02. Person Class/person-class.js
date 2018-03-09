class Person {
    constructor(fname, lname, age, email) {
        this.firstName = fname;
        this.lastName = lname;
        this.age = age;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}

let p = new Person('a', 'b', 12, 'abc@abc');
console.log(p+'');