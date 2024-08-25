import React, { FC, PropsWithChildren } from 'react'
import { Text, TextProps, useColorModeValue } from '@chakra-ui/react'

const Paragraph: FC<PropsWithChildren<TextProps>> = ({
  children,

  ...props
}) => {
  const textColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <Text color={textColor} {...props}>
      {children}
    </Text>
  )
}

export default Paragraph
