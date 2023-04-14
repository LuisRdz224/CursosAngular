const skills: string[] = ['Bash', 'Counter', 'Magic']

interface Character {
    name: string
    hp: number
    skills: string[]
    hometown?: string
}

const Luis = {
    name: 'Luis Angel',
    hp: 100,
    skills: ['Bash'],
    hometown: 'Chole'
}

console.table(Luis)
