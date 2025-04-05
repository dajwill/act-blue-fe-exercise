import { BandEvent, FormData } from "@/types"
import { buildForm, formatCurrency, calculateTotal } from "../utils";
import { Button, Field, Heading, Input, InputGroup, NumberInput, Separator, Stack, Text } from "@chakra-ui/react"
import { ChangeEvent, FormEvent, useState } from "react";
import { FaRegCreditCard } from "react-icons/fa6";

type EventFormProps = {
    tickets: BandEvent["ticketTypes"]
}

const validateForm = (formData: FormData): boolean => {
    return (
        Object.values(formData.tickets).some(quantity => !!quantity)
        && !!formData.address
        && !!formData.creditCardNumber
        && !!formData.cvv
        && !!formData.expiry
        && !!formData.firstName
        && !!formData.lastName
    )
}

const EventForm = ({ tickets }: EventFormProps) => {
    const [formData, setForm] = useState(buildForm(tickets));

    const updateField = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const updateTickets = (type: string, quantity: number) => {
        setForm({
            ...formData,
            tickets: {
                ...formData.tickets,
                [type]: Number.isNaN(quantity) ? 0 : quantity
            },
        })
    }

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Purchase submitted! (check console for payload)')
        console.log({ formData })
    }

    return (
        <Stack bg="bg.muted" width="100%" py={4} px={6}>
            <form onSubmit={submit}>
                <Stack>
                    <Heading fontWeight="bold">Select Tickets</Heading>
                    <Stack separator={<Separator />}>
                        {tickets.map((ticket) => (
                            <Stack direction="row" gap={6} flex="1" key={ticket.type}>
                                <Stack width="100%">
                                    <Heading fontWeight="extralight" textTransform="uppercase">{ticket.name}</Heading>
                                    <Text>{ticket.description}</Text>
                                    <Heading fontWeight="extralight">{formatCurrency(ticket.cost)}</Heading>
                                </Stack>
                                <Stack width="100px">
                                    <NumberInput.Root name={ticket.type} defaultValue="0" color="fg.muted" min={0} onValueChange={({ valueAsNumber }) => updateTickets(ticket.type, valueAsNumber)}>
                                        <NumberInput.Control borderColor="fg.subtle" bgColor="bg.emphasized" divideColor="fg.subtle" />
                                        <NumberInput.Input borderRadius={0} borderColor="fg.subtle" />
                                    </NumberInput.Root>
                                </Stack>
                            </Stack>
                        ))}
                        <Stack direction="row" justify="space-between">
                            <Heading fontSize="xl" fontWeight="extralight" textTransform="uppercase">Total</Heading>
                            <Heading fontSize="xl" fontWeight="semibold" textTransform="uppercase">{formatCurrency(calculateTotal(formData.tickets, tickets))}</Heading>
                        </Stack>
                    </Stack>
                    <Stack>
                        <Stack direction="row">
                            <Field.Root>
                                <Field.Label></Field.Label>
                                <Input name="firstName" placeholder="First Name" onChange={updateField} />
                            </Field.Root>
                            <Field.Root>
                                <Field.Label></Field.Label>
                                <Input name="lastName" placeholder="Last Name" onChange={updateField} />
                            </Field.Root>
                        </Stack>
                        <Field.Root>
                            <Field.Label></Field.Label>
                            <Input name="address" placeholder="Address" onChange={updateField} />
                        </Field.Root>
                        <Heading>Payment Details</Heading>
                        <Field.Root>
                            <Field.Label></Field.Label>
                            <InputGroup endElement={<FaRegCreditCard />}>
                                <Input name="creditCardNumber" placeholder="0000&emsp;0000&emsp;0000&emsp;0000" onChange={updateField} />
                            </InputGroup>
                        </Field.Root>
                        <Stack direction="row">
                            <Field.Root>
                                <Field.Label></Field.Label>
                                <Input name="expiry" placeholder="MM / YY" onChange={updateField} />
                            </Field.Root>
                            <Field.Root>
                                <Field.Label></Field.Label>
                                <Input name="cvv" placeholder="CVV" onChange={updateField} />
                            </Field.Root>
                        </Stack>
                    </Stack>
                    <Button type="submit" width="100%" borderRadius={0} disabled={!validateForm(formData)}>Get Tickets</Button>
                </Stack>
            </form>
        </Stack>
    )
}

export default EventForm