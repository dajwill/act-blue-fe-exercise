import { buildForm, calculateTotal, formatCurrency, formatDate } from "./utils"
import kpopBand from "./band-json/kpop-band.json";

test('format date returns expected date string', () => {
    expect(formatDate(kpopBand.date)).toBe('Tuesday, June 13')
})

test('formatCurrency returns expected amount display', () => {
    expect(formatCurrency(57000)).toBe('$570')
    expect(formatCurrency(1101)).toBe('$11.01')
})

test('buildForm initializes formData for a given event', () => {
    expect(buildForm(kpopBand.ticketTypes)).toStrictEqual({
        tickets: {
            general: 0,
            vip: 0,
            'meet-and-greet': 0,
        },
        firstName: '',
        lastName: '',
        address: '',
        creditCardNumber: '',
        expiry: '',
        cvv: ''
    })
})

test('calculateTotal returns a sum of selected tickets', () => {
    const ticketData = { general: 2, vip: 1, "meet-and-greet": 1 }
    expect(calculateTotal(ticketData, kpopBand.ticketTypes)).toBe(57000)
})