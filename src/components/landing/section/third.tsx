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

const Third: React.FC<HeaderProps> = () => {
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
                <ListIcon as={MdCheckCircle} color="green.500" />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Assumenda, quia temporibus eveniet a libero incidunt suscipit
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
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

export default Third;
