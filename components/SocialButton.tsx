import React, { FC } from 'react'
import { Link, Button } from '@chakra-ui/react'
import { IconType } from 'react-icons'
import NextLink from 'next/link'

interface SocialButtonProps {
  name: string
  url: string
  icon: IconType
}
const SocialButton: FC<SocialButtonProps> = ({ name, url, icon: Icon }) => {
  return (
    <Link
      as={NextLink}
      href={url}
      isExternal
      style={{ textDecoration: 'none' }}
    >
      <Button colorScheme="blue" size="sm" margin={'5px'} leftIcon={<Icon />}>
        {name}
      </Button>
    </Link>
  )
}

export default SocialButton
