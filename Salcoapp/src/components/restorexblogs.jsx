import React from 'react';
import '../styling/restorexblogs.css';

import BlogPost from '../components/blogpost'; // Import the BlogPost component
const RestorexBlogs = () => {
  // Sample blog posts data with images
  const blogPosts = [
    { id: 1, title: 'First Blog Post', content: 'This is the content of the first blog post.', image: 'data:image/jpeg;base64,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' },
    { id: 2, title: 'Second Blog Post', content: 'This is the content of the second blog post.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNQi8O24DrkNKnAcoTJ3OZtgc8o4ApjMBmPw&s' },
    { id: 3, title: ' Our Journey', content: 'The Story Behind Restorex', image: 'path/to/image3.jpg' },
    { id: 4, title: 'Customer Success Stories', content: 'How Restorex Products Changed Lives', image: 'path/to/image4.jpg' },
    { id: 5, title: 'Behind the Scenes', content: 'A Day at Restorex', image: 'path/to/image5.jpg' },
    { id: 6, title: 'The Restorex Impact', content: 'How We Support Local Communities', image: 'path/to/image6.jpg' },
    { id: 7, title: 'The Future of Shopping', content: 'What to Expect from Restorex', image: 'path/to/image7.jpg' },
    { id: 8, title: 'Restorex Insider', content: 'Exclusive Sneak Peeks into Upcoming Products', image: 'path/to/image8.jpg' },
    { id: 9, title: 'Why Quality Matters', content: ' The Restorex Promise', image: 'path/to/image9.jpg' },
    { id: 10, title: '', content: 'This is the content of the tenth blog post.', image: 'path/to/image10.jpg' },
  ];

  // Helper function to render posts in chunks
  const renderPosts = (posts, count) => {
    return posts.slice(0, count).map(post => (
      <BlogPost
        key={post.id}
        title={post.title}
        content={post.content}
        image={post.image}
      />
    ));
  };

  return (
    <div className="blogs-container">
      <header>
        <h1>Restorex Blogs</h1>
        <p>Welcome to our blog section. Here you can find the latest updates and news.</p>
      </header>
      <main>
        {/* Render in specified pattern */}
        <div className="blog-row">
          {renderPosts(blogPosts, 2)}
        </div>
        <div className="blog-row">
          {renderPosts(blogPosts.slice(2), 3)}
        </div>
        <div className="blog-row">
          {renderPosts(blogPosts.slice(5), 1)}
        </div>
        <div className="blog-row">
          {renderPosts(blogPosts.slice(6), 2)}
        </div>
        <div className="blog-row">
          {renderPosts(blogPosts.slice(8), 2)}
        </div>
        <div className="blog-row">
          {renderPosts(blogPosts.slice(10), 1)}
        </div>
      </main>
      <footer>
        <p>Footer content goes here.</p>
      </footer>
    </div>
  );
};

export default RestorexBlogs;
