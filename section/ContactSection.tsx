import { Box, Heading, Link, Text } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { FiMail } from 'react-icons/fi'

import { links } from '@/constant'

const ContactSection = () => {
  const { t } = useTranslation('common')

  return (
    <Box as="section" id="contact" pb={20} scrollMarginTop={6}>
      <Box
        p={{ base: 6, sm: 8 }}
        borderRadius="20px"
        bg="#1A1230"
        border="1px solid"
        borderColor="lineStrong"
      >
        <Heading as="h2" textStyle="h2">
          {t('contact.title')}
        </Heading>
        <Text color="mist" mt="10px" mb={5}>
          {t('contact.body')}
        </Text>
        <Link
          href={`mailto:${links.email}`}
          layerStyle="primary"
          h="48px"
          px={5}
          borderRadius="12px"
          // el correo cabe en 320px solo a 15px
          fontSize={{ base: '15px', sm: '17px' }}
        >
          <FiMail aria-hidden /> {links.email}
        </Link>
      </Box>
    </Box>
  )
}

export default ContactSection
