import { Image, Link } from "@chakra-ui/react";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        alt="logo"
        src="assets/logo-mark.svg"
        width={12}
        height={12}
        style={{ objectFit: "contain" }}
      />
    </Link>
  );
};

export default Logo;
