import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #FDFFB6;
    --orange: #FFD6A5;
    --coral: #FFADAD;
    --green: #CAFFBF;
    --aqua: #9BF6FF;
    --blue: #A0C4FF;
    --purple: #BDB2FF;
    --pink: #FFC6FF;
    --white: #fff;
    --offWhite: #FFFFFC;
    --grey: #efefef;
    --darkGrey: #444649;
    --tan: #af9560;
  }
  html {
    font-family: "Sabon", serif;
    font-size: 10px;
  }

  body {
    font-size: 2rem;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--grey) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--darkGrey) ;
    border-radius: 6px;
    border: 1px solid var(--white);
  }

 p{
   font-family: Lato, sans-serif;
 }

  img {
    max-width: 100%;
  }

  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }

`

export default GlobalStyles
