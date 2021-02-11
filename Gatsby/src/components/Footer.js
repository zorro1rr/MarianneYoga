import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { TiSocialYoutubeCircular } from "react-icons/ti"
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa"

const FooterStyles = styled.footer`
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
  @media (max-width: 750px) {
    flex-direction: column;
  }
`

export default function Footer() {
  return (
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
    </FooterStyles>
  )
}
