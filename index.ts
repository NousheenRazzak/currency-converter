import inquirer from 'inquirer'

const currency : any = {
    PKR: 278, // base currency
    USD: 1,
    EUR: 0.919,
    SAR: 74,
    CAD: 1.4,
    GBP: 0.79
}

let currency_converter = await inquirer.prompt(
    [
        {
            name: 'from',
            type: 'list',
            message: 'Enter from currency: ',
            choices: ['PKR', 'USD', 'EUR', 'SAR', 'CAD', 'GBP']
        },
        {
            name: 'to',
            type: 'list',
            message: 'Enter to currency: ',
            choices: ['PKR', 'USD', 'EUR', 'SAR', 'CAD', 'GBP']
        },
        {
            name: 'amount',
            type: 'number',
            message: 'Enter the amount: '
        }
    ]
)

let from_currency = currency[currency_converter.from];
let to_currency = currency[currency_converter.to];
let amount = currency_converter.amount;
let base = amount / from_currency;
let convert = base * to_currency;

console.log(convert);