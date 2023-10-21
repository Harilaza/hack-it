import {
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import Marche from "../../../assets/amico.png";
import Bus from "../../../assets/bus.png";
import Moto from "../../../assets/Moto.png";
import Covoiturage from "../../../assets/covoiturage.png";
import Voiture from "../../../assets/voiture.png";
import Bicycle from "../../../assets/bicycle.png";
import Train from "../../../assets/train.png";
import Viande from "../../../assets/Group 23 (1).png";
import Poisson from "../../../assets/Group 20.png";
import Viande2 from "../../../assets/Group 24.png";
import Viande3 from "../../../assets/Group 25.png";
import Vegetarien from "../../../assets/Group 26.png";
import Vegan from "../../../assets/Group 27.png";
import React from "react";

import { Doughnut, Bar } from "react-chartjs-2";
import Navbar from "../navbar";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
ChartJS.register(ArcElement, Tooltip, Legend);

// données du chart
const inialData = {
  labels: ["Quotidien", "Alimentation"],
  datasets: [
    {
      label: "Taux",
      data: [1, 1],
      backgroundColor: ["#FF4500", "#FA8072"],
      borderColor: ["#FF4500", "#FA8072"],
      circumference: 180,
      rotation: 270,
    },
  ],
};

const MyCo2Track = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (value: number) => setValue(value);
  const [isMarche, setIsMarche] = React.useState(false);
  const [isBus, setIsBus] = React.useState(false);
  const [isMoto, setIsMoto] = React.useState(false);
  const [isCo, setIsCo] = React.useState(false);
  const [isVoiture, setIsVoiture] = React.useState(false);
  const [isBicycle, setIsBicycle] = React.useState(false);
  const [isTrain, setIsTrain] = React.useState(false);
  const [alimentation, setAlimentation] = React.useState(0);
  const [isMuch, setIsMuch] = React.useState(false);
  const [isEnough, setIsEnough] = React.useState(false);
  const [isNo, setIsNo] = React.useState(false);
  const [isFich, setIsFish] = React.useState(false);
  const [isVegetarian, setIsVegetarian] = React.useState(false);
  const [isVegan, setIsVegan] = React.useState(false);

  const [transport, setTransport] = React.useState(0);

  const [chartData, setChartData] = React.useState(inialData);
  const chartRef = React.useRef(null);

  const onHandleTransport = (Type: number) => {
    setTransport(Type);
  };

  const onHandleAnalysis = () => {
    const newData = {
      labels: ["Quotidien", "Alimentation"],
      datasets: [
        {
          label: "Taux",
          data: [transport * value, alimentation],
          backgroundColor: ["#FF4500", "#FA8072"],
          borderColor: ["#FF4500", "#FA8072"],
          circumference: 180,
          rotation: 270,
        },
      ],
    };

    setChartData(newData);

    // Appelez "update" sur le composant de graphique pour refléter les nouvelles données
    if (chartRef.current) {
      chartRef.current.chartInstance.update();
    }
    console.log(transport * value);
    console.log(alimentation);
  };

  const handleChangeCheckbox = (
    event: React.ChangeEvent<HTMLInputElement>,
    setState: (newValue: boolean) => void
  ) => {
    setState(event.target.checked);
    if (event.target.checked == true) {
      setAlimentation(alimentation + parseFloat(event.target.value));
    } else {
      setAlimentation(alimentation - parseFloat(event.target.value));
    }
  };
  return (
    <>
      <Navbar />
        <Stack px='5'>
          <Flex>
            <Stack bg='green.100' px='5'>
              <Text fontSize="3xl" fontWeight="extrabold" color="#2BD575">
                Mode de Transport
              </Text>
              <Text>
                Séléctionnez le mode de transport que vous utilisez le plus
                fréquemment. Choisissez-en au moins un.
              </Text>
              <Flex flexWrap="wrap" gap="3">
                <Box
                  display="flex"
                  flexDirection="column"
                  w="20"
                  border="4px"
                  borderColor={isMarche ? "#2BD575" : "transparent"}
                  onClick={() => {
                    onHandleTransport(0.3);
                    setIsMarche(true);
                    setIsBus(false);
                    setIsMoto(false);
                    setIsCo(false);
                    setIsTrain(false);
                    setIsBicycle(false);
                  }}>
                  <Image src={Marche} alt="marche" />
                  <Center fontWeight="bold">Marche</Center>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  w="20"
                  border="4px"
                  borderColor={isBus ? "#2BD575" : "transparent"}
                  onClick={() => {
                    onHandleTransport(3);
                    setIsMarche(false);
                    setIsBus(true);
                    setIsMoto(false);
                    setIsCo(false);
                    setIsTrain(false);
                    setIsBicycle(false);
                  }}>
                  <Image src={Bus} alt="Bus" />
                  <Center fontWeight="bold">Bus</Center>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  w="20"
                  border="4px"
                  borderColor={isMoto ? "#2BD575" : "transparent"}
                  onClick={() => {
                    onHandleTransport(1.5);
                    setIsMarche(false);
                    setIsBus(false);
                    setIsMoto(true);
                    setIsCo(false);
                    setIsTrain(false);
                    setIsBicycle(false);
                  }}>
                  <Image src={Moto} alt="Moto" />
                  <Center fontWeight="bold">Moto</Center>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  w="20"
                  border="4px"
                  borderColor={isCo ? "#2BD575" : "transparent"}
                  onClick={() => {
                    onHandleTransport(2);
                    setIsMarche(false);
                    setIsBus(false);
                    setIsMoto(false);
                    setIsCo(true);
                    setIsTrain(false);
                    setIsBicycle(false);
                    setIsVoiture(false);
                  }}>
                  <Image src={Covoiturage} alt="Covoiturage" />
                  <Center fontWeight="bold">Covoiturage</Center>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  w="20"
                  border="4px"
                  borderColor={isVoiture ? "#2BD575" : "transparent"}
                  onClick={() => {
                    onHandleTransport(2.5);
                    setIsVoiture(true);
                    setIsMarche(false);
                    setIsBus(false);
                    setIsMoto(false);
                    setIsCo(false);
                    setIsTrain(false);
                    setIsBicycle(false);
                  }}>
                  <Image src={Voiture} alt="Voiture" />
                  <Center fontWeight="bold">Voiture</Center>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  w="20"
                  border="4px"
                  borderColor={isBicycle ? "#2BD575" : "transparent"}
                  onClick={() => {
                    onHandleTransport(0.5);
                    setIsMarche(false);
                    setIsBus(false);
                    setIsMoto(false);
                    setIsCo(false);
                    setIsTrain(false);
                    setIsBicycle(true);
                    setIsVoiture(false);
                  }}>
                  <Image src={Bicycle} alt="Bicycle" />
                  <Center fontWeight="bold">Bicyclette</Center>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  w="20"
                  border="4px"
                  borderColor={isTrain ? "#2BD575" : "transparent"}
                  onClick={() => {
                    onHandleTransport(3.5);
                    setIsMarche(false);
                    setIsBus(false);
                    setIsMoto(false);
                    setIsCo(false);
                    setIsTrain(true);
                    setIsBicycle(false);
                    setIsVoiture(false);
                  }}>
                  <Image src={Train} alt="Train" />
                  <Center fontWeight="bold">Train</Center>
                </Box>
              </Flex>
              <Text
                fontSize="3xl"
                fontWeight="extrabold"
                color="#2BD575"
                >
                Distance de parcours (en Km)
              </Text>
              <Text>
                En moyenne, jusqu'à quel distance vous déplacez-vous chaque jour
                ?
              </Text>
              <Flex>
                <NumberInput
                  maxW="100px"
                  mr="2rem"
                  value={value}
                  onChange={handleChange}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <Slider
                  maxW="30vw"
                  focusThumbOnChange={false}
                  value={value}
                  onChange={handleChange}>
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb fontSize="sm" boxSize="32px" children={value} />
                </Slider>
              </Flex>
              <Text
                fontSize="3xl"
                fontWeight="extrabold"
                color="#2BD575"
                >
                Suivi d'alimentation
              </Text>
              <Text>
                Séléctionnez ce qui décrit mieux votre consommation alimentaire
                quotidienne.
              </Text>
              <Stack display="flex" flexDirection="row" mt="5" gap='2' w='50vw'>
                <Checkbox
                  size="md"
                  colorScheme="red"
                  value={27}
                  isChecked={isMuch}
                  onChange={(event) => handleChangeCheckbox(event, setIsMuch)}>
                  <Text color="#982E2E" fontWeight="bold">
                    Beaucoup de viande (+100g/j)
                  </Text>
                </Checkbox>
                <Image src={Viande} alt="viande" maxW="12" />
                <Checkbox
                  size="md"
                  colorScheme="pink"
                  value={13.5}
                  isChecked={isEnough}
                  onChange={(event) =>
                    handleChangeCheckbox(event, setIsEnough)
                  }>
                  <Text color="#FE585A" fontWeight="bold">
                    Viande en moyenne (Tous les 3 j)
                  </Text>
                </Checkbox>
                <Image src={Viande2} alt="viande" w="12" />
                <Checkbox
                  size="md"
                  colorScheme="orange"
                  value={7}
                  isChecked={isNo}
                  onChange={(event) => handleChangeCheckbox(event, setIsNo)}>
                  <Text color="#74B33D" fontWeight="bold">
                    Faible en viande (En semaine)
                  </Text>
                </Checkbox>
                <Image src={Viande3} alt="viande" w="12" />
              </Stack>
              <Stack display="flex" flexDirection="row" mt="5" gap="8" w='50vw'>
                <Checkbox
                  size="md"
                  colorScheme="blue"
                  value={4}
                  isChecked={isFich}
                  onChange={(event) => handleChangeCheckbox(event, setIsFish)}>
                  <Text color="#5BC1E7" fontWeight="bold">
                    Perscatarien (Poisson)
                  </Text>
                </Checkbox>
                <Image src={Poisson} alt="Poisson" w="12" />
                <Checkbox
                  size="md"
                  colorScheme="green"
                  value={3}
                  isChecked={isVegetarian}
                  onChange={(event) =>
                    handleChangeCheckbox(event, setIsVegetarian)
                  }>
                  <Text color="#209C54" fontWeight="extrabold">
                    Végétarien (Du lait et des oeufs)
                  </Text>
                </Checkbox>
                <Image src={Vegetarien} alt="Vegetarien" w="12" />
                <Checkbox
                  size="md"
                  colorScheme="green"
                  value={1}
                  isChecked={isVegan}
                  onChange={(event) => handleChangeCheckbox(event, setIsVegan)}>
                  <Text color="#02612B" fontWeight="extrabold" fontSize='sm'>
                    Végan (Ne mange pas d'animal)
                  </Text>
                </Checkbox>
                <Image src={Vegan} alt="Vegan" w="12" />
              </Stack>
            </Stack>
            {/* Statistique et Resultat */}
            <Stack ml='50px'>
              <Center fontSize="3xl" fontWeight="extrabold" color="#2BD575">
                Resultat myCO2
              </Center>
              <Box mt="10" w='20vw'>
                <Doughnut data={chartData}></Doughnut>
              </Box>
              <Box mt="10" w='20vw'>
                <Bar data={chartData}></Bar>
              </Box>
            </Stack>
            {/* Fin du statistique et Resultat */}
          </Flex>
        </Stack>
        <Button
          colorScheme="teal"
          bg="#2BD575"
          size="lg"
          w="70%"
          onClick={onHandleAnalysis}>
          Analyser
        </Button>
    </>
  );
};

export default MyCo2Track;
