import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import Img from "gatsby-image"
import Footer from "../components/Footer"

const VideoStyles = styled.div`
  .mobileHead {
    display: none;
  }
  .deskHead {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--blue);
    background: linear-gradient(to right, #9bf6ff, var(--blue));
    height: 240px;
    overflow: hidden;
  }
  .headerImg1 {
    margin-left: -200px;
    margin-top: -100px;
  }
  .headerImg2 {
    margin-right: -50px;
  }
  h2 {
    color: #ffe2cc;
    color: #dc8f58;
    font-size: 4rem;
    font-size: clamp(3.5rem, 5vw, 6rem);
    font-weight: 400;
    min-width: 230px;
  }
  .textBox {
    max-width: 600px;
  }
  @media (max-width: 525px) {
    .deskHead {
      display: none;
    }

    .mobileHead {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100px;
      width: 100%;
      background-color: var(--blue);
    }
  }
`

export default function videos({ data }) {
  const videos = data.sanityVideos
  const images = data.headerImgs.nodes
  console.log(images)

  return (
    <Layout>
      <Helmet>
        <title>Videos | Yoga With Marianne</title>
      </Helmet>
      <VideoStyles>
        <div className="mobileHead">
          <h2>Video Classes</h2>
        </div>
        <div className="deskHead">
          <Img fixed={images[1].image.fixed} className="headerImg1" />
          <div className="textBox">
            <h2>Video Classes</h2>
          </div>

          <Img fixed={images[0].image.fixed} className="headerImg2" />
        </div>
        {/* need to sanitize this */}
        <div dangerouslySetInnerHTML={{ __html: videos.href }} />
        `youtube: https://www.youtube.com/watch?v=2Xc9gXyf2G4`
      </VideoStyles>
      <Footer />
    </Layout>
  )
}
export const query = graphql`
  query VideoQuery {
    sanityVideos {
      description
      id
      name
      href
    }
    headerImgs: allFile(filter: { relativeDirectory: { eq: "videos" } }) {
      nodes {
        image: childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`
