import {
  Container,
  ContainerProps,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
} from "@chakra-ui/react";
import { Variants, motion } from "framer-motion";
import { MdCheckCircle } from "react-icons/md";

import { Navbar } from "..";

type HeaderProps = ContainerProps;

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

const Fourth: React.FC<HeaderProps> = () => {
  return (
    <>
      <Navbar />
      <Container
        minW="container.sm"
        bg="green.200"
        h="100vh"
        pos="absolute"
        top={0}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Stack direction="column" w="md" rowGap={4}>
          <Stack
            as={motion.div}
            variants={containerVariants}
            direction="column"
          >
            <Heading
              as={motion.h3}
              variants={textVariants}
              size="xl"
              color="#0C0A3C"
            >
              avec Track<span style={{ color: "#2BD575" }}>Gazy</span>, vous
              pouvez :
            </Heading>
            <List as={motion.ul} spacing={3}>
              <ListItem as={motion.li} variants={textVariants}>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </ListItem>
              <ListItem as={motion.li} variants={textVariants}>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Assumenda, quia temporibus eveniet a libero incidunt suscipit
              </ListItem>
              <ListItem as={motion.li} variants={textVariants}>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
              </ListItem>
            </List>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default Fourth;
