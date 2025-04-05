import { BandEvent } from "./types";

export const formatDate = (date: number) => new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
});

export const formatCurrency = (amount: number) => new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
}).format(amount / 100)

export const buildForm = (tickets: BandEvent["ticketTypes"]) => {
    return {
        tickets: tickets.reduce((dict, ticket) => (
            { ...dict, [ticket.type]: 0 }
        ), {}),
        firstName: '',
        lastName: '',
        address: '',
        creditCardNumber: '',
        expiry: '',
        cvv: ''
    }
}

export const calculateTotal = (formDataTickets: Record<string, number>, tickets: BandEvent["ticketTypes"]) => {
    return Object.keys(formDataTickets).reduce((total, ticketType) => (
        total += formDataTickets[ticketType] * (tickets.find(({ type }) => type === ticketType)?.cost ?? 0)
    ), 0)
}