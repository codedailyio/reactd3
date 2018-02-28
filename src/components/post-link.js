import React from "react";
import Link from "gatsby-link";

const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.path}>
      {post.frontmatter.title} [{post.frontmatter.library}]
    </Link>
  </div>
);

export default PostLink;