export interface Product {
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
    products: Product[] //Product contiene phone y tablet
    tax: number
}

export function calculateTaxes(
    options: TaxCalculatorOptions
): [number, number] {
    const { products, tax } = options
    let total = 0
    products.forEach(({ price }) => {
        total += price
    })
    return [total, total * tax]
}

const cartShopping = [phone, tablet]
const tax = 0.15

const result = calculateTaxes({
    products: cartShopping,
    tax
})

const [productos, taxes] = result

console.log('Costo Total: ' + productos)
console.log('Costo de impuestos: ' + taxes)
