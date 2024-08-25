import { Skeleton, SkeletonText, Stack } from '@chakra-ui/react'
import React from 'react'

const repos = [1, 2, 3]
export const GithubSkeleton = () => {
  return (
    <Stack>
      <SkeletonText mt="4" noOfLines={3} spacing="4" skeletonHeight="2" />
      <Skeleton height="20px" />
      {repos.map(repo => (
        <Skeleton key={repo} height="20px" />
      ))}
    </Stack>
  )
}
