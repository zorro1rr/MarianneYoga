import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const IndexStyles = styled.div`
  text-align: center;
`
const HeroDiv = styled.div`
  height: 587px;
  background: var(--grey);
`

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <HeroDiv />
      <Layout>
        <IndexStyles>
          <h2>This is the home page</h2>
        </IndexStyles>
      </Layout>
    </>
  )
}

export default IndexPage
