import React from 'react';
import BlogComicStyleWrapper from './BlogComic.style';

const BlogComic = ({ comicImage, onClose }) => {
  return (
    <BlogComicStyleWrapper>
      <div className="popup">
        <div className="popup-inner">
          <button className="close-btn" onClick={onClose}>X</button>
          <img src={comicImage} alt="Comic" />
        </div>
      </div>
    </BlogComicStyleWrapper>
  );
};

export default BlogComic;
