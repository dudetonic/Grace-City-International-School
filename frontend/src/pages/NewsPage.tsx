import { useState, useEffect } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface NewsItem {
  news_id: number;
  title: string;
  category: string;
  content: string;
  featured: boolean;
  published_at: string;
  status: string;
  author: number;
}

const NewsPage = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/public/news/')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch news');
        return res.json();
      })
      .then(data => {
        setNews(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);

        // Mock data fallback for demonstration if backend is not running
        setNews([
          {
            news_id: 1,
            title: "School Resumes for 2026/2027 Academic Session",
            category: "general",
            content: "Welcome back! The new academic session begins next Monday. All students are expected to resume promptly.",
            featured: true,
            published_at: new Date().toISOString(),
            status: "published",
            author: 1
          },
          {
            news_id: 2,
            title: "Outstanding IGCSE Results Announced",
            category: "academics",
            content: "Our students have once again achieved 100% distinction in the recent Cambridge IGCSE examinations.",
            featured: false,
            published_at: new Date(Date.now() - 86400000).toISOString(),
            status: "published",
            author: 1
          }
        ]);
      });
  }, []);

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="container">
          <h1>News & Announcements</h1>
          <p>Stay updated with the latest happenings at Grace City International School</p>
        </div>
      </div>
      <div className="page-content container">
        {loading && <div className="text-center p-8">Loading news...</div>}
        {error && !news.length && <div className="text-center text-error p-8">Error: {error}</div>}

        <div className="news-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {news.map(item => (
            <div key={item.news_id} className="card news-card">
              <div className="news-card-content" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span className="badge" style={{ background: 'var(--accent-color)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 600 }}>
                    {item.category.toUpperCase()}
                  </span>
                  <span className="text-muted" style={{ fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Calendar size={14} /> {new Date(item.published_at).toLocaleDateString()}
                  </span>
                </div>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>{item.title}</h3>
                <p className="text-muted" style={{ marginBottom: '1.5rem' }}>
                  {item.content.substring(0, 100)}...
                </p>
                <button className="btn btn-outline" style={{ width: '100%' }}>Read More <ArrowRight size={16} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
