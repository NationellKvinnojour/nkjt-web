import React from "react";
import { connect } from "frontity";
import dayjs from "dayjs";

const Post = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const author = state.source.author[post.author];
  const Html2React = libraries.html2react.Component;
  
  const formattedDate = dayjs(post.date).format("DD-MMMM-YYYY");

  return (
    <div>
      <h2>{post.title.rendered}</h2>
      <Html2React html={post.content.rendered} />
      <p>
        <strong>Posted: </strong>
        {formattedDate}
      </p>
      <p>
        <strong>Author: </strong>
        {author.name}
      </p>
    </div>
  );
};

export default connect(Post);