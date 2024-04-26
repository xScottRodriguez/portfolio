import React from "react";
import { Container } from "@chakra-ui/react";
import Head from "next/head";
import MediumSection from "../section/MediumSection";
import styles from "../styles/Home.module.css";
import getMediumArticles from "../constant/getApiPosts";

const Article = ({ articles }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Michael Lovo | Articles</title>
        <meta name="description" content="Michael |Backend  Web Developer" />
        <link rel="icon" href="/profile_picture.png" />
      </Head>
      <main>
        <Container maxW="container.lg" mt={["5", "10"]} mb={["5", "10"]}>
          <MediumSection articles={articles} />
        </Container>
      </main>
    </div>
  );
};

export default Article;

export async function getStaticProps() {
  const articles = await getMediumArticles({
    username: process.env.MEDIUM_USERNAME,
  });

  return {
    props: {
      articles: articles || null,
    },
  };
}

//PLANTILLA POST [
//   {
//     title: "Text",
//     thumbnail: "",
//     url: "",
//     date: moment(Date.now).format("YYYY - MMM DD"),
//     description: "description...",
//     categories: ["tech", "Development", "Nest.js"],
//   },
// ];
