import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Wrapper = styled.div`
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
    margin-right: 30vw;;
  }
  
  @media (max-width: 1050px) {
    h2{
      margin-right: 15vw;
    }
    
  }

  @media (max-width: 750px) {
    h2{
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

const BorderWrapper = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  text-align: center;
  color: var(--black);
  .image {
    margin: 20px 0 10px;
    height: 450px;
    width: 600px;
    background: var(--grey);
  }

  p {
    font-family: lato, sans-serif;
  }
  #immy {
    height: 450px;
  }
`

export default function about({ data }) {
  console.log(data)
  return (
    <Layout>
      <Wrapper>
        <div id="mobileHead">
          <h2>My Journey</h2>
        </div>
        <div id="deskHead">
          <Img fixed={data.lotus.childImageSharp.fixed} tag="lotus"></Img>
          <h2>My Journey</h2>
        </div>
        
        <div>
          {/* <Img id="header" fixed={data.lotus.childImageSharp.fixed} /> */}
        </div>

        <BorderWrapper>
          {/* <img id="immy" src={placeholder} src="placeholder" />
          <div className="content1">
            <h3>Lorem Ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              libero magna, commodo sagittis urna vel, pretium sollicitudin
              tortor. Aliquam nec elit in odio varius congue. Etiam ultricies
              leo ac est posuere venenatis. Mauris fringilla et diam in laoreet.
              Praesent non ex sapien. Vivamus viverra porta ex ac blandit.
              Praesent vitae egestas ligula. Nulla pretium eget nibh a dictum.
              Nullam porta lectus sit amet est congue, eu dapibus ante
              ullamcorper. Sed egestas neque et lorem rhoncus, vitae fermentum
              elit aliquet. Integer a egestas mi. In bibendum lacus quis cursus
              eleifend.
            </p>
            <p>
              laoreet. Praesent non ex sapien. Vivamus viverra porta ex ac
              blandit. Praesent vitae egestas ligula. Nulla pretium eget nibh a
              dictum. Nullam porta lectus sit amet est congue, eu dapibus ante
              ullamcorper. Sed egestas neque et lorem rhoncus, vitae fermentum
              elit aliquet. Integer a egestas mi. In bibendum lacus quis cursus
              eleifend.
            </p>
          </div>

          <div className="content2">
            {" "}
            <h3>Lorem Ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              libero magna, commodo sagittis urna vel, pretium sollicitudin
              tortor. Aliquam nec elit in odio varius congue. Etiam ultricies
              leo ac est posuere venenatis. Mauris fringilla et diam in laoreet.
              Praesent non ex sapien. Vivamus viverra porta ex ac blandit.
              Praesent vitae egestas ligula. Nulla pretium eget nibh a dictum.
              Nullam porta lectus sit amet est congue, eu dapibus ante
              ullamcorper. Sed egestas neque et lorem rhoncus, vitae fermentum
              elit aliquet. Integer a egestas mi. In bibendum lacus quis cursus
              eleifend.
            </p>
            <p>
              Sed egestas neque et lorem rhoncus, vitae fermentum elit aliquet.
              Integer a egestas mi. In bibendum lacus quis cursus eleifend.
            </p>
          </div>
          <img id="immy" src="../images/placeholder.svg" src="placeholder" /> */}
        </BorderWrapper>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query {
    lotus: file(relativePath: { eq: "lotus2.png" }) {
      childImageSharp {
        fixed(width: 400, height: 240) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
