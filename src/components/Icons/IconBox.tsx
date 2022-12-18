import { Flex } from "@chakra-ui/react";

const IconBox = ({ children, ...rest }: React.PropsWithChildren<{}>) => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      borderRadius={"8px"}
      {...rest}
    >
      {children}
    </Flex>
  );
};

export default IconBox;
