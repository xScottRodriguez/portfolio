import { FC } from 'react'
import { Heading, SlideFade, Box, SimpleGrid, Text } from '@chakra-ui/react'
import GithubCard from '@/components/GithubCard'
import Paragraph from '@/components/Paragraph'
import { GitRepo } from 'interfaces'
import { useTranslation } from 'next-i18next'

const GithubSection: FC<{ repos: GitRepo[] }> = ({ repos }) => {
  const { t } = useTranslation('common')

  return (
    <SlideFade in offsetY={80} delay={0.2}>
      <Heading
        as="h1"
        fontSize={{ base: '24px', md: '30px', lg: '36px' }}
        mb={3}
      >
        Github
      </Heading>
      <Paragraph as="article">
        <Text>{t('github.title')}</Text>
        <Text>{t('github.description')} </Text>
      </Paragraph>
      <Box my={5} as="article">
        <SimpleGrid as="div" columns={{ base: 1, md: 2 }} spacing={4} mt={4}>
          {repos &&
            repos.map(repo => (
              <GithubCard
                {...repo}
                name={repo.name}
                description={repo.description}
                language={repo.language}
                url={repo.html_url}
                stargazers_count={repo.stargazers_count}
                forks_count={repo.forks_count}
                key={repo.name}
              />
            ))}
        </SimpleGrid>
      </Box>
    </SlideFade>
  )
}

export default GithubSection
