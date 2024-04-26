import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

import { Box } from "@chakra-ui/react";

function Layout({ children }) {
  return (
    <>
      <NavBar />
      <Box flex="1">{children}</Box>
      <Footer />
    </>
  );
}

export default Layout;
