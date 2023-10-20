import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Text,
  Image,
  Container,
  Center,
} from "@chakra-ui/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Logo from "../assets/logo.png";
import Person from "../assets/Vector.png";
import ImageLogo from "../assets/imageLogo.png";
import Navbar from "./Navbar";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const Detection = () => {
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
      <Flex h="100vh">
        <Container boxShadow="5px 0 10px gray" w="15vw">
          <Image src={Logo} alt="Description de l'image" w="7vw" />
          <Center fontSize="3xl" fontWeight="bold" mt="10" color="#2BD575">
            CO2Track
          </Center>
          <Center fontSize="xl" mt="5">
            Vous permet de visualiser l'analyse d'une vue d'ensemble en temps
            réel pour reconnaitre le total d'une Emission de CO2 dégager dans
            une salle.
          </Center>
        </Container>
        <Container>
          <Navbar />
          <Flex mt="16" w="80vw" h="80vh" justifyContent="space-around">
            <Box mt="5">
              <Text fontSize="xl" fontWeight="bold">
                Evaluation
              </Text>
              <Flex align="center" gap="10">
                <Image src={Person} alt="Description de l'image" />

                <Text fontSize="2em">10</Text>
              </Flex>

              <Text mt="10" fontSize="4xl">
                Total d'emission :{" "}
              </Text>
              <Text fontSize="5xl" fontWeight="extrabold" color="#6FD575">
                168 Kg
              </Text>
              <Box mt="10">
                <Doughnut data={data}></Doughnut>
              </Box>
            </Box>
            <Box>
              <Box w="40vw">
                <AspectRatio ratio={4 / 3}>
                  <iframe
                    title="naruto"
                    src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                    allowFullScreen
                  />
                </AspectRatio>
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
        </Container>
      </Flex>
    </>
  );
};

export default Detection;
