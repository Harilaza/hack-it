import {
  Box,
  Link as ChakraLink,
  Flex,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

import User from "../../../assets/user.png";

const links = [
  { name: "En temps réel", href: "/co2track/realtime" },
  { name: "Par image", href: "/co2track/image" },
  { name: "MyCO2", href: "/co2track/myco2" },
];

const Navbar = () => {
  return (
    <Stack
      direction="row"
      position="sticky"
      top="0"
      alignItems="center"
      ml={0.5}
      gap="2"
      bg="white"
    >
      <Stack direction="row" alignItems="center" gap={8} px={8}>
        {links.map(({ name, href }) => (
          <ChakraLink as={ReactRouterLink} key={name} to={href}>
            {name}
          </ChakraLink>
        ))}
      </Stack>
      <Spacer />
      <Box p="2">
        <Flex align="center" gap="2">
          <Text>Maminiaina Indrafo</Text>
          <Image src={User} alt="user" w="10" />
        </Flex>
      </Box>
    </Stack>
  );
};

export default Navbar;
