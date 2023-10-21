import {
  Box,
  Button,
  Center,
  Flex,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../navbar";

const Co2Talk = () => {
  const [value, setValue] = React.useState("");
  const [resume, setResume] = React.useState(
    "Vous allez voir ici votre résumé ... "
  );
  const resumes = [
    "Journée ordinaire : travail, voiture, marche, repas simple, lecture, promenade nocturne. Conscience limitée de l'empreinte carbone. ",
    "Journée normale : conduite en voiture, marche, repas simple, lecture, soirée calme. Conscience environnementale absente malgré l'empreinte carbone involontaire.",
    "Journée typique : travail, trajet en voiture, marche, repas équilibré, détente, lecture, balade nocturne. Conscience environnementale à développer.",
    "Journée typique : travail, trajet en voiture, marche, repas équilibré, détente, lecture, balade nocturne. Conscience environnementale à développer.",
  ];
  const res = [
    { resultat: "moyenne", bg: "yellow" },
    { resultat: "Élevé", bg: "#FE585A" },
    { resultat: "faible", bg: "green" },
  ];
  const [resultat, setResultat] = React.useState({});
  const [validation, setValidation] = React.useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

  const generateResume = () => {
    if (value.length < 100) {
      setValidation("Ce n'est pas assez pour avoir une résumé");
    } else {
        setValidation('')
      setTimeout(() => {
        const index = Math.floor(Math.random() * resumes.length);
        setResume(resumes[index]);
        const indexres = Math.floor(Math.random() * res.length);
        setResultat(res[indexres]);
      }, 3000);
    }
  };

  return (
    <>
      <Navbar />
      <Flex>
        <Stack px="5">
          <Text fontSize="3xl" fontWeight="extrabold" color="#2BD575">
            Racontez votre journée :
          </Text>
          <Text>
            Dans cette rubrique, partager vos moments les plus écologiques de la
            journée.
          </Text>

          <Text mb="8px">Ecrivez ici: </Text>
          <Textarea
            value={value}
            onChange={handleInputChange}
            placeholder="Dites nous ce que vous avez fait ..."
            size="lg"
            h="40vh"
            w="50vw"
          />
          <Text bg="#FE585A">{validation}</Text>
          <Button colorScheme="teal" size="md" onClick={generateResume}>
            Générer une résumé
          </Button>
        </Stack>
        <Stack pt="5vh" w="25vw">
          <Center fontSize="xl" fontWeight="extrabold" color="#2BD575">
            Votre résumé :
          </Center>
          <Text px="5" h="10vh" >
            {resume}
          </Text>
          <Box
            textAlign="center"
            fontWeight="bold"
            borderRadius="10px"
            mt="10"
            color='white'
            bg={resultat.bg}>
            {resultat.resultat}
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default Co2Talk;
