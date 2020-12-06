/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import "normalize.css"
import GlobalStyles from "../styles/GlobalStyles"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Helmet>
      </Helmet>
      <Header siteTitle={`Yoga With Marianne`}/>
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}

export default Layout
