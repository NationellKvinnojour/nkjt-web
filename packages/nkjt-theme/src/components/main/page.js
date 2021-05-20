import React from "react";
import { connect, styled } from "frontity";

const Page = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];
  const Html2React = libraries.html2react.Component;

  return (
    <div>
      {/* <h2>{page.title.rendered}</h2> */}
      <Content>
        <Html2React html={page.content.rendered} />
      </Content>
    </div>
  );
};

export default connect(Page);

const Content = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
`;