import { BandEvent } from '@/types';
import { formatDate } from '../utils';
import { Heading, Stack, Text } from '@chakra-ui/react';
import EventDetails from './EventDetails';
import EventForm from './EventForm';
import { FaLocationDot, FaRegCalendar } from "react-icons/fa6";

const EventPage = (props: BandEvent) => {
    return (
        <>
            <Stack gap={4}>
                <div>
                    <Heading>{props.name}</Heading>
                    <Stack direction="row" align="center" gap={1} color="fg.subtle">
                        <FaRegCalendar />
                        <Text fontSize="sm" fontWeight="medium">{formatDate(props.date)}</Text>
                    </Stack>
                    <Stack direction="row" align="center" gap={1} color="fg.subtle">
                        <FaLocationDot />
                        <Text fontSize="sm" fontWeight="medium">{props.location}</Text>
                    </Stack>
                </div>
                <Stack gap={{ base: 4, md: 8 }} direction={{ base: 'column', md: 'row' }} flex="1" justify="start">
                    <EventDetails {...props} />
                    <EventForm tickets={props.ticketTypes} />
                </Stack>
            </Stack>
        </>
    )
};

export default EventPage;