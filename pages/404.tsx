import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'

const notFound = () => {
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
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          bgGradient="linear(to-r, blue.400, blue.600)"
          backgroundClip="text"
        >
          404
        </Heading>
        <Text fontSize="18px" mt={3} mb={2}>
          Page Not Found
        </Text>
        <Text color={'gray.500'} mb={6}>
          The page you&apos;re looking for does not seem to exist
        </Text>

        <Button
          colorScheme="blue"
          bgGradient="linear(to-r, blue.400, blue.500, blue.600)"
          color="white"
          variant="solid"
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
