import { useParams } from "react-router-dom";
import React from "react";


function BlogPost() {
  const { id } = useParams();

  return <h2>Viewing Blog Post ID: {id}</h2>;
}

export default BlogPost;