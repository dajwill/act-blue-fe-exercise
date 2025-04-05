import skaBand from "./band-json/ska-band.json";
import kpopBand from "./band-json/kpop-band.json";
import punkBand from "./band-json/punk-band.json";

import EventPage from "./components/EventPage";
import { Provider } from "./components/ui/provider";
import { Container } from "@chakra-ui/react";

function App() {
  const bands = [skaBand, kpopBand, punkBand];
  return (
    <Provider>
      <Container p={10}>
        <EventPage {...bands[1]} />
      </Container>
    </Provider>
  );
}

export default App;
