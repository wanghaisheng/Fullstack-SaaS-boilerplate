import { ImageProps, Section, SectionProps } from "@boilerplate/shared/ui";
import { Grid, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import GradientImage from "../gradient-image/GradientImage";

// const Subtitle = () => (
//   <LandingPageSectionSubtitle>
//     <Box>
//       <Trans i18nKey="home:section-1-subtitle" components={[<Box mb={6} as="p" />, <Box as="p" />]} />
//     </Box>
//   </LandingPageSectionSubtitle>
// );

export interface ImageSectionProps extends SectionProps {
  heading: React.ReactNode;
  imageLocation: "right" | "left" | "center";
  imageProps: ImageProps;
  subtitle: React.ReactNode;
}

export function ImageSection({ heading, imageLocation, imageProps, subtitle, ...rest }: ImageSectionProps) {
  const { t } = useTranslation("home");

  return (
    <Section
      flexDirection={{ base: "column", md: "row" }}
      containerProps={{
        display: "flex",
        gridColumnGap: { md: 10, xl: 20 },
        gridRowGap: { base: 8, md: 16 },
        flexDirection: {
          base: "column-reverse",
          md: imageLocation === "right" ? "row-reverse" : imageLocation === "center" ? "column-reverse" : "row",
        },
      }}
      {...rest}
    >
      <Flex
        flexDirection="column"
        alignItems={{
          base: "center",
          md: imageLocation === "right" ? "flex-start" : imageLocation === "center" ? "center" : "flex-end",
        }}
        flexGrow={0}
        minW={0}
      >
        <GradientImage
          p={{ base: 4, md: 10, lg: 20 }}
          w={{ base: "100%", md: imageLocation === "center" ? "100%" : "auto" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          imageProps={imageProps}
        />
      </Flex>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems={{ base: "flex-start", md: imageLocation === "center" ? "center" : "flex-start" }}
        maxW={{ lg: imageLocation !== "center" ? "380px" : "100%" }}
      >
        {heading}
        {subtitle}
      </Flex>
    </Section>
  );
}

export default ImageSection;
