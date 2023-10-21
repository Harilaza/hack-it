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
          <Center fontSize="lg" mt="5">
            Vous permet de visualiser l'analyse d'une vue d'ensemble en temps
            réel pour reconnaitre le total d'une Emission de CO2 dégager dans
            une salle.
          </Center>
          <Center fontSize="3xl" fontWeight="bold" mt="10" color="#2BD575">
            MyCO2
          </Center>
          <Center fontSize="lg" mt="5">
            Vous offre une vue d'ensemble de vos émissions de carbone. Tout est
            regroupé pour vous aider à visualiser les moyens existant pour
            connaitre les résultats de myCO2.
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
