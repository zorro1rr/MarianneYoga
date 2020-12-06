import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa"

import { TiSocialYoutubeCircular } from "react-icons/ti"

const ContactStyles = styled.div`
  * {
    /* border: 1px solid red; */
  }

  overflow-x: hidden;
  // get rid of header in layout
  #header {
    display: none;
  }
  .bg {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 120vh;
    width: 100%;
  }
  h2{
    font-size: 4.5rem;
    color: var(--aqua);
  }
  .formDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--offWhite);
    text-align: center;
  }
  .formDiv p:last-child{
    margin-bottom: 40px;
  }
  .formDiv h3{
    margin-top: -40px;
  }
  form {
    width: 750px;
  }
  .formDiv input {
    margin: 7px 0;
    width: 48%;
  }

  textarea {
    margin: 7px 0;
    min-height: 150px;
  }

  button {
    width: 50%;
    align-self: center;
  }
  li {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
  }
  .connect {
    background: var(--orange);
    text-align: center;
  }
  button {
    color: var(--darkGrey);
    background: var(--orange);
    font-weight: 700;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
  }
  button:hover {
    transform: translate3d(0, -1px, 0);
    --cast: 0;
    box-shadow: none;
    background-color: #d6baf3;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`
const HeaderStyles = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 118px;
  h1 {
    font-family: "Gill Sans", sans-serif;
    text-transform: uppercase;
    font-weight: 400;
    color: var(--orange);
    margin-left: 5px;
    font-size: 2.5rem;
  }
  a {
    font-family: "Sabon", serif;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--orange);
  }
  a:visted {
    text-decoration: none;
    color: var(--orange);
  }
  div:last-of-type {
    margin-right: 5px;
  }
  .link-wrapper {
    position: relative;
    display: block;
    padding: 5px 0;
  }
  .hover-7 {
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: var(--orange);
      transform: scaleX(0);
      transform-origin: top left;

      transition: transform 0.3s;
    }

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 2px;
      background-color: var(--orange);
      transform: scaleX(0);
      transform-origin: bottom right;

      transition: transform 0.3s;
    }

    &:hover {
      &:before {
        transform: scaleX(1);
      }

      &:after {
        transform: scaleX(1);
      }
    }
  }
  @media (max-width: 750px) {
    height: 90px;
    justify-content: space-around;
    h1 {
      display: none;
    }
    .link-wrapper {
      font-size: 1.5rem;
    }
  }
`

const Info = styled.div`
 
  background: var(--orange);
  color: #553585;
  color: var(--black);
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
  .centerWrap {
    width: 750px;
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

//custom header to blend into BG
const header = function () {
  return (
    <HeaderStyles>
      <h1>Yoga With Marianne</h1>
      <div className="link-wrapper">
        <Link to="/" className="hover-7">
          Home
        </Link>
      </div>
      <div className="link-wrapper">
        <Link to="/about" className="hover-7">
          About
        </Link>
      </div>
      <div className="link-wrapper">
        <Link to="/videos" className="hover-7">
          Videos
        </Link>
      </div>
      <div className="link-wrapper">
        <Link to="/contact" className="hover-7">
          Contact
        </Link>
      </div>
      <div className="link-wrapper">
        <Link to="/privates" className="hover-7">
          Privates
        </Link>
      </div>
    </HeaderStyles>
  )
}

export default function contact({ data }) {
  const background = data.file.childImageSharp.fluid

  return (
    <ContactStyles>
      <Layout>
        <BackgroundImage fluid={background} className="bg">
          <div>{header()}</div>

          <ul className="formDiv">
            <div>
              {/* why do i need this div to get padding?? late night!! */}
              <div className="formText">
          <h3>Get in Touch</h3>
            <h2>Contact Marianne</h2>
            <p>
              Please fill out the contact form and I will get back to you as
              soon as possible!
            </p>
            </div>
            <form
              action="https://getform.io/f/8aa71fe3-e622-4227-9bb4-b5502a4e9b93"
              method="POST"
            >
              <li>
                <input
                  className="names"
                  placeholder="First Name"
                  type="text"
                  name="first"
                />
                <input
                  className="names"
                  placeholder="Last Name"
                  type="text"
                  name="last"
                />
              </li>
              <li>
                <input placeholder="Email" type="email" name="email" />
                <input placeholder="Phone" type="tel" name="phone" />
              </li>
              <textarea placeholder="Message" type="text" name="message" />
              <button type="submit">Send</button>
            </form>
            </div>
          </ul>

          <Info>
            <div className="centerWrap">
              <div className="contactWrap">
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
              <div className="connectWrap">
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
          </Info>
        </BackgroundImage>
      </Layout>
    </ContactStyles>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "ContactPurp.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          base64
          tracedSVG
          aspectRatio
          srcWebp
          srcSetWebp
          originalName
        }
      }
    }
  }
`
