import { Flex, Image, Stack, Heading } from '@chakra-ui/react'
import { FC } from 'react'

interface CardHeaderProps {
  title: string
  role: string
  logo: string
  alt: string
}

const CardHeader: FC<CardHeaderProps> = ({ title, role, logo, alt }) => {
  return (
    <Flex>
      <Image
        rounded="full"
        w={16}
        h={16}
        objectFit="cover"
        src={logo}
        alt={alt}
      />
      <Stack spacing={2} pl={3} align="flex-start">
        <Heading fontSize="xl">{title}</Heading>
        <Heading fontSize="sm">{role}</Heading>
      </Stack>
    </Flex>
  )
}

export default CardHeader
