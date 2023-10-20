import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";

type LinkProps = ChakraLinkProps & {
  active?: boolean;
  isBold?: boolean;
  href?: string;
};

const Link: React.FC<LinkProps> = (props) => {
  return (
    <ChakraLink href={props.href} paddingX={2}>
      {props.children}
    </ChakraLink>
  );
};

export default Link;
