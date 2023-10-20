import {
  Button,
  Container,
  ContainerProps,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

import { Navbar } from "..";

type HeaderProps = ContainerProps;

const Second: React.FC<HeaderProps> = () => {
  return (
    <>
      <Navbar />
      <Container
        minW="container.sm"
        bg="green.200"
        h="100vh"
        pos="absolute"
        top={0}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Stack direction="column" w="md" rowGap={4}>
          <Stack direction="column">
            <Heading size="xl" color="#0C0A3C">
              avec Track<span style={{ color: "#2BD575" }}>Gazy</span>, vous
              pouvez :
            </Heading>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#2BD575" />
                Analyser vos empreinte carbone et obtenir des resultats concret
                avec <span style={{ color: "#2BD575" }}>MyCO2</span>
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#2BD575" />
                Laisser TrackGazy analyser votre environnement en une clique
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#2BD575" />
                Télécharger l’application pour plus d’information et d’activité
                ecologique
              </ListItem>
            </List>
          </Stack>
          <Button w={125} size="sm" bgColor="#2BD575" variant="solid">
            Commencer
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default Second;
