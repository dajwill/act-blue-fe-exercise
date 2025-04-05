export type Ticket = {
    type: string
    name: string
    description: string
    cost: number
}

export type BandEvent = {
    name: string
    id: string
    date: number
    location: string
    description_blurb: string
    imgUrl: string
    ticketTypes: Ticket[]
}

export type TicketOption = Record<string, number>

export type FormData = {
    tickets: TicketOption
    firstName: string
    lastName: string
    address: string
    creditCardNumber: string
    expiry: string
    cvv: string
}