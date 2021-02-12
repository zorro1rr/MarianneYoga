import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Footer from "../components/Footer"
import BackgroundImage from "gatsby-background-image"

const HeaderDiv = styled.header`
  .hero {
    min-height: 587px;
    width: 100%;
  }
  box-shadow: 0 2px 3px #ccc;
`

const TopContent = styled.div`
  .Bg1 {
    max-width: 1240px;
    height: 650px;
    margin: 0 auto;
    height: 625px;
    display: grid;
    grid-template-columns: 40% 1fr;
    grid-template-rows: 49% 10% 1fr;
    grid-gap: 20px;
    box-shadow: 0 2px 3px #ccc;
  }

  .textContent {
    justify-self: center;
    max-width: 350px;
    margin-left: 20px;
  }
  .img1 {
    max-width: 648px;
    height: 438px;
    box-shadow: 0 2px 3px #ccc;
  }
  h2 {
    color: #553585;
    font-size: 34px;
  }
  .p2 {
    grid-row-start: 2;
    justify-self: center;
    max-width: 350px;
    margin-left: 20px;
  }
  @media (max-width: 790px) {
    .p2 {
      grid-column-start: 2;
      grid-row-start: 3;
      margin-top: 40px;
    }
  }
  @media (max-width: 440px) {
    h2 {
      font-size: 25px;
    }
    p {
      font-size: 17px;
    }
  }
`

const BottomContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;

  .Bg2 {
    display: flex;
    width: 980px;
    margin: 0 auto;
    height: 450px;
    overflow: hidden;
    align-items: center;
    box-shadow: 0 2px 3px #ccc;
  }
  .videoWrapper {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin: auto;
    width: 560px;
    height: 100%;
    padding: 20px;
  }

  .videoDiv {
    border: solid 7px var(--offWhite);
    box-shadow: 0 2px 3px #ccc;
    position: relative;
    overflow: hidden;
    width: 100%;
    margin: auto;
    padding-top: 56.25%;
  }
  .responsive-iframe {
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
  .videoText {
    text-align: center;
    padding: 20px;
    margin: 0 auto;
    align-self: start;
  }

  h3 {
    color: #553585;
    font-size: 30px;
    border-bottom: 2px solid #553585;
  }
  h4 {
    color: #553585;
    font-size: 23px;
  }
  p {
  }

  @media (max-width: 500px) {
    .Bg2 {
      height: 300px;
      /* flex-direction: column; */
    }

    h3 {
      font-size: 25px;
    }
    h4 {
      font-size: 16px;
    }
    p {
      font-size: 16px;
    }
  }
`

const IndexPage = ({ data }) => {
  const video = data.sanityVideos
  const seo = data.allSanitySeo.nodes[0]
  return (
    <>
      <SEO seo={seo} />
      <HeaderDiv>
        <Img classname="hero" fluid={data.headerImg.image.fluid}></Img>
      </HeaderDiv>
      <Layout>
        <TopContent>
          <BackgroundImage className="Bg1" fluid={data.Bg1.image.fluid}>
            <div className="textContent">
              <h2>
                It's not about being good at something...
                <br />
                It's about being good to yourself!
              </h2>
              <p>
                Yoga, meditation and fitness are the tools we have been given to
                build and maintain our earthly bodies. Our physical and mental
                well-being are intrinsically connected.
              </p>
            </div>
            <p className="p2">
              Over the last 20 plus years I have studied these mediums of health
              and well-being and I would like to invite you to my practice!
            </p>

            <Img className="img1" fluid={data.img1.image.fluid} />
          </BackgroundImage>
        </TopContent>

        <BottomContent>
          <BackgroundImage className="Bg2" fluid={data.Bg2.image.fluid}>
            <div className="videoWrapper">
              <div className="videoDiv">
                <iframe
                  className="responsive-iframe"
                  src={video.href}
                  height="315"
                  width="560"
                  frameBorder="0"
                  title={video.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="videoText">
              <h3>Featured Video</h3>
              <h4>{video.name}</h4>
              <p>{video.description}</p>
            </div>
          </BackgroundImage>
        </BottomContent>
        <Footer></Footer>
      </Layout>
    </>
  )
}

export default IndexPage
export const query = graphql`
  query {
    sanityVideos {
      description
      id
      name
      href
    }
    headerImg: file(relativePath: { eq: "home/Yogi-16.jpg" }) {
      image: childImageSharp {
        fluid(maxWidth: 1620, maxHeight: 587, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img1: file(relativePath: { eq: "home/Yogi-35.jpg" }) {
      image: childImageSharp {
        fluid(maxWidth: 650, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Bg1: file(relativePath: { eq: "home/Bg1.png" }) {
      image: childImageSharp {
        fluid(maxWidth: 1240, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Bg2: file(relativePath: { eq: "home/Bg2.png" }) {
      image: childImageSharp {
        fluid(maxWidth: 980, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allSanitySeo(filter: { page: { eq: "index" } }) {
      nodes {
        title
        description
        ogUrl
        ogType
        ogSiteName
        ogTitle
        ogDescription
        ogImageUrl {
          asset {
            url
          }
        }
        ogImageType
        ogImageWidth
        ogImageHeight
        twitterTitle
        twitterSite
        twitterCreator
        twitterImage {
          asset {
            url
          }
        }
      }
    }
  }
`
