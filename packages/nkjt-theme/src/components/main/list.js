// This file is not used I think?

import React from "react";
import { connect } from "frontity";
// import Link from "@frontity/components/link";
import Link from "../link";
import dayjs from "dayjs";

const List = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const Html2React = libraries.html2react.Component;
  
  return (
    <div>
      {data.items.map((item) => {
        const post = state.source.post[item.id];
        const formattedDate = dayjs(post.date).format("DD-MMMM-YYYY");
        return (
          <>
            <Link key={item.id} href={post.link}>
              <strong>{post.title.rendered}</strong>
              <br />
              {formattedDate}
              <Html2React html={post.content.rendered} />
              <br />
              <br />             
            </Link>
          </>
        )
      })}
    </div>
  );
};

export default connect(List);