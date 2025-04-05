import { BandEvent } from "@/types";
import { chakra, Stack, Image } from "@chakra-ui/react";

const Blurb = chakra('div', {
    base: {
        color: 'fg.subtle'
    }
})

const EventDetails = ({ imgUrl, description_blurb, name }: Pick<BandEvent, 'imgUrl' | 'description_blurb' | 'name'>) => {
    return (
        <Stack dir='column' width={{ base: 'full', md: 'lg' }}>
            <Image
                alt={`${name} event image`}
                src={imgUrl}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = "https://placehold.co/600";
                }}
            />
            <Blurb dangerouslySetInnerHTML={{ __html: description_blurb }} />
        </Stack>
    )
};

export default EventDetails;