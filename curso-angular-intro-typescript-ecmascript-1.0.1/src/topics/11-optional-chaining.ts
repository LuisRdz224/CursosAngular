interface Passenger {
    name: string
    children?: string[]
}

const passenger1: Passenger = {
    name: 'Luis'
}

const passenger2: Passenger = {
    name: 'Eunice',
    children: ['bb1', 'bb2']
}

const returnChildren = (passenger: Passenger) => {
    const { name } = passenger
    const childrens = passenger.children?.length || 0
    return console.log(`${name} tiene ${childrens} hijos`)
}

returnChildren(passenger2)
