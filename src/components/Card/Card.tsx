import { Box, ComponentDefaultProps, useStyleConfig } from "@chakra-ui/react";

function Card(props: ComponentDefaultProps) {
  const { variant, children, ...rest } = props;
  const styles = useStyleConfig("Card", { variant });
  // Pass the computed styles into the `__css` prop
  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}

export default Card;
