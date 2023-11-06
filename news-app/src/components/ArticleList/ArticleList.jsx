import React from 'react';

function ArticleList({ articles, onArticleClick }) {
  return (
    <div className="article-list">
      {articles.map((article, index) => (
        <div key={index} className="article" onClick={() => onArticleClick(article)}>
          <img src={article.urlToImage} alt={article.title} />
          <div className="content">
            <h3>{article.title}</h3>
            <p>{article.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArticleList;
