import React from "react";
import { Heading, SlideFade, Box, Text } from "@chakra-ui/react";
import Paragraph from "../components/Paragraph";
import MediumCard from "../components/MediumCard";
import { LanguageContext } from "../context/LanguageContext";

const MediumSection = ({ articles }) => {
  const { texts } = React.useContext(LanguageContext);
  return (
    <SlideFade in offsetY={80} delay={0.2}>
      <Heading
        as="h1"
        fontSize={{ base: "24px", md: "30px", lg: "36px" }}
        mb={3}
      >
        {texts.mediumTitle}
      </Heading>
      <Paragraph>
        <Text>{texts.mediumText}</Text>
        <Text>{texts.mediumSubText}.</Text>
      </Paragraph>
      <Box my={5}>
        {articles?.length &&
          articles.map((article) => (
            <MediumCard article={article} key={article.id} />
          ))}
      </Box>
    </SlideFade>
  );
};

export default MediumSection;
