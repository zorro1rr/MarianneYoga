import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Footer from "../components/Footer"

const HeaderDiv = styled.header`
  height: 587px;
  .hero {
    height: 100%;
  }
`

const TopContent = styled.div`
  .topBackground {
    height: 650px;
    background: #f7efe5;
  }
  .topGrid {
    max-width: 1240px;
    height: 650px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 25% 1fr;
    grid-template-rows: 10% 2fr 1fr;
    grid-gap: 50px;
  }
  .img1 {
    grid-row-start: 1;
    grid-column-start: 2;
  }
  .img1 {
    grid-row-start: 0;
    grid-column-start: 2;
  }
  p {
    margin: 0;
  }
  .p2 {
    grid-row-start: 3;
    grid-column-start: 0;
  }
`

const BottomContent = styled.div`
  height: 600px;
`

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <>
      <SEO title="Home" />
      <HeaderDiv>
        <Img classname="hero" fixed={data.headerImg.image.fixed}></Img>
      </HeaderDiv>
      <Layout>
        <TopContent>
          <div className="topBackground">
            <div className="topGrid">
              <h2>Lorem Ipsum</h2>
              <p>
                Maecenas nisi sem, luctus quis eleifend non, molestie sit amet
                tellus. Aenean nunc mauris, feugiat hendrerit eleifend non,
                suscipit quis dui. Praesent eu lorem est. Cras dapibus turpis
                vel massa bibendum fermentum. Curabitur ut odio tempus,
                consectetur mauris vel, venenatis mauris. Pellentesque nibh
                orci, laoreet a mollis at, semper tristique felis. Donec
                pellentesque est eget laoreet fringilla. In rhoncus id ipsum
                quis congue.
              </p>
              <p className="p2">
                Pellentesque quis enim efficitur neque rhoncus bibendum at sed
                orci. Praesent non aliquet turpis. Vivamus pellentesque odio eu
                blandit pellentesque. Maecenas ac elit massa.
              </p>

              <Img className="img1" fixed={data.img1.image.fixed}></Img>
            </div>
          </div>
          <BottomContent></BottomContent>
          <Footer></Footer>
        </TopContent>
      </Layout>
    </>
  )
}

export default IndexPage
export const query = graphql`
  query {
    headerImg: file(id: { eq: "ebc63a2e-3014-59c4-a514-a32efaba28d8" }) {
      image: childImageSharp {
        fixed(width: 1620, height: 587, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    img1: file(id: { eq: "f7d9ffca-2da9-5323-baad-cb407d3655c9" }) {
      image: childImageSharp {
        fixed(width: 650, height: 450, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
