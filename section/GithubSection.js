/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Heading, SlideFade, Box, SimpleGrid, Text } from "@chakra-ui/react";
import GithubCard from "../components/GithubCard";
import Paragraph from "../components/Paragraph";
import { LanguageContext } from "../context/LanguageContext";

const GithubSection = ({ repos }) => {
  const { texts } = React.useContext(LanguageContext);
  return (
    <SlideFade in offsetY={80} delay={0.2}>
      <Heading
        as="h1"
        fontSize={{ base: "24px", md: "30px", lg: "36px" }}
        mb={3}
      >
        Github
      </Heading>
      <Paragraph>
        <Text>{texts.githubParahraphText1}</Text>
        <Text>{texts.githubParahraphText2} </Text>
      </Paragraph>
      <Box my={5}>
        <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={4}>
          {repos &&
            repos.map((repo) => (
              <GithubCard
                name={repo.name}
                description={repo.description}
                language={repo.language}
                url={repo.clone_url}
                stargazers_count={repo.stargazers_count}
                forks_count={repo.forks_count}
                key={repo.name}
              />
            ))}
        </SimpleGrid>
      </Box>
    </SlideFade>
  );
};

export default GithubSection;
