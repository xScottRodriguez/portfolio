import { Box, Flex, Link } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'

import { SwitchLanguage } from './SwitchLanguage'

const sections = ['timeline', 'projects', 'contact'] as const

const NavBar = () => {
  const { t } = useTranslation('common')

  return (
    <Flex
      as="header"
      maxW="760px"
      mx="auto"
      px={{ base: 4, sm: 6 }}
      py={7}
      wrap="wrap"
      align="center"
      justify="space-between"
      gap={3}
    >
      <Link
        href="/#intro"
        fontFamily="heading"
        fontWeight={700}
        fontSize="18px"
        color="ink"
      >
        mike
        <Box as="span" color="accent">
          .
        </Box>
        rodriguez
      </Link>
      <Flex
        as="nav"
        aria-label={t('nav.label')}
        wrap="wrap"
        align="center"
        gap={1}
        fontSize="15px"
      >
        {sections.map(id => (
          <Link key={id} href={`/#${id}`} p="10px" color="mist">
            {t(`nav.${id}`)}
          </Link>
        ))}
        <SwitchLanguage />
      </Flex>
    </Flex>
  )
}

export default NavBar
