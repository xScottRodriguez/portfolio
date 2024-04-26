import { Container, Divider } from "@chakra-ui/react";
import Head from "next/head";
import ProfileSection from "../section/ProfileSection";
import TechStackSection from "../section/TechStackSection";
import styles from "../styles/Home.module.css";
import useSWR from "swr";
import MediumSection from "../section/MediumSection";
import moment from "moment/moment";
import getMediumArticles from "../constant/getApiPosts";

export default function Home({ articles }) {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/spotify", fetcher);

  return (
    <div className={styles.container}>
      <Head>
        <title>Michael | Home</title>
        <meta
          property="og:title"
          content="Michael Lovo | Backend Developer JR"
        ></meta>
        <meta
          name="description"
          content="Michael Lovo | Backend Developer JR"
        />
        <link rel="icon" href="/profile_picture.png" />
      </Head>

      <main>
        <Container maxW="container.lg" mt={["5", "10"]} mb={["5", "10"]}>
          <ProfileSection song={data} />
          <Divider my={7} />
          <TechStackSection />
          <Divider my={7} />
          <MediumSection articles={articles} />
        </Container>
      </main>
    </div>
  );
}

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
