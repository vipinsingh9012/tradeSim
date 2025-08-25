import React, { useEffect, useState } from 'react';
import NewsFeed from '../components/NewsFeed';

const NewsPage: React.FC = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            // Fetch news data from the NewsFeed component
            const newsData = await NewsFeed.fetchNews();
            setNews(newsData);
        };

        fetchNews();
    }, []);

    return (
        <div className="news-page">
            <h1>Stock Market News</h1>
            <ul>
                {news.map((item, index) => (
                    <li key={index}>
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                            {item.title}
                        </a>
                        <p>{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsPage;