import {
  Button,
  Container,
  ContainerProps,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { MdPerson4 } from "react-icons/md";

import { Logo } from "..";
import Link from "./link";

const links = [
  { name: "Accueil", href: "#accueil" },
  { name: "CO2Track", href: "#co2track" },
  { name: "MyCO2", href: "#myco2" },
  { name: "Télécharger", href: "#download" },
];

type NavBarProps = ContainerProps;

const Navbar: React.FC<NavBarProps> = () => {
  return (
    <Container maxW="container.xl" px="12" pos="sticky" zIndex={1}>
      <Flex
        as="nav"
        maxW="container.xl"
        alignItems="center"
        alignSelf="center"
        gap={12}
        height={100}
        pointerEvents="all"
      >
        <Logo />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          flex={1}
        >
          <Stack direction="row" alignItems="center">
            {links.map(({ name, href }) => (
              <Link key={name} href={href}>
                {name}
              </Link>
            ))}
          </Stack>
          <Button
            size="sm"
            rightIcon={<MdPerson4 />}
            bgColor="#2BD575"
            variant="solid"
          >
            Se connercter
          </Button>
        </Stack>
      </Flex>
    </Container>
  );
};

export default Navbar;
