import React from 'react'
import {
  Heading,
  SlideFade,
  Grid,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import StackCard from '../components/StackCard'
import { TechStack, techStacks } from '../constant'
import { useTranslation } from 'next-i18next'

const TechStackSection = () => {
  const { t } = useTranslation('common')
  return (
    <SlideFade in offsetY={80} delay={0.2}>
      <Heading
        as="h1"
        fontSize={{ base: '24px', md: '30px', lg: '36px' }}
        mb={3}
      >
        {t('techStack.title')}
      </Heading>
      <Text
        textColor={useColorModeValue('gray.600', 'gray.400')}
        fontSize={'lg'}
      >
        {t('techStack.description')}
      </Text>
      <Grid
        mt={5}
        templateColumns={[
          '1fr',
          'repeat(2,1fr)',
          'repeat(3, 1fr)',
          'repeat(4, 1fr)'
        ]}
        gap={[2, 5, 5, 5]}
      >
        {techStacks.map(({ color, icon, name }: TechStack) => (
          <StackCard color={color} icon={icon} name={name} key={name} />
        ))}
      </Grid>
    </SlideFade>
  )
}

export default TechStackSection
