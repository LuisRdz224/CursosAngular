import { Product, calculateTaxes } from './06-function-destructuring'

const shoppingCart: Product[] = [
    {
        name: 'iPhone 14',
        price: 399
    },
    {
        name: 'AirPods 3rd Gen',
        price: 199
    }
]

const [total, tax] = calculateTaxes({ products: shoppingCart, tax: 0.15 })

console.log(`Total ${total}`)
console.log(`Taxes ${tax}`)
