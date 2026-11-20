import { Box, Text } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import Pills from '@/components/Pills'
import Section from '@/components/Section'
import {
  ContactSection,
  CoursesSection,
  IntroSection,
  ProjectsSection,
  StackSection,
  TimelineSection
} from '@/section'

export default function Home() {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta property="og:title" content={t('meta.title')} />
        <meta name="description" content={t('meta.description')} />
      </Head>

      <Box as="main" maxW="760px" mx="auto" px={{ base: 4, sm: 6 }}>
        <IntroSection />
        <TimelineSection />
        <ProjectsSection />
        <CoursesSection />
        <StackSection />
        <Section title={t('offCode.title')}>
          <Text color="mist" mb={5}>
            {t('offCode.body')}
          </Text>
          {/* returnObjects no tipa el resultado; la forma la define common.json */}
          <Pills
            items={t('offCode.items', { returnObjects: true }) as string[]}
          />
        </Section>
        <ContactSection />
      </Box>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string))
    }
  }
}
