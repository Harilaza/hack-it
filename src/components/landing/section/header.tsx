import {
  Button,
  Container,
  ContainerProps,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { MotionProps, Variants, motion } from "framer-motion";

import { Navbar } from "..";
import { useNavigate } from "react-router-dom";

type NavBarProps = ContainerProps & MotionProps;

const ease = [0.6, -0.05, 0.01, 0.99];

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const textVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { ease },
  },
  exit: {
    opacity: 0,
    y: -24,
    transition: { ease },
  },
};

const Header: React.FC<NavBarProps> = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Container
        as={motion.div}
        initial="hidden"
        animate="show"
        exit="exit"
        minW="container.sm"
        bg="green.200"
        h="100vh"
        pos="absolute"
        top={0}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Stack as={motion.div} direction="column" w="md" rowGap={4}>
          <Stack
            as={motion.div}
            variants={containerVariants}
            direction="column"
          >
            <Heading
              as={motion.h3}
              variants={textVariants}
              size="2xl"
              color="#0C0A3C"
            >
              Réduisez votre <span style={{ color: "#2BD575" }}>CO2</span>,
              préservez l'
              <span style={{ color: "#2BD575" }}>environnement</span>
            </Heading>
            <Text as={motion.p} variants={textVariants}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pretium velit ut varius consequat. Maecenas eu arcu leo. Morbi a
              justo ante. Aenean feugiat odio neque, ac gravida ante eleifend
              at. Ut molestie,
            </Text>
            <Button
              as={motion.button}
              variants={textVariants}
              mt={4}
              w={125}
              size="sm"
              bgColor="#2BD575"
              variant="solid"
              pointerEvents="all"
              onClick={() => navigate("/co2track/realtime")}
            >
              Commencer
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default Header;
