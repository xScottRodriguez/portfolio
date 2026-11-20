import { Box, Heading, Text } from '@chakra-ui/react'
import { FC, PropsWithChildren } from 'react'

interface Props {
  id?: string
  title?: string
  intro?: string
}

const Section: FC<PropsWithChildren<Props>> = ({
  id,
  title,
  intro,
  children
}) => (
  <Box as="section" id={id} pb="72px" scrollMarginTop={6}>
    {title && (
      <Heading as="h2" textStyle="h2" mb={intro ? 2 : 5}>
        {title}
      </Heading>
    )}
    {intro && (
      <Text color="mist" mb={7}>
        {intro}
      </Text>
    )}
    {children}
  </Box>
)

export default Section
