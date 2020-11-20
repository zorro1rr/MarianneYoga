import React from "react"
import styled from "styled-components"

const FooterStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p{
     margin-left: 5px;
  }
`

export default function Footer() {
  return (
    <FooterStyles>
      {new Date().getFullYear()}
      <p>Yoga With Marianne</p>
    </FooterStyles>
  )
}
