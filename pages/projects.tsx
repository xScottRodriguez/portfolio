import React from 'react'
import { Container } from '@chakra-ui/react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import GithubSection from '../section/GithubSection'
import getGithubRepos from '../constant/getGithubRepos'
import { ArticleList, GitRepo } from 'interfaces'
import { GetStaticProps } from 'next'

const Projects = ({
  repos,
  articles
}: {
  repos: GitRepo[]
  articles: ArticleList
}) => {
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
        <Container
          as={'section'}
          maxW="container.lg"
          mt={['5', '10']}
          mb={['5', '10']}
        >
          <GithubSection repos={repos} />
        </Container>
      </main>
    </div>
  )
}

export default Projects

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const repos = await getGithubRepos({
    username: process.env.GITHUB_USERNAME as string
  })
  const articles = [] as ArticleList

  return {
    props: {
      repos: repos || null,
      articles: articles || null,
      ...(await serverSideTranslations(locale as string))
    }
  }
}
