import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

function notFound() {
  const router = useRouter()
  return (
    <Box
      textAlign="center"
      py={10}
      px={6}
      height={'80vh'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Stack>
        <Heading display="inline-block" as="h2" size="2xl" color="accent">
          404
        </Heading>
        <Text fontSize="18px" mt={3} mb={2}>
          Page Not Found
        </Text>
        <Text color="mist" mb={6}>
          The page you&apos;re looking for does not seem to exist
        </Text>

        <Button
          bg="brand.600"
          color="white"
          _hover={{ bg: 'brand.700' }}
          onClick={() => {
            router.replace('/')
          }}
        >
          Go to Home
        </Button>
      </Stack>
    </Box>
  )
}
export default notFound

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale as string)) }
})
