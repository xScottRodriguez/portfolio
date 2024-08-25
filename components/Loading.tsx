import { Box, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import React from 'react'

export const Loading = () => {
  return (
    <Box padding="6" boxShadow="lg" bg="white">
      <SkeletonText my="4" noOfLines={2} spacing={4} skeletonHeight={3} />
      <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
    </Box>
  )
}
