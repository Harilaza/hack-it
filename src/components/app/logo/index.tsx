import { Image, Link } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

const LogoHorizontal: React.FC = () => {
  return (
    <Link as={ReactRouterLink} to="/">
      <Image
        alt="logo"
        src="/assets/logo-horizontal.svg"
        width={165}
        style={{ objectFit: "contain" }}
      />
    </Link>
  );
};

export default LogoHorizontal;
