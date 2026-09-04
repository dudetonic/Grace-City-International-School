import React from 'react';

interface TypicalDayItem {
  time: string;
  activity: string;
}

interface AcademicLevelPageProps {
  levelName: string;
  ageRange: string;
  heroImage: string;
  introParagraph: string;
  curriculumHighlights: string[];
  typicalDay: TypicalDayItem[];
}

const AcademicLevelPage: React.FC<AcademicLevelPageProps> = ({
  levelName,
  ageRange,
  heroImage,
  introParagraph,
  curriculumHighlights,
  typicalDay,
}) => {
  return (
    <div className="academic-level-page">
      {/* Hero Section */}
      <section className="hero-section" style={{ padding: '60px 0', background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="hero-grid" style={{ alignItems: 'center' }}>
            <div className="hero-text animate-fade-in-up">
              <span className="section-label">Academics</span>
              <h1 style={{ fontSize: '3rem', marginBottom: '16px' }}>{levelName}</h1>
              <p style={{ fontWeight: 600, color: 'var(--accent)', fontSize: '1.2rem', marginBottom: '24px' }}>
                Ages: {ageRange}
              </p>
              <p>{introParagraph}</p>
            </div>
            <div className="hero-image-wrapper animate-fade-in">
              <img src={heroImage} alt={`${levelName} Students`} className="hero-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section style={{ padding: 'var(--section-py) 0', background: 'var(--white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2>Curriculum <span className="accent">Highlights</span></h2>
            <p style={{ maxWidth: '600px', margin: '16px auto 0', color: 'var(--text-body)' }}>
              Core focus areas designed to foster academic excellence and personal growth.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {curriculumHighlights.map((highlight, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--cream)',
                  padding: '30px',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'var(--primary)',
                  color: 'var(--accent)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  marginBottom: '16px'
                }}>
                  {idx + 1}
                </div>
                <h4 style={{ fontSize: '1.1rem' }}>{highlight}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A Typical Day */}
      <section style={{ padding: 'var(--section-py) 0', background: 'var(--primary)', color: 'var(--white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ color: 'var(--white)' }}>A Typical <span style={{ color: 'var(--accent)' }}>Day</span></h2>
            <p style={{ color: 'var(--text-white-muted)', marginTop: '16px' }}>What our students experience daily.</p>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {typicalDay.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  borderBottom: idx !== typicalDay.length - 1 ? '1px solid var(--border-light)' : 'none',
                  padding: '20px 0',
                  gap: '30px'
                }}
              >
                <div style={{
                  fontWeight: 700,
                  color: 'var(--accent)',
                  width: '120px',
                  flexShrink: 0
                }}>
                  {item.time}
                </div>
                <div style={{ color: 'var(--text-white)' }}>
                  {item.activity}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ padding: '60px 0', textAlign: 'center', background: 'var(--bg-light)' }}>
        <div className="container">
          <h2>Ready to Join Us?</h2>
          <p style={{ margin: '20px auto 30px', maxWidth: '500px' }}>
            Discover how our {levelName} program can set your child on a path to lifelong success.
          </p>
          <a href="/admissions" className="btn btn-primary">Apply Now</a>
        </div>
      </section>
    </div>
  );
};

export default AcademicLevelPage;
