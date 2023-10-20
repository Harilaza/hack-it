import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Text,
  Image,
  Container,
} from "@chakra-ui/react";
import Logo from "../assets/logo.png";
import React from '../assets/react.svg'

const Detection = () => {
  return (
    <>
      <Flex>
        <Container boxShadow="5px 0 10px gray" w='10vw'>
          <Image src={Logo} alt="Description de l'image" w='7vw' />
        </Container>
        <Flex mt="10">
          <Box w="20vw">
            <Text>Contenu aligné à gauche</Text>
          </Box>
          <Box>
            <AspectRatio w="30vw" ratio={1}>
              <iframe
                title="naruto"
                src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                allowFullScreen
              />
            </AspectRatio>
            <Flex mt="5" justifyContent="flex-end">
              <Button mr={2} size="lg" bg="#2BD575" color="white">
                Image
              </Button>
              <Button bg="#2BD575" color="white" size="lg">
                Analyser
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Detection;
