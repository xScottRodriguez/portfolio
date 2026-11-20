import { Box, Text } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'

const Footer = () => {
  const { t } = useTranslation('common')

  return (
    <Box
      as="footer"
      maxW="760px"
      mx="auto"
      px={{ base: 4, sm: 6 }}
      pt={6}
      pb={10}
      borderTop="1px solid"
      borderColor="line"
      color="faint"
      fontSize="14px"
    >
      <Text>{t('footer', { year: new Date().getFullYear() })}</Text>
    </Box>
  )
}

export default Footer
