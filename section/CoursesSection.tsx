import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { FiAward, FiExternalLink } from 'react-icons/fi'

import Section from '@/components/Section'

interface Course {
  title: string
  meta: string
  file: string
}

const CoursesSection = () => {
  const { t } = useTranslation('common')
  // returnObjects no tipa el resultado; la forma la define common.json
  const courses = t('courses.items', { returnObjects: true }) as Course[]

  return (
    <Section id="courses" title={t('courses.title')} intro={t('courses.intro')}>
      <Flex direction="column" gap="14px">
        {courses.map(course => (
          <Flex
            as="article"
            key={course.file}
            layerStyle="card"
            py={5}
            px={6}
            wrap="wrap"
            align="center"
            gap="18px"
          >
            <Flex
              aria-hidden
              flexShrink={0}
              w="52px"
              h="52px"
              borderRadius="14px"
              bg="#2A1F4A"
              align="center"
              justify="center"
              color="accent"
              fontSize="26px"
            >
              <FiAward />
            </Flex>
            <Box flex="1 1 260px" minW={0}>
              <Heading
                as="h3"
                fontFamily="body"
                fontSize="18px"
                fontWeight={600}
              >
                {course.title}
              </Heading>
              <Text mt="2px" fontSize="15px" color="mist">
                {course.meta}
              </Text>
            </Box>
            <Link
              href={course.file}
              isExternal
              layerStyle="button"
              bg="transparent"
              borderColor="lineStrong"
            >
              {t('courses.view')} <FiExternalLink aria-hidden />
            </Link>
          </Flex>
        ))}
      </Flex>
    </Section>
  )
}

export default CoursesSection
