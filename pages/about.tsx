import {
  Container,
  SlideFade,
  Heading,
  Flex,
  Stack,
  Box,
  VStack,
  useColorMode
} from '@chakra-ui/react'
import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import { FaGraduationCap } from 'react-icons/fa'
import { BsFillBriefcaseFill } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'
import { MotionBox } from '@/utils/motion'
import { companies, educations } from '../constant'
import CompanyCard from '@/components/CompanyCard'
import { UnderlinedText } from '../components/UnderlinedText'

import Paragraph from '@/components/Paragraph'
import { useTranslation } from 'next-i18next'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Suspense } from 'react'
import { Loading } from '@/components/Loading'

function About() {
  const { colorMode } = useColorMode()
  const { t } = useTranslation('common')

  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.container}>
        <Head>
          <title>About Me</title>
          <meta
            name="description"
            content="Michael Lovo | Backend Web Developer"
          />
          <link rel="icon" href="/profile_picture.jpg" />
        </Head>

        <main>
          <Container maxW="container.lg" mt={['5', '10']} mb={['5', '10']}>
            <SlideFade in offsetX={80}>
              <Box>
                <UnderlinedText>
                  <Flex alignItems="center">
                    <Stack pr={3}>
                      <AiFillStar size={'30px'} />
                    </Stack>
                    <Heading>{t('about.title')}</Heading>
                  </Flex>
                </UnderlinedText>

                <Paragraph fontSize="lg" lineHeight={1.6} my={5}>
                  {t('about.description')}
                </Paragraph>

                <Paragraph fontSize="lg" lineHeight={1.6} my={5}>
                  {''}
                </Paragraph>

                <Flex alignItems="center" my={10}>
                  <UnderlinedText>
                    <Flex alignItems="center">
                      <Stack pr={3}>
                        <BsFillBriefcaseFill size={'30px'} />
                      </Stack>
                      <Heading>{t('about.career')}</Heading>
                    </Flex>
                  </UnderlinedText>
                </Flex>

                <VStack
                  spacing={4}
                  marginBottom={6}
                  align="left"
                  mx={[0, 0, 6]}
                  mt={5}
                >
                  {companies.map((company, index) => (
                    <MotionBox whileHover={{ y: -5 }} key={company.id}>
                      <CompanyCard
                        alt="company"
                        id={company.id}
                        title={company.title}
                        role={company.role}
                        skills={company.skills}
                        period={company.period}
                        logo={company.logo}
                        url={company.url}
                        colorMode={colorMode}
                      />
                    </MotionBox>
                  ))}
                </VStack>

                <Flex alignItems="center" my={10}>
                  <UnderlinedText>
                    <Flex alignItems="center">
                      <Stack pr={3}>
                        <FaGraduationCap size={'30px'} />
                      </Stack>
                      <Heading>{t('about.education')}</Heading>
                    </Flex>
                  </UnderlinedText>
                </Flex>

                <VStack
                  spacing={4}
                  marginBottom={6}
                  align="left"
                  mx={[0, 0, 6]}
                  mt={5}
                >
                  {educations.map((education, index) => (
                    <MotionBox whileHover={{ y: -5 }} key={education.title}>
                      <CompanyCard
                        alt="education"
                        id={education.id}
                        title={education.title}
                        role={education.role}
                        skills={education.skills}
                        period={education.period}
                        logo={education.logo}
                        url={education.url}
                        colorMode={colorMode}
                      />
                    </MotionBox>
                  ))}
                </VStack>
              </Box>
            </SlideFade>
          </Container>
        </main>
      </div>
    </Suspense>
  )
}

export default About

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string))
    }
  }
}
