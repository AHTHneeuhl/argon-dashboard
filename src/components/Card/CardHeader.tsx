import { Box, ComponentDefaultProps, useStyleConfig } from "@chakra-ui/react";

function CardHeader(props: ComponentDefaultProps) {
  const { variant, children, ...rest } = props;
  const styles = useStyleConfig("CardHeader", { variant });
  // Pass the computed styles into the `__css` prop
  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}

export default CardHeader;
