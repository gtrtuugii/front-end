import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TrendingArticles() {
  const [trendingArticles, setTrendingArticles] = useState([]);

  useEffect(() => {
    // Fetch trending articles data from an API
    const apiKey = 'EnterApiKey';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    axios.get(apiUrl)
      .then((response) => {
        setTrendingArticles(response.data.articles);
      })
      .catch((error) => {
        console.error('Error fetching trending articles:', error);
      });
  }, []);

  return (
    <div className="trending-articles">
      <h2>Trending Articles</h2>
      <div className="article-list">
        {trendingArticles.map((article, index) => (
          <div key={index} className="article">
            {article.urlToImage ? (
            <img className="art-img" src={article.urlToImage} alt={article.title} />
            ) : (
            <div className="no-image-placeholder">
                <i className="fa fa-chain-broken" aria-hidden="true"></i>
            </div>
            )}
            <div className="content">
              <h3>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  {article.title}
                </a>
              </h3>
              <p>{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingArticles;
