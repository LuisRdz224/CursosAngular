export class Person {
    // public name: string
    // public address: string

    constructor(public name: string, public address: string) {}
}

export class Hero extends Person {
    constructor(
        name: string,
        public age: number,
        public power: string,
        public color: string,
        address: string
    ) {
        super(name, address)
    }
}

const luis = new Hero('Luis', 25, 'Volar', 'Black', 'SLP')

console.log(luis)
