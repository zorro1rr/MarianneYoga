import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const HeaderStyles = styled.nav`
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
    color: var(--darkGrey);
    margin-left: 5px;
    font-size: 2.5rem;
  }
  a {
    font-family: "Perpetua", serif;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--darkGrey);
  }
  a:visted {
    text-decoration: none;
    color: var(--darkGrey);
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
      background-color: var(--darkGrey);
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
      background-color: var(--darkGrey);
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
    flex-direction: column;
    height: 200px;
  }
`

export default function () {
  return (
    <HeaderStyles id="header">
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
}
