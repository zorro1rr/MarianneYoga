import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Footer from "../components/Footer"
import SEO from "../components/seo"

const PrivateStyles = styled.div`
  color: var(--black);
  font-family: sabon, serif;

  #deskHead {
    background: var(--aqua);
    background: linear-gradient(to right, #8fffca, #9bf6ff);
    height: 240px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    box-shadow: 0 2px 3px #ccc;
  }
  #mobileHead {
    display: none;
    box-shadow: 0 2px 3px #ccc;
  }
  .corner {
    margin-top: -160px;
    margin-left: -50px;
  }

  h2 {
    color: #fac59c;
    text-shadow: 0 2px 3px #919191;
    font-size: 4rem;
    font-size: clamp(3.5rem, 5vw, 6rem);
    font-weight: 400;
    min-width: 230px;
  }
  p {
    font-family: lato;
    font-size: 16px;
  }
  .textBox {
    max-width: 600px;
  }
  .img1 {
    box-shadow: 0 2px 3px #ccc;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-content: center;
    max-width: 1400px;
    margin: 0 auto;
    padding: 40px 0 100px 0;
  }
  .contentLeft {
    padding-left: 10px;
  }
  h3 {
    font-family: "Gill Sans", sans-serif;
    font-size: 35px;
    font-weight: 400;
    margin-bottom: 7px;
  }
  .mobileH3 {
    margin-left: 10px;
    display: none;
  }
  .mainContent {
    box-sizing: border-box;
    margin: 69px 10px 0 10px;
    align-items: center;
    text-align: center;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 2px 3px #ccc;
    border: 1px solid #eee;
    padding: 8px 15px 7px 15px;
    min-height: 420px;
  }
  .mainContent div {
    max-width: 400px;
    padding-right: 20px;
  }
  h4 {
    font-size: 30px;
    font-family: "Gill Sans", sans-serif;
    font-weight: 400;
    margin: 0;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
  }
  h5 {
    font-size: 20px;
    font-family: "Perpetua";
    font-family: "Gill Sans", sans-serif;
    font-weight: 400;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .myButton {
    justify-self: end;
    box-shadow: 0px 1px 0px 0px #fff6af;
    background: linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);
    background-color: #ffec64;
    border-radius: 6px;
    border: 1px solid #ffaa22;
    display: inline-block;
    cursor: pointer;
    color: #333333;
    font-family: Arial;
    font-size: 20px;
    font-weight: bold;
    padding: 0 24px;
    margin: 10px 0 10px 0;
    text-decoration: none;
    text-shadow: 0px 1px 0px #ffee66;
    width: 150px;
    box-shadow: 0 2px 3px #ccc;
  }
  .myButton:hover {
    background: linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
    background-color: #ffab23;
  }
  .myButton:active {
    position: relative;
    top: 1px;
  }
  .mobileMap {
    display: none;
    box-shadow: 0 2px 3px #ccc;
  }
  .desktopMap {
    box-shadow: 0 2px 3px #ccc;
  }
  @media (max-width: 1050px) {
    .content {
      justify-content: center;
    }
    .contentLeft {
      display: none;
    }
    .mainContent {
      margin-top: 7px;
    }
    .mobileH3 {
      display: initial;
    }
    .textBox {
      max-width: 450px;
    }
  }
  @media (max-width: 930px) {
    .textBox {
      max-width: 350px;
    }
  }
  @media (max-width: 750px) {
    .textBox {
      min-width: 0;
    }
    #deskHead {
      display: none;
    }

    #mobileHead {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100px;
      width: 100%;
      background-color: var(--aqua);
    }
  }
  @media (max-width: 650px) {
    .mainContent {
      flex-direction: column;
    }
  }
  @media (max-width: 450px) {
    .mainContent {
      width: 360px;
    }
    .desktopMap {
      display: none;
    }
    .mobileMap {
      display: initial;
    }
  }
  @media (max-width: 375px) {
    .mainContent {
      width: 320px;
    }
    .mobileH3 {
      font-size: 33px;
      text-align: center;
    }
  }
`

export default function privates({ data }) {
  const seo = data.allSanitySeo.nodes[0]
  const headerImages = data.header.edges

  const clickHandler = () => {
    window.open(
      "https://calendly.com/marianneyogayoga",
      "Calendly Scheduling",
      "width=700,height=900,top=40,left=40"
    )
  }

  return (
    <Layout>
      <SEO seo={seo} />
      <PrivateStyles>
        <div id="mobileHead">
          <h2>Yoga Privates</h2>
        </div>
        <div id="deskHead">
          <Img
            className="corner"
            fixed={headerImages[1].node.childImageSharp.fixed}
          ></Img>

          <div className="textBox">
            <h2>Private Lessons</h2>
          </div>

          <Img fixed={headerImages[0].node.childImageSharp.fixed}></Img>
        </div>
        <div className="content">
          <div className="contentLeft">
            <h3>Yoga / Pilates / Fitness</h3>
            <Img className="img1" fixed={data.zoom.childImageSharp.fixed} />
          </div>
          <div>
            <h3 className="mobileH3">Yoga / Pilates / Fitness</h3>
            <div className="mainContent">
              <div>
                <h4>
                  Marianne is avaliable for both in-person <br /> & <br />
                  COVID-19 Safe virtual private lessons via Zoom.
                </h4>
                <h5>
                  Join her for a personalized workout curtailed around your
                  fitness goals!
                </h5>

                <p>Cancellation / No-Show Policy:</p>
                <p>
                  Rescheduling is permitted up until 24 hours in advance. No
                  rescheduling or refunds will be given in the event of a
                  no-show or late cancellation.
                </p>
                <button className="myButton" onClick={clickHandler}>
                  Sign up here!
                </button>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57100.47780339854!2d-80.11424369805309!3d26.55933901991087!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7669821d5baa9c9b!2sYoga%20With%20Marianne!5e0!3m2!1sen!2sus!4v1605995160514!5m2!1sen!2sus"
                width="400"
                height="360"
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                title="googleMap"
                className="desktopMap"
              ></iframe>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57100.47780339854!2d-80.11424369805309!3d26.55933901991087!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7669821d5baa9c9b!2sYoga%20With%20Marianne!5e0!3m2!1sen!2sus!4v1605995160514!5m2!1sen!2sus"
                width="320"
                height="320"
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                title="googleMap"
                className="mobileMap"
              ></iframe>
            </div>
          </div>
        </div>
      </PrivateStyles>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    header: allFile(
      filter: {
        extension: { regex: "/(png)/" }
        relativeDirectory: { eq: "privates" }
      }
    ) {
      edges {
        node {
          base
          childImageSharp {
            fixed(height: 240) {
              base64
              width
              height
              src
              srcSet
            }
          }
        }
      }
    }
    zoom: file(relativePath: { eq: "privates/zoomPriv.png" }) {
      childImageSharp {
        fixed(width: 350) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allSanitySeo(filter: { page: { eq: "privates" } }) {
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
