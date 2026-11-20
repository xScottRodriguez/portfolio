import { Box, Flex, Heading, Link, Text, keyframes } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi'

import { links } from '@/constant'

const PHOTO = 120

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: none; }
`
const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.55); }
  70%, 100% { box-shadow: 0 0 0 7px rgba(52, 211, 153, 0); }
`

// Única animación de la página: el intro entra en secuencia al cargar
const entrance = Object.fromEntries(
  [1, 2, 3, 4, 5].map(n => [
    `& > :nth-child(${n})`,
    { animation: `${fadeUp} 600ms ease-out ${(n - 1) * 90}ms both` }
  ])
)

const IntroSection = () => {
  const { t } = useTranslation('common')

  return (
    <Flex
      as="section"
      id="intro"
      direction="column"
      gap={6}
      pt={{ base: 6, sm: 14 }}
      pb="72px"
      sx={entrance}
    >
      <Flex wrap="wrap" align="center" gap={5}>
        <Box
          position="relative"
          isolation="isolate"
          flexShrink={0}
          _before={{
            content: '""',
            position: 'absolute',
            inset: '-36px',
            zIndex: -1,
            borderRadius: 'full',
            bg: 'radial-gradient(circle, rgba(124, 58, 237, 0.45), transparent 68%)',
            filter: 'blur(8px)'
          }}
        >
          <Box
            borderRadius="full"
            overflow="hidden"
            border="3px solid"
            borderColor="brand.600"
            boxShadow="0 0 0 6px #1E1733"
            w={`${PHOTO}px`}
            h={`${PHOTO}px`}
          >
            <Image
              src={links.avatar}
              alt={t('intro.photoAlt')}
              width={PHOTO}
              height={PHOTO}
              priority
              // shortcut: sin sharp se sirve el JPEG completo (81KB); agregar sharp si crecen las imágenes
              unoptimized
              // la foto es vertical: recorta el círculo sobre la cara
              style={{
                objectFit: 'cover',
                objectPosition: '50% 30%',
                height: '100%'
              }}
            />
          </Box>
        </Box>
        <Box>
          <Text textStyle="label" fontSize="14px" color="mist">
            {t('intro.location')}
          </Text>
          <Text
            mt={1}
            display="inline-flex"
            alignItems="center"
            gap={2}
            fontSize="15px"
            color="lilac"
          >
            <Box
              as="span"
              aria-hidden
              w={2}
              h={2}
              borderRadius="full"
              bg="#34D399"
              animation={`${pulse} 2.4s ease-out infinite`}
            />
            {t('intro.now')}
          </Text>
        </Box>
      </Flex>

      <Heading
        as="h1"
        fontSize="clamp(2.4rem, 6vw, 3.5rem)"
        lineHeight={1.1}
        letterSpacing="-0.02em"
      >
        {t('intro.greeting')}
        <br />
        <Box as="span" color="accent">
          {t('intro.tagline')}
        </Box>
      </Heading>
      <Text fontSize="19px" color="#CFC8E3">
        {t('intro.lead')}
      </Text>
      <Text color="mist">{t('intro.body')}</Text>

      <Flex wrap="wrap" gap="10px" mt={1}>
        <Link href={links.github} isExternal layerStyle="button">
          <FiGithub aria-hidden /> GitHub
        </Link>
        <Link href={links.linkedin} isExternal layerStyle="button">
          <FiLinkedin aria-hidden /> LinkedIn
        </Link>
        <Link href={links.cv} isExternal layerStyle="primary">
          <FiDownload aria-hidden /> {t('intro.cv')}
        </Link>
      </Flex>
    </Flex>
  )
}

export default IntroSection
