import React from 'react'
import {
  LinkBox,
  IconButton,
  Text,
  useColorModeValue,
  Flex,
  LinkOverlay
} from '@chakra-ui/react'
import { IconType } from 'react-icons'
import NextLink from 'next/link'

interface StackCardProps {
  name: string
  url?: string
  color: string
  icon: IconType
}

const StackCard = ({ name, url = '', color, icon: Icon }: StackCardProps) => {
  const isExternal = url.startsWith('http') || url.startsWith('mailto') // Detecta si el enlace es externo

  return (
    <LinkBox
      as="article"
      w="100%"
      p={4}
      borderColor={useColorModeValue('gray.300', 'gray.700')}
      borderRadius={5}
      borderWidth="1px"
      transition=".5s"
      cursor="pointer"
      display="flex"
      role="group"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <IconButton
          aria-label={name}
          mr={3}
          bg={color}
          color="white"
          icon={<Icon />}
        />
        {isExternal ? (
          <NextLink href={url} passHref>
            <Text as="a" size="sm" _hover={{ color: color }}>
              {name}
            </Text>
          </NextLink>
        ) : (
          <LinkOverlay as={NextLink} href={url} passHref>
            <Text size="sm" _hover={{ color: color }}>
              {name}
            </Text>
          </LinkOverlay>
        )}
      </Flex>
    </LinkBox>
  )
}

export default StackCard
