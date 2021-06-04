import React from "react";
import { Global, connect, css, styled, Head } from "frontity";

import Header from "./header/header";
import TopMain from "./main/top-main";
import Footer from "./footer/footer";

import LandingPage from "./main/landing-page"

import gutenbergStyle from "./style.css";
import gutenbergTheme from "./theme.css";

const Root = () => {

  return (
    <>
      <Head>
        <title>NKJT</title>
        <meta name="description" content=""></meta>
      </Head>

      <Global styles={globalStyles} />
      {/* The below styles come from the wordpress style and them.css which give it the same layout styling as it is in guthenberg blocks
        https://frontity.org/blog/connecting-gutenberg-and-frontity/#how-gutenberg-works
      */}
      <Global styles={css(gutenbergStyle)} />     
      <Global styles={css(gutenbergTheme)} />


      {/* <LandingPage /> */}
      {/* <Header /> */}
      <TopMain />
      {/* <Footer /> */}
    </>
  );
};

export default connect(Root);

const globalStyles = css`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  a {
    cursor: pointer;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
  p {
    color: #000;
  }
`;