import { Box, Heading, ListItem, OrderedList, Text } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'

import Section from '@/components/Section'

interface Step {
  period: string
  title: string
  body: string
}

const TimelineSection = () => {
  const { t } = useTranslation('common')
  // returnObjects no tipa el resultado; la forma la define common.json
  const steps = t('timeline.items', { returnObjects: true }) as Step[]

  return (
    <Section
      id="timeline"
      title={t('timeline.title')}
      intro={t('timeline.intro')}
    >
      <OrderedList
        styleType="none"
        m={0}
        pl={6}
        borderLeft="2px solid"
        borderColor="line"
        display="flex"
        flexDirection="column"
        gap={9}
      >
        {steps.map((step, i) => (
          <ListItem key={step.title} position="relative">
            <Box
              as="span"
              aria-hidden
              position="absolute"
              left="-32px"
              top="6px"
              w="14px"
              h="14px"
              borderRadius="full"
              bg={i === 0 ? 'accent' : 'lineStrong'}
              boxShadow="0 0 0 4px #0E0A1A"
            />
            <Text textStyle="label" color="mist">
              {step.period}
            </Text>
            <Heading
              as="h3"
              fontFamily="body"
              fontSize="19px"
              fontWeight={600}
              mt={1}
            >
              {step.title}
            </Heading>
            <Text color="mist" mt="6px">
              {step.body}
            </Text>
          </ListItem>
        ))}
      </OrderedList>
    </Section>
  )
}

export default TimelineSection
