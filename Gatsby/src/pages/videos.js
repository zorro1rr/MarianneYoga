import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import Img from "gatsby-image"
import Footer from "../components/Footer"
import SEO from "../components/seo"

const VideoStyles = styled.div`
  .mobileHead {
    display: none;
    box-shadow: 0 2px 3px #ccc;
  }
  .deskHead {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--blue);
    background: linear-gradient(to right, #9bf6ff, var(--blue));
    height: 240px;
    overflow: hidden;
    box-shadow: 0 2px 3px #ccc;
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
    text-shadow: 0 2px 3px #919191;
    font-size: 4rem;
    font-size: clamp(3.5rem, 5vw, 6rem);
    font-weight: 400;
    min-width: 230px;
  }
  .textBox {
    max-width: 600px;
  }
  .content {
    background: #f7efe5;
    max-width: 1240px;
    margin: 10px auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(580px, 1fr));
    grid-template-rows: repeat(4, 1fr);
    box-shadow: 0 2px 3px #ccc;
  }
  .videoContainer {
    flex-direction: column;
    font-family: "Gills Sans", sans-serif;
    text-align: center;
    background: var(--offWhite);
    box-shadow: 0 2px 3px #ccc;
    border: 1px solid #eee;

    display: flex;
    width: 580px;
    margin: 20px auto;
    height: 468px;
    overflow: hidden;
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
  h3 {
    color: var(--black);
    border-bottom: 1px solid #eee;
  }
  p {
    padding: 10px 5px;
    margin: auto;
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
  console.log(data)
  const videos = data.allSanityVideos.nodes
  const seo = data.allSanitySeo.nodes[0]

  return (
    <Layout>
      <SEO seo={seo} />
      <Helmet>
        <title>Videos | Yoga With Marianne</title>
      </Helmet>
      <VideoStyles>
        <div className="mobileHead">
          <h2>Video Classes</h2>
        </div>
        <div className="deskHead">
          <Img
            fixed={data.lotusBig.childImageSharp.fixed}
            className="headerImg1"
          />
          <div className="textBox">
            <h2>Video Classes</h2>
          </div>
          <Img
            fixed={data.lotusRight.childImageSharp.fixed}
            className="headerImg2"
          />
        </div>
        <div className="content">
          {videos.map(video => (
            <div className="videoContainer" key={video.id}>
              <h3>{video.name}</h3>
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
              <p>{video.description}</p>
            </div>
          ))}
        </div>
      </VideoStyles>
      <Footer />
    </Layout>
  )
}
export const query = graphql`
  query VideoQuery {
    allSanityVideos {
      nodes {
        description
        href
        name
        id
      }
    }
    lotusRight: file(id: { eq: "6749bdea-b9cd-5662-8d89-5732dd8ec0d6" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    lotusBig: file(id: { eq: "8242c1dc-0eab-56bc-a40f-f90bda3f9870" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }

    allSanitySeo(filter: { page: { eq: "videos" } }) {
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
