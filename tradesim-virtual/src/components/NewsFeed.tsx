import React, { useEffect, useState } from 'react';

const NewsFeed: React.FC = () => {
    const [news, setNews] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('https://newsapi.org/v2/everything?q=stock market&apiKey=YOUR_API_KEY');
                const data = await response.json();
                setNews(data.articles);
            } catch (error) {
                console.error('Error fetching news:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) {
        return <div>Loading news...</div>;
    }

    return (
        <div className="news-feed">
            <h2>Stock Market News</h2>
            <ul>
                {news.map((article, index) => (
                    <li key={index}>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                            <h3>{article.title}</h3>
                            <p>{article.description}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsFeed;