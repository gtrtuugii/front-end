import React, { useState, useEffect } from 'react';
import axios from 'axios';
import KeywordInput from './components/KeywordInput/KeywordInput';
import ArticleList from './components/ArticleList/ArticleList';
import ArticleModal from './components/ArticleModal/ArticleModal';
import TrendingArticles from './components/TrendingArticles/TrendingArticles';

function App() {
  const [keyword, setKeyword] = useState('');
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);

  // const resultsPerPage = 10; 

  useEffect(() => {
    if (keyword) {
      // Define your API endpoint and API key
      const apiKey = 'Enter API Key';
      const apiUrl = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${apiKey}`;

      axios.get(apiUrl)
        .then((response) => {
          setArticles(response.data.articles);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [keyword]);

  const handleSearch = (searchKeyword) => {
    setKeyword(searchKeyword);
  };

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  const closeModal = () => {
    setSelectedArticle(null);
  };

  const handlePrevArticle = () => {
    if (currentArticleIndex > 0) {
      setCurrentArticleIndex(currentArticleIndex - 1);
      setSelectedArticle(articles[currentArticleIndex - 1]);
    }
  };
  
  const handleNextArticle = () => {
    if (currentArticleIndex < articles.length - 1) {
      setCurrentArticleIndex(currentArticleIndex + 1);
      setSelectedArticle(articles[currentArticleIndex + 1]);
    }
  };

  return (
    <div className="App">
      <h1>Let's catch up on some news.</h1>
      <KeywordInput onSearch={handleSearch} />
      {keyword ? (
        <ArticleList articles={articles} onArticleClick={handleArticleClick} />
      ) : (
        <TrendingArticles />
      )}
      {selectedArticle && (
        <ArticleModal article={selectedArticle} 
        onClose={closeModal}           
        onPrevClick={handlePrevArticle}
        onNextClick={handleNextArticle}
        currentIndex={currentArticleIndex}
        totalArticles={articles.length}
        />
      )}
    </div>
  );
}

export default App;
