import React from "react";
import { connect, styled } from "frontity";

const Page = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];
  const Html2React = libraries.html2react.Component;

  return (
    <div>
      <Title>{page.title.rendered}</Title>
      <Content>
        <Html2React html={page.content.rendered} />
      </Content>
    </div>
  );
};

export default connect(Page);

const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  text-align: center;
  padding: 40px 0;
  margin: 0;
  background: #68C2C0;
`

const Content = styled.div`
  padding: 0 30px 30px 30px;

  @media (min-width: 600px) {
    max-width: 500px;
    margin: auto;
  }

  @media (min-width: 800px) {
    max-width: 700px;
  }

  @media (min-width: 900px) {
    max-width: 900px;
  }
`;