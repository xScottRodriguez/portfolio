import React from 'react';
import {
  LinkBox,
  IconButton,
  LinkOverlay,
  Text,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';


const StackCard = ({ stack }) => {
  return (
    <LinkBox
      as='article'
      w='100%'
      p={4}
      borderColor={useColorModeValue('gray.300', 'gray.700')}
      borderRadius={5}
      borderWidth='1px'
      transition='.5s'
      cursor='pointer'
      display='flex'
      role='group'
    >
      <Flex alignItems='center' justifyContent='space-between'>
        <IconButton
          as='a'
          aria-label={stack?.name}
          mr={3}
          bg={stack.color}
          color='white'
          icon={stack?.icon}
        />
        <LinkOverlay href={stack?.url} rel='noopener' isExternal>
          <Flex>
            <Text size='sm' _hover={{ color: stack?.color }}>
              {stack?.name}
            </Text>
          </Flex>
        </LinkOverlay>
      </Flex>
    </LinkBox>
  );
};

export default StackCard;
