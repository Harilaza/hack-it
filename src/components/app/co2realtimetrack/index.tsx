import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import Person from "../../../assets/Vector.png";
import ImageLogo from "../../../assets/imageLogo.png";
import Navbar from "../navbar";

ChartJS.register(ArcElement, Tooltip, Legend);

function Co2RealtimeTrack() {
  const data = {
    labels: ["Personne", "Arbre", "Voiture"],
    datasets: [
      {
        label: "Taux",
        data: [3, 6, 1],
        backgroundColor: ["#FA8072", "#2BD575", "#FF0000"],
        borderColor: ["#FA8072", "#2BD575", "#FF0000"],
      },
    ],
  };

  return (
    <>
      <Navbar />
      <Flex py={4} w="80vw" h="80vh" justifyContent="space-around">
        <Box>
          <Text fontSize="4xl">Total d'emission :</Text>
          <Text fontSize="5xl" fontWeight="extrabold" color="#6FD575">
            168 Kg
          </Text>
          <Box mt="10">
            <Doughnut data={data}></Doughnut>
          </Box>
          <Text fontSize="xl" fontWeight="bold">
            Les objets détectés
          </Text>
          <Flex align="center" gap="10">
            <Image src={Person} alt="Description de l'image" />
            <Text fontSize="2em">10</Text>
          </Flex>
        </Box>
        <Box>
          <Box w="40vw">
            <Image
              alt="streaming video"
              src="http://192.168.1.152:8080/video"
              h="350px"
              w="600px"
            />
          </Box>
          <Flex mt="5" justifyContent="flex-end">
            <Button mr={2} size="lg" bg="#2BD575" color="white">
              Image
              <Image ml="2" src={ImageLogo} alt="icone" w="5" />
            </Button>
            <Button bg="#2BD575" color="white" size="lg">
              Analyser
            </Button>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}

export default Co2RealtimeTrack;
