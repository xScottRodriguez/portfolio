import { Flex, List, ListItem } from '@chakra-ui/react'
import { FC } from 'react'

interface Props {
  items: string[]
}

const Pills: FC<Props> = ({ items }) => (
  <Flex as={List} wrap="wrap" gap={2}>
    {items.map(item => (
      <ListItem
        key={item}
        py="6px"
        px={3}
        borderRadius="full"
        bg="surface"
        border="1px solid"
        borderColor="line"
        fontSize="14px"
        color="#E4DEF7"
      >
        {item}
      </ListItem>
    ))}
  </Flex>
)

export default Pills
