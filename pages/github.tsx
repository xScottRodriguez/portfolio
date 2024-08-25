import React, { FC, Suspense } from 'react'
import { Container } from '@chakra-ui/react'
import Head from 'next/head'
import getGithubRepos from '@/constant/getGithubRepos'
import styles from '@/styles/Home.module.css'
import GithubSection from '@/section/GithubSection'
import { GitRepo } from 'interfaces'
import { GithubSkeleton } from '@/components/skeletons/GithubSkeleton'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Github: FC<{ repos: GitRepo[] }> = ({ repos }) => {
  return (
    <Suspense fallback={<GithubSkeleton />}>
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
          <Container maxW="container.lg" mt={['5', '10']} mb={['5', '10']}>
            <GithubSection repos={repos} />
          </Container>
        </main>
      </div>
    </Suspense>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const repos = await getGithubRepos({
    username: process.env.GITHUB_USERNAME as string
  })
  return {
    props: {
      repos: repos || [],
      ...(await serverSideTranslations(locale as string))
    }
  }
}

export default Github
