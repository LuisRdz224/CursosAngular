// function addNumber(a: number, b: number): number {
//     return a + b
// }

// const addNumberRow = (a: number, b: number): string => {
//     return `${a + b}`
// }

// function multiply(base: number, numero?: number, numero2: number = 2) {
//     return base * numero2
// }

// const resultado1 = addNumber(1, 2)
// const resultado2 = addNumberRow(2, 4)
// const multiplicacion = multiply(4)

// console.log({ resultado1, resultado2, multiplicacion })

interface Character2 {
    name: string
    hp: number
    showHp: () => void
}

const healCharacter = (character: Character2, hp: number) => {
    character.hp += hp
}

const luis: Character2 = {
    name: 'Luis',
    hp: 50,
    showHp() {
        console.log(`Vida total del personaje: ${this.hp}`)
    }
}

healCharacter(luis, 10)
healCharacter(luis, 20)

luis.showHp()
