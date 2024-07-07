import React, { useState } from 'react';
import BlogChapter from '../blog/blogChapter/BlogChapter';
import BlogComic from '../blog/blogComic/BlogComic';
import chapters from '../../../assets/data/blog/chapters';
import data from '../../../assets/data/blog/blogItems';

const MainComponent = () => {
  const [isChapterListOpen, setIsChapterListOpen] = useState(false);
  const [isBlogComicOpen, setIsBlogComicOpen] = useState(false);
  const [selectedComic, setSelectedComic] = useState(null);

  const handleChapterClick = (index) => {
    if (index === 0) { // Assuming comic1 is linked with Chapter 1
      setSelectedComic(data.posts[0].comicImage); // Use the correct index for comicImage
      setIsBlogComicOpen(true);
    }
  };

  const closeBlogComic = () => {
    setIsBlogComicOpen(false);
    setSelectedComic(null);
  };

  return (
    <div>
      <button onClick={() => setIsChapterListOpen(true)}>Show Chapters</button>
      {isChapterListOpen && (
        <BlogChapter
          onChapterClick={handleChapterClick}
          onClose={() => setIsChapterListOpen(false)}
        />
      )}
      {isBlogComicOpen && (
        <BlogComic
          comicImage={selectedComic}
          onClose={closeBlogComic}
        />
      )}
    </div>
  );
};

export default MainComponent;
