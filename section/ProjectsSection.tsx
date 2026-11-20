import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { FiArrowRight } from 'react-icons/fi'

import Section from '@/components/Section'
import { links } from '@/constant'

interface Project {
  title: string
  metric?: string
  body: string
  stack: string
}

const ProjectsSection = () => {
  const { t } = useTranslation('common')
  // returnObjects no tipa el resultado; la forma la define common.json
  const projects = t('projects.items', { returnObjects: true }) as Project[]

  return (
    <Section
      id="projects"
      title={t('projects.title')}
      intro={t('projects.intro')}
    >
      <Flex direction="column" gap="14px">
        {projects.map(project => (
          <Box as="article" key={project.title} layerStyle="card" p={6}>
            <Flex wrap="wrap" justify="space-between" align="baseline" gap={2}>
              <Heading
                as="h3"
                fontFamily="body"
                fontSize="19px"
                fontWeight={600}
              >
                {project.title}
              </Heading>
              {project.metric && (
                <Text as="span" textStyle="label" color="lilac">
                  {project.metric}
                </Text>
              )}
            </Flex>
            <Text color="mist" mt={2}>
              {project.body}
            </Text>
            <Text textStyle="label" fontWeight={400} color="faint" mt="14px">
              {project.stack}
            </Text>
          </Box>
        ))}
      </Flex>
      <Link
        href={links.github}
        isExternal
        display="inline-flex"
        alignItems="center"
        gap="6px"
        mt="18px"
        minH="44px"
        fontSize="15px"
        fontWeight={500}
      >
        {t('projects.more')} <FiArrowRight aria-hidden />
      </Link>
    </Section>
  )
}

export default ProjectsSection
