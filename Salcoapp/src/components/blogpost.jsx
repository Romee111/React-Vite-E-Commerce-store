import React from 'react';
import '../styling/restorexblogs.css';

// Sample BlogPost Component
const BlogPost = ({ title, content, image }) => (
  <div className="blog-post">
    {image && <img src={image} alt={title} className="blog-post-image" />}
    <h3 className='blog-post-title'>{title}</h3>
    <p>{content}</p>
  </div>
);

export default BlogPost;
