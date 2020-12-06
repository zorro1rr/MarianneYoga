import { Helmet } from "react-helmet"
import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import styled from "styled-components"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { openPopupWidget } from "react-calendly"

const PrivateStyles = styled.div`
  font-family: sabon, serif;
  #deskHead {
    background: var(--aqua);
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
    font-size: 2rem;
    font-size: clamp(3.5rem, 5vw, 6rem);
    font-weight: 400;
    min-width: 230px;
  }
  p {
    font-family: lato;
    font-size: 1.2rem;
  }
  .textBox {
    max-width: 600px;
  }
  .calendly-badge-content {
    background-color: var(--aqua);
    background: red;
    color: red;
  }
  .calendly-badge-widget {
    right: auto !important;
    left: 20px !important;
  }
  @media (max-width: 1050px) {
    .textBox {
      max-width: 450px;
      /* margin-left: 10vw; */
    }
  }
  @media (max-width: 930px) {
    .textBox {
      max-width: 350px;
      /* margin-left: 10vw; */
    }
  }
  @media (max-width: 750px) {
    .textBox {
      /* margin: 0; */
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
`
const WidgetStyle = styled.div`
  display: flex;
  justify-content: center;
  * {
    margin: 0;
  }
  iframe {
    max-width: 930px;
  }
`

 const url = 'https://calendly.com/zorro1rr';
 
const CustomButton = ({ url, prefill, pageSettings, utm }) => {
  const onClick = () => openPopupWidget({ url, prefill, pageSettings, utm });
 
  return <button onClick={onClick}>Custom Button</button>;
};

export default function privates({ data }) {
  const images = data.allFile.edges
  
  return (
    <Layout>
      <PrivateStyles>
        <Helmet >
        
        </Helmet >
        <div id="mobileHead">
          <h2>Yoga Privates</h2>
        </div>
        <div id="deskHead">
          <Img
            className="corner"
            fixed={images[0].node.childImageSharp.fixed}
          ></Img>

          <div className="textBox">
            <h2>Yoga Privates</h2>
            <p>Cancellation / No-Show Policy:</p>
            <p>
              Rescheduling is permitted up until 24 hours in advance. No
              rescheduling or refunds will be given in the event of a no-show or
              late cancellation.
            </p>
          </div>

          <Img fixed={images[1].node.childImageSharp.fixed}></Img>
        </div>
        <div className="content">
          <Img fixed={images[2].node.childImageSharp.fixed} />
          <div>
            {CustomButton('https://calendly.com/zorro1rr')}
            <div className="popupButton">
            </div>
          </div>
          <div id="mapWrap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57100.47780339854!2d-80.11424369805309!3d26.55933901991087!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7669821d5baa9c9b!2sYoga%20With%20Marianne!5e0!3m2!1sen!2sus!4v1605995160514!5m2!1sen!2sus"
              width="500"
              height="450"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              title="googleMap"
            ></iframe>
          </div>
        </div>
      </PrivateStyles>
    </Layout>
  )
}
// style={{"min-width:320px;height:630px;"}}
export const query = graphql`
  query MyQuery {
    allFile(
      filter: {
        extension: { regex: "/(png)/" }
        relativeDirectory: { eq: "headerImages" }
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
  }
`
