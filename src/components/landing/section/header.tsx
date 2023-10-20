import {
  Button,
  Container,
  ContainerProps,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

import { Navbar } from "..";

type NavBarProps = ContainerProps;

const Header: React.FC<NavBarProps> = () => {
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
            <Heading size="2xl" color="#0C0A3C">
              Réduisez votre <span style={{ color: "#2BD575" }}>CO2</span>,
              préservez l'
              <span style={{ color: "#2BD575" }}>environnement</span>
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pretium velit ut varius consequat. Maecenas eu arcu leo. Morbi a
              justo ante. Aenean feugiat odio neque, ac gravida ante eleifend
              at. Ut molestie,
            </Text>
          </Stack>
          <Button w={125} size="sm" bgColor="#2BD575" variant="solid">
            Commencer
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default Header;
