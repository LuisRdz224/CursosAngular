interface Product {
    name: string
    price: number
}

const phone: Product = {
    name: 'Nokia',
    price: 250
}

const tablet: Product = {
    name: 'AirPad',
    price: 350
}

interface TaxCalculatorOptions {
    tax: number
    products: Product[] //Product contiene phone y tablet
}

function calculateTaxes(options: TaxCalculatorOptions): number[] {
    let total = 0
    options.products.forEach((product) => {
        total += product.price
    })
    return [total, total * options.tax]
}

const cartShopping = [phone, tablet]
const tax = 0.15

const result = calculateTaxes({
    products: cartShopping,
    tax
})

console.log('Costo Total: ' + result[0])
console.log('Costo de impuestos: ' + result[1])

export {}
