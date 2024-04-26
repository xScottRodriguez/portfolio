import React from "react";
import { Container, Divider } from "@chakra-ui/react";
import Head from "next/head";
import getGithubRepos from "../constant/getGithubRepos";
import styles from "../styles/Home.module.css";
import GithubSection from "../section/GithubSection";

const Github = ({ repos }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Michael | Github</title>
        <meta
          name="description"
          content="Michael Lovo | Backend Web Developer"
        />
        <link rel="icon" href="/profile_picture.png" />
      </Head>

      <main>
        <Container maxW="container.lg" mt={["5", "10"]} mb={["5", "10"]}>
          <GithubSection repos={repos} />
        </Container>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const repos = await getGithubRepos({ username: process.env.GITHUB_USERNAME });
  return {
    props: {
      repos: repos || null,
    },
  };
}

export default Github;
