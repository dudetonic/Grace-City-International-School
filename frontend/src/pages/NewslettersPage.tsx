import { FileText, Download } from 'lucide-react';

const NewslettersPage = () => {
  const newsletters = [
    { title: 'September 2026 - Back to School Edition', date: 'September 1, 2026', size: '1.2 MB' },
    { title: 'August 2026 - Summer Updates', date: 'August 15, 2026', size: '850 KB' },
    { title: 'July 2026 - End of Year Highlights', date: 'July 10, 2026', size: '2.1 MB' },
    { title: 'June 2026 - Academic Excellence', date: 'June 5, 2026', size: '1.5 MB' },
    { title: 'May 2026 - Sports & Extracurriculars', date: 'May 12, 2026', size: '1.8 MB' },
    { title: 'April 2026 - Spring Term Review', date: 'April 4, 2026', size: '1.1 MB' },
  ];

  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>School <span className="accent">Newsletters</span></h1>
          <p>Stay up to date with the latest news, events, and achievements from our community.</p>
        </div>
      </div>

      <section style={{ padding: 'var(--section-py) 0', background: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px' }}>
            {newsletters.map((newsletter, idx) => (
              <div 
                key={idx} 
                style={{
                  background: 'var(--white)',
                  padding: '24px',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  transition: 'var(--transition)'
                }}
                className="newsletter-card"
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ 
                    width: '48px', height: '48px', 
                    borderRadius: '50%', 
                    background: 'var(--cream)', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--primary)'
                  }}>
                    <FileText size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', lineHeight: '1.3' }}>{newsletter.title}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>{newsletter.date} • {newsletter.size}</p>
                  </div>
                </div>
                
                <button className="btn btn-outline" style={{ width: '100%', marginTop: 'auto', display: 'flex', justifyContent: 'center' }}>
                  <Download size={16} /> Download PDF
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewslettersPage;
