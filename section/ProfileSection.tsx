import {
  SlideFade,
  Box,
  Heading,
  Avatar,
  Link,
  Flex,
  LightMode,
  ButtonGroup,
  Button,
  useColorModeValue
} from '@chakra-ui/react'

import { resume } from '../constant'
import SocialButton from '../components/SocialButton'
import { BiPhoneCall } from 'react-icons/bi'
// import SpotifySection from "./SpotifySection";
import Paragraph from '@/components/Paragraph'
import NextLink from 'next/link'
import { useTranslation } from 'next-i18next'
const ProfileSection = () => {
  const { t } = useTranslation('common')

  return (
    <SlideFade in offsetX={80}>
      <Box>
        <Flex alignItems="center" justifyContent="space-between">
          <Heading
            as="h1"
            fontSize={{ base: '28px', md: '40px', lg: '48px' }}
            mb={3}
          >
            {t('profile.header')} <span className="waving-hand">👋</span>
          </Heading>
          <Flex alignItems={'flex-end'}>
            <Avatar
              name="Teo Michael Lovo"
              src="/profile_picture.jpg"
              mb={5}
              size="lg"
            />
          </Flex>
        </Flex>
        <Paragraph fontSize="2xl" lineHeight={1.6}>
          {t('profile.paragraph1')}
        </Paragraph>
        <Paragraph fontSize="2xl" lineHeight={1.6}>
          {t('profile.paragraph2')}{' '}
          <Box
            as="span"
            color={useColorModeValue('blue.500', 'blue.400')}
            _hover={{
              cursor: 'default'
            }}
            fontWeight="500"
          >
            Typescript ,
          </Box>{' '}
          {'\n'}
          {t('profile.paragraphRest')}{' '}
        </Paragraph>

        <Box mt={5}>
          <LightMode>
            <ButtonGroup>
              <SocialButton {...resume} />
              <Link
                as={NextLink}
                href={'/contact'}
                style={{ textDecoration: 'none' }}
              >
                <Button
                  colorScheme="blue"
                  size="sm"
                  margin={'5px'}
                  leftIcon={<BiPhoneCall color="white" />}
                >
                  {t('contactMe')}
                </Button>
              </Link>
            </ButtonGroup>
          </LightMode>
        </Box>
      </Box>
    </SlideFade>
  )
}

export default ProfileSection
