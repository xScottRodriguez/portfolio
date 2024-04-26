import React from "react";
import { Container } from "@chakra-ui/react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import MediumSection from "../section/MediumSection";
import GithubSection from "../section/GithubSection";
import getGithubRepos from "../constant/getGithubRepos";

const Projects = ({ repos, articles }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Michael | Projects</title>
        <meta
          name="description"
          content="Michael Lovo | Backend Web Developer"
        />
        <link rel="icon" href="/profile_picture.png" />
      </Head>

      <main>
        <Container maxW="container.lg" mt={["5", "10"]} mb={["5", "10"]}>
          <GithubSection repos={repos} />
          <MediumSection articles={articles} />
        </Container>
      </main>
    </div>
  );
};

export default Projects;

export const getStaticProps = async () => {
  const repos = await getGithubRepos({ username: process.env.GITHUB_USERNAME });
  const articles = [];

  return {
    props: {
      repos: repos || null,
      articles: articles || null,
    },
  };
};
