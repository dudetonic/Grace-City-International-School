import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  image_url?: string;
  category?: string;
  published_date: string;
  slug?: string;
}

const CATEGORIES = ['All', 'General', 'Academics', 'Sports', 'Alumni', 'CBT Updates'];

const NewsGridPreview = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(7);

  useEffect(() => {
    fetch('http://localhost:8000/api/public/news/')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch news');
        return res.json();
      })
      .then(data => {
        setNews(Array.isArray(data) ? data : data.results || []);
        setLoading(false);
      })
      .catch(() => {
        // Fallback placeholder data for development
        setNews([
          { id: 1, title: 'Grace City Tops Regional Math Olympiad', excerpt: 'Our secondary school students claimed first place at the 2027 Regional Mathematics Olympiad, showcasing our commitment to academic excellence.', category: 'Academics', published_date: '2027-01-15', image_url: 'https://images.unsplash.com/photo-1596496050827-8299e0220de1?auto=format&fit=crop&q=80&w=600' },
          { id: 2, title: 'New STEM Lab Opening Ceremony', excerpt: 'Join us for the grand opening of our state-of-the-art STEM laboratory, designed to inspire the next generation of innovators.', category: 'General', published_date: '2027-01-10', image_url: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600' },
          { id: 3, title: 'Inter-House Sports Day Results', excerpt: 'Congratulations to all participants in this year\'s Inter-House Sports competition. See the full results and highlights.', category: 'Sports', published_date: '2027-01-08', image_url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=600' },
          { id: 4, title: 'Alumni Spotlight: Dr. Amara Obi', excerpt: 'Grace City alumnus Dr. Amara Obi shares her journey from our classrooms to leading research in biomedical engineering.', category: 'Alumni', published_date: '2027-01-05', image_url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600' },
          { id: 5, title: 'JAMB CBT Registration Now Open', excerpt: 'Registration is now open for the upcoming JAMB CBT examination at our accredited center. Secure your slot early.', category: 'CBT Updates', published_date: '2027-01-03', image_url: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=600' },
          { id: 6, title: 'Creche Section Wins Best Early Years Award', excerpt: 'Our Creche and Nursery section has been recognized as the Best Early Years Program in the region for outstanding child development.', category: 'Academics', published_date: '2027-01-01', image_url: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=600' },
        ]);
        setLoading(false);
      });
  }, []);

  const filtered = activeCategory === 'All' ? news : news.filter(n => n.category === activeCategory);
  const visible = filtered.slice(0, visibleCount);

  if (loading) {
    return (
      <section className="section container" aria-label="News and Announcements">
        <div className="section-header">
          <h2>News &amp; Announcements</h2>
        </div>
        <div className="news-loading">
          <div className="spinner" />
          <p>Loading latest news...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="section container" aria-label="News and Announcements">
      <div className="section-header">
        <h2>News &amp; Announcements</h2>
        <Link to="/news" className="btn btn-outline">View All</Link>
      </div>

      {/* Category Tabs */}
      <div className="category-tabs" role="tablist" aria-label="Filter news by category">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            className={`category-tab ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => { setActiveCategory(cat); setVisibleCount(7); }}
            role="tab"
            aria-selected={activeCategory === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* News Grid */}
      <div className="news-grid">
        {visible.map((item, idx) => (
          <article
            key={item.id}
            className={`news-card ${idx === 0 ? 'news-card-featured' : ''}`}
          >
            <div className="news-card-image" style={{ backgroundImage: `url(${item.image_url || 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600'})` }}>
              {item.category && <span className="news-badge">{item.category}</span>}
            </div>
            <div className="news-card-body">
              <time className="news-date">{new Date(item.published_date).toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' })}</time>
              <h3 className="news-card-title">{item.title}</h3>
              <p className="news-card-excerpt">{item.excerpt}</p>
              <Link to={`/news/${item.slug || item.id}`} className="news-read-more">
                Read More <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {visibleCount < filtered.length && (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button className="btn btn-outline" onClick={() => setVisibleCount(prev => prev + 6)}>
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default NewsGridPreview;
