import React from 'react';
import ChapterListStyleWrapper from './BlogChapter.style';

const BlogChapter = ({ chapters, onChapterClick, onClose }) => {
  return (
    <ChapterListStyleWrapper>
      <div className="popup">
        <div className="popup-inner">
          <button className="close-btn" onClick={onClose}>X</button>
          {chapters.length > 0 ? (
            chapters.map((chapter, index) => (
              <div key={index} className="chapter-item" onClick={() => onChapterClick(index)}>
                <span className="chapter-title">{chapter.title}</span>
                <span className="chapter-date">{chapter.date}</span>
                <hr className="divider" />
              </div>
            ))
          ) : (
            <p>No chapters available</p>
          )}
        </div>
      </div>
    </ChapterListStyleWrapper>
  );
};

export default BlogChapter;
