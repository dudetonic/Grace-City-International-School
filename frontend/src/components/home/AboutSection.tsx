import { ArrowRight, BookOpen, Heart, Shield, Users, Trophy, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="about-section" aria-labelledby="about-heading">
      <div className="container about-grid">
        <div className="about-text">
          <span className="section-label">About Our School</span>
          <h2 id="about-heading">
            A Legacy of <span className="accent">Academic Excellence</span>
          </h2>
          <p>
            For over two decades, Grace City International School has been at the forefront of providing holistic, world-class education. We believe in nurturing not just the intellect, but the character of every student who walks through our doors, preparing them for the challenges and opportunities of a globalized world.
          </p>
          <Link to="/about" className="btn btn-primary" style={{ marginBottom: '24px' }}>
            Learn More <ArrowRight size={16} />
          </Link>
          
          <div className="about-inline-stats">
            <div className="inline-stat">
              <div className="inline-stat-icon"><BookOpen size={20} /></div>
              <div className="inline-stat-data">
                <strong>Modern</strong>
                <span>Curriculum</span>
              </div>
            </div>
            <div className="inline-stat">
              <div className="inline-stat-icon"><Heart size={20} /></div>
              <div className="inline-stat-data">
                <strong>Pastoral</strong>
                <span>Care</span>
              </div>
            </div>
            <div className="inline-stat">
              <div className="inline-stat-icon"><Shield size={20} /></div>
              <div className="inline-stat-data">
                <strong>Safe</strong>
                <span>Environment</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=800" 
            alt="Grace City International School campus building" 
            className="about-image"
          />
          
          <div className="about-stat-cards">
            <div className="about-stat-card">
              <div className="about-stat-card-icon"><Users size={18} /></div>
              <div className="about-stat-card-data">
                <strong>1,200+</strong>
                <span>Students</span>
              </div>
            </div>
            <div className="about-stat-card">
              <div className="about-stat-card-icon"><GraduationCap size={18} /></div>
              <div className="about-stat-card-data">
                <strong>98%</strong>
                <span>Pass Rate</span>
              </div>
            </div>
            <div className="about-stat-card">
              <div className="about-stat-card-icon"><Trophy size={18} /></div>
              <div className="about-stat-card-data">
                <strong>50+</strong>
                <span>Awards Won</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
