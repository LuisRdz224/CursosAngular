export class Person {
    // public name: string
    // public address: string

    constructor(public name: string, public address: string) {}
}

const luis = new Person('Luis', 'SLP')

console.log(luis)
