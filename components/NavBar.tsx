/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import {
  Text,
  Container,
  Flex,
  IconButton,
  HStack,
  Box,
  Button,
  Stack,
  Link as CharkaLink,
  useColorModeValue,
  Avatar,
  useDisclosure
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { menuLinks } from '../constant'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import { SwitchLanguage } from './SwitchLanguage'
import { useTranslation } from 'next-i18next'

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { t } = useTranslation('common')
  let router = useRouter()
  let { asPath } = router

  const navItem = (
    <>
      {menuLinks.map(link => (
        // <NextLink href={link.route} key={link.name} passHref>
        <CharkaLink
          as={NextLink}
          href={link.route}
          key={link.name}
          passHref
          px={2}
          py={1}
          rounded={'md'}
          _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.900')
          }}
          color={
            link.route === asPath
              ? useColorModeValue('gray.500', 'gray.300')
              : useColorModeValue('gray.600', 'gray.400')
          }
          onClick={isOpen ? onClose : onOpen}
        >
          {t(`navigator.${link.name}`)}
        </CharkaLink>
        // </NextLink>
      ))}
    </>
  )

  return (
    <>
      <Box bg={useColorModeValue('white', 'gray.700')} px={4} boxShadow={'sm'}>
        <Flex
          h={16}
          alignItems={'center'}
          justifyContent={'space-between'}
          w={['95%', '95%', '95%']}
          maxW={'container.lg'}
          mx="auto"
        >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={['inherit', 'inherit', 'none']}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Avatar
              as={NextLink}
              size="sm"
              href={'/'}
              src="/profile_picture.jpg"
              _hover={{ borderColor: 'blue.500' }}
            />
            <HStack as="nav" spacing="4" display={{ base: 'none', md: 'flex' }}>
              {navItem}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <SwitchLanguage />
            <ColorModeSwitcher justifySelf="flex-end" />
          </Flex>
        </Flex>

        {isOpen && (
          <Box
            pb={4}
            w={['100%', '100%', '80%']}
            maxW={'container.lg'}
            display={['inherit', 'inherit', 'none']}
          >
            <Stack as={'nav'} spacing={4}>
              {navItem}
            </Stack>
          </Box>
        )}
      </Box>
    </>
  )
}

export default NavBar
