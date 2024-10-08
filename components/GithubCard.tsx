import React from 'react'
import {
  Box,
  useColorModeValue,
  VStack,
  Text,
  HStack,
  Tag,
  Icon,
  Flex,
  Tooltip,
  LinkBox,
  LinkOverlay
} from '@chakra-ui/react'
import { MotionBox } from '../utils/motion'
import { FiGithub } from 'react-icons/fi'
import { BiStar, BiGitRepoForked } from 'react-icons/bi'
import { GitRepo } from '@/interfaces'

const GithubCard = ({
  name,
  description,
  language,
  url,
  stargazers_count,
  forks_count
}: GitRepo) => {
  return (
    <MotionBox whileHover={{ y: -5 }}>
      <LinkBox
        as="article"
        inlineSize={['100%', '100%', '100%', '100%']}
        py={2}
        px={[2, 4]}
        mt={2}
        rounded="xl"
        borderWidth="1px"
        bg={useColorModeValue('white', 'gray.800')}
        borderColor={useColorModeValue('gray.300', 'gray.700')}
        _hover={{ borderColor: 'blue.500' }}
        maxWidth="md" // Added maxWidth
      >
        <LinkOverlay href={url} isExternal>
          <VStack overflow="hidden" align="start" spacing={1}>
            <VStack spacing={1} align="start" w="100%">
              <Flex justifyContent="space-between" width="100%">
                <Tooltip hasArrow label={url} placement="top">
                  <HStack cursor="pointer">
                    <Icon as={FiGithub} boxSize="0.9em" mt="1px" />
                    <Text
                      fontSize="sm"
                      noOfLines={1}
                      fontWeight="600"
                      align="left"
                      color="blue.400"
                    >
                      {name}
                    </Text>
                  </HStack>
                </Tooltip>
                <HStack spacing={2}>
                  {forks_count && (
                    <Box _hover={{ color: 'blue.500' }}>
                      <Icon as={BiGitRepoForked} boxSize="0.9em" mt="1px" />
                      <Box as="span" ml="1" fontSize="sm">
                        {forks_count}
                      </Box>
                    </Box>
                  )}
                  <Box _hover={{ color: 'blue.500' }}>
                    <Icon as={BiStar} boxSize="0.9em" mt="1px" />
                    <Box as="span" ml="1" fontSize="sm">
                      {stargazers_count}
                    </Box>
                  </Box>
                </HStack>
              </Flex>
              {language && (
                <Flex justifyContent="space-between" width="100%">
                  <Box>
                    <HStack spacing="1">
                      <Tag size="sm" colorScheme="blue">
                        <Text fontSize={['0.55rem', 'inherit', 'inherit']}>
                          {language}
                        </Text>
                      </Tag>
                    </HStack>
                  </Box>
                </Flex>
              )}
            </VStack>
            <Box>
              <Text fontSize="sm" noOfLines={2} textAlign="left">
                {description}
              </Text>
            </Box>
          </VStack>
        </LinkOverlay>
      </LinkBox>
    </MotionBox>
  )
}

export default GithubCard
