import { GetStaticProps } from 'next'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Container, Divider } from '@chakra-ui/react'

import styles from '@/styles/Home.module.css'
import { ProfileSection, TechStackSection } from '@/section'

export default function Home() {
  return (
    <section className={styles.container}>
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
        <Container maxW="container.lg" mt={['5', '10']} mb={['5', '10']}>
          <ProfileSection />
          <Divider my={7} />
          <TechStackSection />
        </Container>
      </main>
    </section>
  )
}
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string))
    }
  }
}
