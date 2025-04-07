import React, { useEffect, useState } from 'react';
import { fetchNewsAPI } from '../utils/api';

const NewsCard = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const data = await fetchNewsAPI();
      setArticles(data);
    };

    getNews();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      {articles.map((article, index) => (
        <div
          key={index}
          className="bg-white text-black p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
        >
          <h3 className="text-lg font-bold">{article.title}</h3>
          <p className="text-sm text-gray-600 my-2">{article.description?.slice(0, 100)}...</p>
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline text-sm"
          >
            Read more
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;
