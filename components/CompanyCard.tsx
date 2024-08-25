import {
  Box,
  Flex,
  Heading,
  Image,
  LinkOverlay,
  Stack,
  Tag,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { FC } from 'react'
import NextLink from 'next/link'
import { useTranslation } from 'next-i18next'

interface Props {
  title: string
  role: string
  skills: string[]
  period: string
  logo: string
  alt: string
  url: string
  colorMode: string
  id: string
}

const CompanyCard: FC<Props> = ({
  title,
  role,
  skills,
  period,
  logo,
  alt,
  url,
  colorMode,
  id
}) => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.100', 'gray.700')
  const textColor = `mode.${colorMode}.career.text`
  const subTextColor = `mode.${colorMode}.career.subtext`
  const { t } = useTranslation('common')

  return (
    <Box
      px={4}
      py={5}
      borderWidth="1px"
      rounded="xl"
      bg={bgColor}
      borderColor={borderColor}
      _hover={{ borderColor: 'blue.500' }}
      position="relative"
    >
      <LinkOverlay as={NextLink} href={url} rel="noopener" isExternal passHref>
        <Flex justifyContent="space-between">
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
              <Heading fontSize="xl" color={textColor}>
                {title}
              </Heading>
              <Heading fontSize="sm" color={subTextColor}>
                {t(`companies.${id}.${role}`)}
              </Heading>
              <Stack
                spacing={1}
                mt={3}
                alignItems="center"
                isInline
                display={['none', 'none', 'flex', 'flex']}
              >
                {skills.map(skill => (
                  <Tag size="sm" padding="0 5px" colorScheme="blue" key={skill}>
                    {skill}
                  </Tag>
                ))}
              </Stack>
            </Stack>
          </Flex>
          <Stack display={['none', 'none', 'flex', 'flex']}>
            <Text fontSize={14} color={subTextColor}>
              {t(`companies.${id}.${period}`)}
            </Text>
          </Stack>
        </Flex>
        <Stack
          spacing={1}
          mt={3}
          alignItems="center"
          display={['flex', 'flex', 'none', 'none']}
        >
          {skills.map(skill => (
            <Tag size="sm" padding="0 5px" key={skill}>
              {skill}
            </Tag>
          ))}
        </Stack>
      </LinkOverlay>
    </Box>
  )
}

export default CompanyCard
