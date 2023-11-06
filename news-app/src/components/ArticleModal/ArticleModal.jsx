import React from 'react';

function ArticleModal({ article, onClose, onPrevClick, onNextClick, currentIndex, totalArticles }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">{article.title}</h2>
        </div>
        <div className="modal-content">
            <div className="modal-media">
                
            <div className="modal-media">
                {currentIndex > 0 && (
                <button className="modal-nav-button prev" onClick={onPrevClick}>
                    <i className="fa fa-chevron-left" aria-hidden="true"></i>
                </button>
                )}
                <img className="modal-image" src={article.urlToImage} alt={article.title} />
                {currentIndex < totalArticles - 1 && (
                <button className="modal-nav-button next" onClick={onNextClick}>
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </button>
                )}
            </div>
            </div>

          <p className="modal-context">{article.content}</p>
        </div>
      </div>
    </div>
  );
}

export default ArticleModal;
