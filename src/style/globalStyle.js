import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Monteserrat Regular */
  @font-face {
    font-family: "Montserrat";
    src: url("../../public/fonts/Montserrat-Regular.woff2") format("woff2"),
    url("../../public/fonts/Montserrat-Regular.woff") format("woff"); 
    font-weight: 400;
    font-style: normal;
  }
  /* Monteserrat Medium */
  @font-face {
    font-family: "Montserrat";
    src: url("../../public/fonts/Montserrat-Medium.woff2") format("woff2"),
    url("../../public/fonts/Montserrat-Medium.woff") format("woff"); 

    font-weight: 500;
    font-style: normal;
  }
    /* Monteserrat Semi-Bold */
    @font-face {
    font-family: "Montserrat";
    src: url("../../public/fonts/Montserrat-SemiBold.woff2") format("woff2"), 
    url("../../public/fonts/Montserrat-SemiBold.woff") format("woff"); 
    font-weight: 600;
    font-style: normal;
  }
    /* Monteserrat Bold */
    @font-face {
    font-family: "Montserrat";
    src: url("../../public/fonts/Montserrat-Bold.woff2") format("woff2"),
    url("../../public/fonts/Montserrat-Bold.woff") format("woff"); 
    font-weight: 700;
    font-style: normal;
  }
    /* Bitter Regular */
    @font-face {
    font-family: "Bitter";
    src: url("../../public/fonts/Bitter-Regular.woff2") format("woff2"),
    url("../../public/fonts/Bitter-Regular.woff") format("woff"); 
    font-style: normal;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: ${(props) => props.theme.font.body};
    font-size: ${(props) => props.theme.font.size.default};
    line-height: ${(props) => props.theme.font.lineHeight.default};;
    color: ${(props) => props.theme.color.grayBase};
    letter-spacing: ${(props) => props.theme.color.text};
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.font.header};
    color: ${(props) => props.theme.color.dark};
    font-weight: normal;
    letter-spacing: ${(props) => props.theme.font.letterSpacing.header};
  }

  h1 {
    font-size: ${(props) => props.theme.font.size.header};
  }
`;

export default GlobalStyle;
