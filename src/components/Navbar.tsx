import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Text,
  Spacer,
  Image,
} from "@chakra-ui/react";
import User from "../assets/user.png";

const Navbar = () => {
  return (
    <Flex
      minWidth="max-content"
      width="80vw"
      alignItems="center"
      gap="2"
      mt="2">
      <ButtonGroup gap="2">
        <Button colorScheme="teal" variant="ghost">
          CO2Track
        </Button>
        <Button color="black" variant="ghost">
          MyCO2
        </Button>
      </ButtonGroup>
      <Spacer />
      <Box p="2">
        <Flex align="center" gap='2'>
          <Text>Maminiaina Indrafo</Text>
          <Image src={User} alt="user" w='10'/>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Navbar;
