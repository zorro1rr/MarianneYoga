import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { Link, graphql } from "gatsby"
import { TiSocialYoutubeCircular } from "react-icons/ti"
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa"
import BackgroundImage from "gatsby-background-image"

const AboutStyles = styled.div`
  font-family: sabon, serif;
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
const FooterStyles = styled.div`
  background: linear-gradient(to left, transparent, var(--yellow));
  color: #553585;
  color: var(--black);
  padding-bottom: 1rem;
  .BG {
    position: absolute;
    bottom: 0px;
    right: 0px;
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
  }
  p {
    font-size: 1.5rem;
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
  @media (max-width: 750px) {
    flex-direction: column;
  }
`

export default function about({ data }) {
  console.log(data)
  return (
    <Layout>
      <AboutStyles>
        <div id="mobileHead">
          <h2>My Journey</h2>
        </div>
        <div id="deskHead">
          <BackgroundImage
            fixed={data.headerLotus.childImageSharp.fixed}
            tag="lotus"
          />
          <h2>My Journey</h2>
        </div>

        <div>
          {/* <Img id="header" fixed={data.lotus.childImageSharp.fixed} /> */}
        </div>
      </AboutStyles>

      <FooterStyles>
        <div className="BG">
          <Img fixed={data.footerLotus.childImageSharp.fixed} className="BG" />
        </div>
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
            >
              <FaFacebookSquare />
            </a>
            <a>
              <TiSocialYoutubeCircular />
            </a>
            <a>
              <FaTwitterSquare />
            </a>
          </div>
        </div>
      </FooterStyles>
    </Layout>
  )
}

export const query = graphql`
  query {
    headerLotus: file(id: { eq: "c4402fe0-5a72-5b3c-a21c-4efee4da33aa" }) {
      childImageSharp {
        fixed(width: 400, height: 240) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    footerLotus: file(id: { eq: "6f9560b7-f4c0-5fc0-b22e-92c9eb97c240" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
