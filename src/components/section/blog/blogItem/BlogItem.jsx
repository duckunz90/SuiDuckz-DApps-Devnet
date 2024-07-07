import React, { useState } from 'react';
import BlogChapter from '../blogChapter/BlogChapter';
import BlogItemStyleWrapper from './BlogItem.style';
import BlogComic from '../blogComic/BlogComic';

const BlogItem = ({ post }) => {
  const [isChapterListOpen, setIsChapterListOpen] = useState(false);
  const [isBlogComicOpen, setIsBlogComicOpen] = useState(false);
  const [selectedComic, setSelectedComic] = useState(null);

  const handleOpenChapterList = () => {
    setIsChapterListOpen(true);
  };

  const handleChapterClick = (index) => {
    const comic = post.chapters[index].comicImage;
    setSelectedComic(comic);
    setIsChapterListOpen(false); // Close chapter list popup
    setIsBlogComicOpen(true); // Open comic popup
  };

  const handleCloseComic = () => {
    setIsBlogComicOpen(false);
    setSelectedComic(null);
  };

  return (
    <BlogItemStyleWrapper className="single_blog_item">
      <div className="blog_thumb" onClick={handleOpenChapterList}>
        <a href="#!">
          <img src={post.thumbnail} alt="suiduckz nft blog" />
        </a>
      </div>
      <div className="blog_content">
        <div className="blog_meta">
          {post.categories?.map((category, i) => (
            <a key={i} href="#!" className="category_title">
              {i > 0 ? ", " : ""}
              {category.title}
            </a>
          ))}
          <span className="time_stamp">{post.timeStamp}</span>
        </div>

        <a className="blog_title" href="#!" onClick={handleOpenChapterList}>
          {post.title}
        </a>
        <div className="content">
          <p>{post.excerpt}</p>
        </div>
        <div className="blog_footer">
          <div className="read_more_btn">
            <a href="#!" onClick={handleOpenChapterList}> Read more</a>
          </div>
        </div>
      </div>
      {isChapterListOpen && <BlogChapter chapters={post.chapters} onChapterClick={handleChapterClick} onClose={() => setIsChapterListOpen(false)} />}
      {isBlogComicOpen && <BlogComic comicImage={selectedComic} onClose={handleCloseComic} />}
    </BlogItemStyleWrapper>
  );
};

export default BlogItem;
