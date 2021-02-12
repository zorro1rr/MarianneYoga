import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import { Link, graphql } from "gatsby"
import { TiSocialYoutubeCircular } from "react-icons/ti"
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa"
import SEO from "../components/seo"

const HeaderStyles = styled.header`
  font-family: sabon, serif;
  box-shadow: 0 2px 3px #ccc;
  #deskHead {
    background: var(--yellow);
    height: 240px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #mobileHead {
    display: none;
  }

  h2 {
    color: #806123;
    font-size: 2rem;
    font-size: clamp(3.5rem, 5vw, 6rem);
    font-weight: 400;
    min-width: 230px;
    margin-right: 30vw;
    text-shadow: 0 2px 3px #eee;
  }

  @media (max-width: 1050px) {
    h2 {
      margin-right: 15vw;
    }
  }

  @media (max-width: 750px) {
    h2 {
      margin: 0;
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
      background-color: var(--yellow);
    }
  }
`

const ContentStyles = styled.div`
  max-width: 1290px;
  margin: 0 auto;
  .img1 {
    box-shadow: 0 2px 3px #ccc;
  }
  .img2 {
    box-shadow: 0 2px 3px #ccc;
  }
  .topContent {
    display: flex;
    justify-content: space-around;
    height: 700px;
    background: #f7efe5;
    margin-bottom: 100px;
    box-shadow: 0 2px 3px #ccc;
  }
  h2 {
    color: var(--black);
    font-family: "Gill Sans", sans-serif;
    padding: 20px 0 75px 50px;
    text-shadow: 0 2px 3px #eee;
  }
  .leftContent {
    display: flex;
    flex-direction: column;
    max-width: 648px;
    margin-left: 10px;
    justify-content: space-around;
    min-width: 300px;
  }

  .rightContent {
    max-width: 360px;
    margin: -90px 10px 0 10px;
    min-width: 300px;
  }

  .bottomContent {
    display: flex;
    justify-content: space-around;
    padding-bottom: 70px;
  }
  .bottomContent > p {
    max-width: 350px;
    margin-left: 200px;
    margin-right: 10px;
    align-self: center;
  }
  .img3 {
    width: 648px;
    box-shadow: 0 2px 3px #ccc;
  }
  @media (max-width: 900px) {
    .img3 {
      min-width: 320px;
      height: 316px;
    }
    .bottomContent > p {
      margin-top: 0;
    }
  }
  @media (max-width: 780px) {
    .bottomContent > p {
      margin-left: 10px;
      text-align: center;
    }
    .bottomContent {
      flex-direction: column;
    }
    .img3 {
      width: 315px;
      align-self: center;
    }
  }
  @media (max-width: 650px) {
    .topContent {
      flex-direction: column;
      height: auto;
      text-align: center;
      align-items: center;
    }
    .leftContent {
      margin-right: 10px;
    }
    .rightContent {
      margin-top: 10px;
    }
    h2 {
      padding: 20px 0;
      text-align: center;
    }
  }
`

const FooterStyles = styled.footer`
  background: linear-gradient(to left, transparent, var(--yellow));
  color: #553585;
  color: var(--black);
  padding-bottom: 1rem;

  .BG {
    font-size: 0;
    position: absolute;
    bottom: -1090px;
    left: 0px;
    margin: 0;
    z-index: -1;
  }
  .centerWrap {
    max-width: 750px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
  }
  h3 {
    color: #553585;
    font-size: 3rem;
    text-shadow: 0 2px 3px #9a9a9a;
  }
  p {
    font-size: 16px;
    margin: 1rem 0;
  }
  div {
    margin: 0 10px;
  }
  a {
    color: #553585;
    text-decoration: none;
  }
  a:hover {
    color: var(--p);
    text-decoration: none;
  }

  @media (max-width: 1500px) {
    .BG {
      left: -150px;
    }
  }
  @media (max-width: 1220px) {
    .BG {
      bottom: -1000px;
    }
  }
  @media (max-width: 1050px) {
    .BG {
      bottom: -970px;
    }
  }
  @media (max-width: 780px) {
    .BG {
      display: none;
    }
  }
`

export default function about({ data }) {
  const seo = data.allSanitySeo.nodes[0]
  console.log(data)
  return (
    <Layout>
      <SEO seo={seo} />
      <HeaderStyles>
        <div id="mobileHead">
          <h2>My Journey</h2>
        </div>
        <div id="deskHead">
          <Img fixed={data.file.childImageSharp.fixed} tag="lotus" />
          <h2>My Journey</h2>
        </div>
      </HeaderStyles>
      <ContentStyles>
        <h2>Thank you for following your inspiration to come here!</h2>
        <div className="topContent">
          <div className="leftContent">
            <p>
              Hello everyone! I'm Marianne Howard - a senior with a passion for
              fitness who loves to inspire others to feel good through the
              medicine of movement. In 1978 I graduated Cum Laude from The
              University of Ohio with a degree in Physical Education. I'm also a
              certified Yoga and Pilates instructor, and have enjoyed teaching
              at numerous gyms and private communities for over 20 years.
            </p>
            <Img
              className="img1"
              fluid={data.pilates.childImageSharp.fluid}
              alt=""
            />
          </div>
          <div className="rightContent">
            <Img
              className="img2"
              fluid={data.pose.childImageSharp.fluid}
              alt=""
            />
            <p>
              Although I have experience teaching all ages and skill levels, I
              have a special affection for helping my fellow seniors achieve a
              healthly lifestyle!
            </p>
          </div>
        </div>
        <div className="bottomContent">
          <p>
            Many of my classes include chair fitness with weights, bands, and
            balls. Also, I have guided many meditation classes to help develop
            both mental and spiritual well being. I would love to develop a
            personalized "magical mix" to your needs to help you live a heathier
            and happier life.We will discuss your interests and create a
            personalized program just for you! Please do not hesitate to give me
            the opportunity to answer any of your questions.
          </p>

          <Img
            fluid={data.split.childImageSharp.fluid}
            alt=""
            className="img3"
          />
        </div>
      </ContentStyles>
      <FooterStyles>
        <div className="centerWrap">
          <div>
            <h3>Contact</h3>
            <p>
              Marianne Howard
              <br />
              7277 Via Leonardo
              <br />
              Lake Worth, FL 33467
            </p>
            <Link to="/contact">Contact Marianne</Link>
          </div>
          <div>
            <h3>Connect</h3>
            <p>Follow Marianne on social media</p>
            <a
              href="https://www.facebook.com/marianne.howard.378"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookSquare />
            </a>
            <a
              href="https://www.youtube.com/channel/UCLfjTtL-yF94YKvfk1yDETg"
              target="_blank"
              rel="noreferrer"
            >
              <TiSocialYoutubeCircular />
            </a>
            <a
              href="https://twitter.com/with_marianne"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitterSquare />
            </a>
          </div>
        </div>
        <div className="BG">
          <Img fixed={data.footerLotus.childImageSharp.fixed} />
        </div>
      </FooterStyles>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "about/lotus2.png" }) {
      childImageSharp {
        fixed(width: 400, height: 240) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    footerLotus: file(relativePath: { eq: "about/LotusBottom.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    pilates: file(relativePath: { eq: "about/Yogi-8.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 648, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pose: file(relativePath: { eq: "about/Yogi-30.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 360, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    split: file(relativePath: { eq: "about/Yogi-15.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 648, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allSanitySeo(filter: { page: { eq: "about" } }) {
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
