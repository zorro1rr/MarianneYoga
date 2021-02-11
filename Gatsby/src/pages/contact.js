import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import SEO from "../components/seo"
import Footer from "../components/Footer"

const HeaderStyles = styled.div`
  width: 98vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 118px;
  text-shadow: 0 2px 3px #4b4362;

  h1 {
    font-family: "Gill Sans", sans-serif;
    text-transform: uppercase;
    font-weight: 400;
    color: #ffe2cc;
    margin-left: 5px;
    font-size: 2.5rem;
  }
  a {
    font-family: "Sabon", serif;
    text-transform: uppercase;
    text-decoration: none;
    color: #ffe2cc;
  }
  a:visted {
    text-decoration: none;
    color: #ffe2cc;
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
      background-color: #ffe2cc;
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
      background-color: #ffe2cc;
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
      font-size: 16px;
    }
  }
  @media (max-width: 400px) {
    margin-top: 10px;
    flex-direction: column;
    height: 200px;
  }
`

const ContactStyles = styled.div`
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
  h2 {
    display: inline-block;
    font-size: 4.5rem;
    color: #ffe2cc;
    border-bottom: 1px solid #ffe2cc;
    text-shadow: 0 2px 3px #4b4362;
  }
  h3 {
    text-shadow: 0 2px 3px #4b4362;
    color: var(--offWhite);
  }
  p {
    color: var(--offWhite);
    text-shadow: 0 2px 3px #4b4362;
  }
  .wrapper {
    box-sizing: border-box;
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
  }

  .inputDiv {
    margin: 0 5px;
    display: grid;
    grid-gap: 7px;
    grid-template-columns: repeat(auto-fit, minmax(315px, 1fr));
    grid-template-rows: 1fr 1fr;
  }

  input {
    max-width: 90vw;
    margin: 7px 7px;
    border: none;
    box-shadow: 0 2px 3px #4b4362;
  }

  textarea {
    width: 98%;
    max-width: 90vw;
    align-self: center;
    margin: 7px;
    min-height: 150px;
    box-shadow: 0 2px 3px #4b4362;
  }

  .connect {
    background: var(--orange);
    text-align: center;
  }
  button {
    width: 50%;
    align-self: center;
    color: var(--darkGrey);
    background: var(--orange);
    font-weight: 700;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    box-shadow: 0 2px 3px #4b4362;
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
  @media (max-width: 580px) {
    .wrapper {
      width: 95vw;
      margin: 0;
    }
    .bg {
      height: 100%;
    }
  }
`

//custom header to blend into BG
const header = (
  <HeaderStyles>
    <Link to="/">
      <h1>Yoga With Marianne</h1>
    </Link>
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
      <Link to="/privates" className="hover-7">
        Privates
      </Link>
    </div>
    <div className="link-wrapper">
      <Link to="/contact" className="hover-7">
        Contact
      </Link>
    </div>
  </HeaderStyles>
)

export default function contact({ data }) {
  const background = data.file.childImageSharp.fluid
  const seo = data.allSanitySeo.nodes[0]

  return (
    <ContactStyles>
      <SEO seo={seo} />
      <Layout>
        <BackgroundImage fluid={background} className="bg">
          {header}

          <div className="wrapper">
            <div className="formText">
              <h3>Get in Touch</h3>
              <h2>Contact Marianne</h2>
              <p>
                Please fill out the contact form and I will get back to you as
                soon as possible!
              </p>
            </div>
            <form
              action="https://getform.io/f/8e8371ea-d293-4d88-9912-42c569e0fa94"
              method="POST"
            >
              <div className="inputDiv">
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

                <input placeholder="Email" type="email" name="email" />
                <input placeholder="Phone" type="tel" name="phone" />
              </div>
              <textarea placeholder="Message" type="text" name="message" />
              <button type="submit">Send</button>
            </form>
          </div>

          <Footer />
        </BackgroundImage>
      </Layout>
    </ContactStyles>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "ContactPurp.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allSanitySeo(filter: { page: { eq: "contact" } }) {
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
