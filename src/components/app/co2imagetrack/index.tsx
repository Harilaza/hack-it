import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import {
  ObjectDetection as CocoObjectDetection,
  DetectedObject,
  load as cocoModelLoad,
} from "@tensorflow-models/coco-ssd";
import * as tf from "@tensorflow/tfjs";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import { Doughnut } from "react-chartjs-2";

import Person from "../../../assets/Vector.png";
import ImageLogo from "../../../assets/imageLogo.png";
import Navbar from "../navbar";
import { MdFileUpload } from "react-icons/md";

ChartJS.register(ArcElement, Tooltip, Legend);

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

function Co2ImageTrack() {
  const [objectDetector, setObjectDetectors] = useState<CocoObjectDetection>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [detectedObjects, setDetectedObjects] = useState<DetectedObject[]>([]);

  const canvasElement = useRef<HTMLCanvasElement>(null);
  const imageElement = useRef<HTMLImageElement>(null);

  const [uploadedImage, setUploadedImage] = useState<string>();

  const loadOCRModel = async () => {
    const model = await cocoModelLoad();
    setObjectDetectors(model);
    setIsLoading(false);
  };

  const setImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const image = event.target.files[0];
      if (canvasElement.current) {
        const canvas = canvasElement.current.getContext("2d");
        canvas!.reset();
      }
      setUploadedImage(URL.createObjectURL(image));
    }
  };

  const startDetecting = useCallback(async () => {
    if (objectDetector) {
      if (imageElement.current && canvasElement.current) {
        const image = tf.browser.fromPixels(imageElement.current);
        const predictions = await objectDetector.detect(image);
        setDetectedObjects(predictions);
        if (predictions) {
          console.log(predictions);
          // draw(canvasElement.current.getContext("2d"), predictions);
        }
      }
    }
  }, [objectDetector]);

  useEffect(() => {
    loadOCRModel();
  }, []);

  return (
    <>
      <Navbar />
      <Flex w="80vw" gap={24} px={8}>
        <Box display="flex" flexDir="column" gap={8}>
          {!uploadedImage && (
            <label
              htmlFor="fileSelect"
              style={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "3px dashed rgb(210, 227, 244)",
                padding: "1.5rem",
                height: "350px",
                width: "350px",
              }}
            >
              <Flex alignItems="center" justifyContent="center" gap={2}>
                <MdFileUpload /> <Text>Importer une image</Text>
              </Flex>
            </label>
          )}
          <input id="fileSelect" type="file" onChange={setImage} hidden />
          {uploadedImage && (
            <>
              <Image
                ref={imageElement}
                src={uploadedImage}
                alt="sample image"
                width={350}
                height={350}
                style={{ objectFit: "cover" }}
              />
              {/* <canvas ref={canvasElement} width={500} height={500} /> */}
              <Button
                onClick={startDetecting}
                bg="#2BD575"
                color="white"
                size="lg"
              >
                Détectés les objets
              </Button>
            </>
          )}
        </Box>
        <Box>
          <Text fontSize="4xl">Total d'emission :</Text>
          <Text fontSize="5xl" fontWeight="extrabold" color="#6FD575">
            700 Kg
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
      </Flex>
    </>
  );
}

export default Co2ImageTrack;
