import React, { FC, PropsWithChildren } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Box } from '@chakra-ui/react'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <NavBar />
      <Box flex="1">{children}</Box>
      <Footer />
    </>
  )
}

export default Layout
