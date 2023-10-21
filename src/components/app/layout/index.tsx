import { Box, Center, Flex, Stack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import LogoHorizontal from "../../app/logo";

function Layout() {
  return (
    <Flex h="100vh">
      <Box boxShadow="base" w="20vw">
        <LogoHorizontal />
        <Stack p={4}>
          <Center fontSize="3xl" fontWeight="bold" mt="10" color="#2BD575">
            CO2Track
          </Center>
          <Center fontSize="xl" mt="5">
            Vous permet de visualiser l'analyse d'une vue d'ensemble en temps
            réel pour reconnaitre le total d'une Emission de CO2 dégager dans
            une salle.
          </Center>
        </Stack>
      </Box>
      <Box overflowY="auto" flex={1}>
        <Outlet />
      </Box>
    </Flex>
  );
}

export default Layout;
