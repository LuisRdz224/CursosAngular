export class Person {
    // public name: string
    // public address: string

    constructor(
        public firstName: string,
        public lastName: string,
        public address: string
    ) {}
}

// export class Hero extends Person {
//     constructor(
//         name: string,
//         public age: number,
//         public power: string,
//         public color: string,
//         address: string
//     ) {
//         super(name, address)
//     }
// }
export class Hero {
    constructor(
        public person: Person,
        public age: number,
        public power: string,
        public color: string
    ) {}
}

const luis = new Person('Luis', 'Rodriguez', 'SLP')

const luisHero = new Hero(luis, 25, 'Volar', 'Black')

console.log(luisHero)
