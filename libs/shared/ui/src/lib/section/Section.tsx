import { Box, BoxProps, StylesProvider, useMultiStyleConfig } from "@chakra-ui/react";
import { Container } from "../container/Container";

export interface SectionProps extends BoxProps {
  variant?: "transparent";
}

export const Section = ({ children, maxW = "container.xl", variant, ...rest }: SectionProps) => {
  const styles = useMultiStyleConfig("Section", { variant });

  return (
    <Box as="section" __css={styles.section} {...rest}>
      <StylesProvider value={styles}>
        <Container maxW={maxW}>{children}</Container>
      </StylesProvider>
    </Box>
  );
};
