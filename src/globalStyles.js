import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Monteserrat Regular */
  @font-face {
    font-family: "Montserrat";
    src: url("public/fonts/Montserrat-Regular.woff2") format("woff2"),
    url("public/fonts/Montserrat-Regular.woff") format("woff"); 
    font-weight: 400;
    font-style: normal;
  }
  /* Monteserrat Medium */
  @font-face {
    font-family: "Montserrat";
    src: url("public/fonts/Montserrat-Medium.woff2") format("woff2"),
    url("public/fonts/Montserrat-Medium.woff") format("woff"); 

    font-weight: 500;
    font-style: normal;
  }
    /* Monteserrat Semi-Bold */
    @font-face {
    font-family: "Montserrat";
    src: url("public/fonts/Montserrat-SemiBold.woff2") format("woff2"), 
    url("public/fonts/Montserrat-SemiBold.woff") format("woff"); 
    font-weight: 600;
    font-style: normal;
  }
    /* Monteserrat Bold */
    @font-face {
    font-family: "Montserrat";
    src: url("public/fonts/Montserrat-Bold.woff2") format("woff2"),
    url("public/fonts/Montserrat-Bold.woff") format("woff"); 
    font-weight: 700;
    font-style: normal;
  }
    /* Bitter Regular */
    @font-face {
    font-family: "Bitter";
    src: url("public/fonts/Bitter-Regular.woff2") format("woff2"),
    url("public/fonts/Bitter-Regular.woff") format("woff"); 
    font-style: normal;
  }
  body {
    font-family: ${(props) => props.theme.fonts.montserrat};
    font-size: ${(props) => props.theme.fonts.size.body};
    line-height: ${(props) => props.theme.fonts.lineHeight.body};;
    color: ${(props) => props.theme.colors.grayBase};
  }
`;

export default GlobalStyle;
