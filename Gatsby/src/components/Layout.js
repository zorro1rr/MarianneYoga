/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import styled from "styled-components"
import "normalize.css"
import GlobalStyles from "../styles/GlobalStyles"

const SiteBorderStyles = styled.div`
  max-width: 1240px;
  margin: 0 auto;
`
const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <SiteBorderStyles>
        <Header siteTitle={`Yoga With Marianne`} />
        <main>{children}</main>
      </SiteBorderStyles>
      <Footer />
    </>
  )
}

export default Layout
