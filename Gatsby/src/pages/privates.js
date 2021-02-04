import { Helmet } from "react-helmet"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Footer from "../components/Footer"

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
  }
  #mobileHead {
    display: none;
  }
  .corner {
    margin-top: -160px;
    margin-left: -50px;
  }

  h2 {
    color: #dc8f58;
    /* color: #fbcaa0; */
    font-size: 4rem;
    font-size: clamp(3.5rem, 5vw, 6rem);
    font-weight: 400;
    min-width: 230px;
  }
  p {
    font-family: lato;
    font-size: 13px;
  }
  .textBox {
    max-width: 600px;
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
    font-family: "Gill Sans";
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
    margin: 82px 10px 0 10px;
    align-items: center;
    text-align: center;
    display: flex;
    justify-content: space-between;
    /* width: 800px; */
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
    font-family: "Perpetua";
    margin-top: 0;
  }
  h5 {
    font-family: "Perpetua";
  }
  h5 + p {
    padding-top: 30px;
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
  }
  .myButton:hover {
    background: linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
    background-color: #ffab23;
  }
  .myButton:active {
    position: relative;
    top: 1px;
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
`

const Info = styled.div`
  background: linear-gradient(to right, transparent, var(--orange));
  color: #553585;
  color: var(--black);
  padding-bottom: 1rem;
  .centerWrap {
    max-width: 750px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
  }
  h3 {
    color: #553585;
    font-size: 3rem;
    margin-bottom: 7px;
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

export default function privates({ data }) {
  console.log(data)
  const headerImages = data.header.edges
  const zoom = data.zoom.childImageSharp.fixed

  const clickHandler = () => {
    window.open(
      "https://calendly.com/marianneyogayoga",
      "Calendly Scheduling",
      "width=700,height=900,top=40,left=40"
    )
  }

  return (
    <Layout>
      <Helmet></Helmet>
      <PrivateStyles>
        <div id="mobileHead">
          <h2>Yoga Privates</h2>
        </div>
        <div id="deskHead">
          <Img
            className="corner"
            fixed={headerImages[0].node.childImageSharp.fixed}
          ></Img>

          <div className="textBox">
            <h2>Private Classes</h2>
          </div>

          <Img fixed={headerImages[1].node.childImageSharp.fixed}></Img>
        </div>
        <div className="content">
          <div className="contentLeft">
            <h3>Yoga / Pilates / Fitness</h3>
            <Img fixed={zoom} />
          </div>
          <div>
            <h3 className="mobileH3">Yoga / Pilates / Fitness</h3>
            <div className="mainContent">
              <div>
                <h4>
                  Marianne is avaliable for both in-person as well as virtual
                  privates through Zoom.
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
  }
`
