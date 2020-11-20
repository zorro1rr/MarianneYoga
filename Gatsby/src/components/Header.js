import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const HeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 118px;
  h2 {
    font-family: "Gill Sans", sans-serif;
    text-transform: uppercase;
    font-weight: 400;
    color: var(--black);
  }
  a {
    font-family: "Sabon", serif;
    text-transform: uppercase;
    text-decoration: none;
  }
  a:visted {
    text-decoration: none;
  }
`

export default function () {
  return (
    <HeaderStyles>
      <h2>Yoga With Marianne</h2>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/videos">Videos</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/privates">Privates</Link>
    </HeaderStyles>
  )
}
