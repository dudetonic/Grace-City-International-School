import { BookOpen, Heart, Shield, Users } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>About <span className="accent">Grace City International School</span></h1>
          <p>Building leaders of tomorrow through holistic education and uncompromising values.</p>
        </div>
      </div>

      {/* History, Mission & Vision Section */}
      <section className="about-section">
        <div className="container about-grid">
          <div className="about-text">
            <span className="section-label">Our Story</span>
            <h2>A Legacy of <span className="accent">Excellence</span></h2>
            <p>
              Founded in 2005, Grace City International School began with a simple vision: to create an environment where every child can discover their potential. From a modest beginning with just 50 students, we have grown into a premier educational institution, continuously adapting to global standards while staying true to our core principles.
            </p>
            
            <h3 style={{ marginTop: '32px', marginBottom: '16px', fontSize: '1.5rem', fontFamily: 'var(--font-display)', color: 'var(--primary)' }}>Our Mission</h3>
            <p>
              To provide a nurturing, safe, and stimulating environment that fosters academic excellence, moral integrity, and lifelong learning, empowering students to thrive in a diverse world.
            </p>

            <h3 style={{ marginTop: '32px', marginBottom: '16px', fontSize: '1.5rem', fontFamily: 'var(--font-display)', color: 'var(--primary)' }}>Our Vision</h3>
            <p>
              To be the leading educational institution recognized globally for producing innovative thinkers, compassionate leaders, and responsible citizens.
            </p>
          </div>
          <div className="about-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800" 
              alt="Students learning in a modern classroom" 
              className="about-image"
            />
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="feature-strip" aria-label="Our Core Values" style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-label" style={{ color: 'var(--text-white-muted)' }}>Core Values</span>
            <h2 style={{ color: 'var(--white)' }}>What We <span className="accent">Stand For</span></h2>
          </div>
          
          <div className="feature-strip-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            <div className="feature-item animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="feature-icon">
                <BookOpen size={24} />
              </div>
              <h4>Excellence</h4>
              <p>Striving for the highest standards in academics and character.</p>
            </div>
            
            <div className="feature-item animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="feature-icon">
                <Heart size={24} />
              </div>
              <h4>Compassion</h4>
              <p>Fostering empathy, respect, and kindness toward others.</p>
            </div>
            
            <div className="feature-item animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="feature-icon">
                <Shield size={24} />
              </div>
              <h4>Integrity</h4>
              <p>Upholding honesty and strong moral principles in all actions.</p>
            </div>
            
            <div className="feature-item animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="feature-icon">
                <Users size={24} />
              </div>
              <h4>Community</h4>
              <p>Building a supportive, inclusive, and collaborative environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Message Section */}
      <section style={{ padding: '80px 0', background: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ background: 'var(--white)', padding: '48px', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-md)', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ color: 'var(--accent)', marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1.5.5 1.5 1.5L5 21z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.5c0 1-.5 1.5-1.5 1.5L15 21z"/></svg>
            </div>
            <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--text-body)', marginBottom: '24px', lineHeight: '1.8' }}>
              "Education is not just about imparting knowledge; it is about inspiring a lifelong love of learning and building the character required to navigate a complex world. At Grace City International School, we are committed to equipping every student with the tools they need to succeed and make a positive impact."
            </p>
            <div>
              <h4 style={{ fontFamily: 'var(--font-display)', color: 'var(--primary)', fontSize: '1.1rem' }}>Dr. Sarah O. Williams</h4>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '1px' }}>Principal</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
