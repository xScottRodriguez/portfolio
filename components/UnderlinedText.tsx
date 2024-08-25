import { Box } from '@chakra-ui/react'
import { FC, PropsWithChildren } from 'react'

export const UnderlinedText: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box as="span" display="inline-block" position="relative">
      {children}
      <Box
        as="span"
        display="block"
        position="absolute"
        bg={'gray.300'}
        w={'100%'}
        h={'1px'}
        bottom={-2}
      />
    </Box>
  )
}
