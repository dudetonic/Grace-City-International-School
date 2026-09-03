import { ArrowRight, Play, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero-section" aria-label="Hero Section">
      <div className="container hero-grid">
        <div className="hero-text">
          <h1 className="animate-fade-in-up">
            Raising Global Leaders
            <span className="accent">Through Excellence</span>
          </h1>
          <p className="animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            Grace City International School provides a world-class education from early childhood through to pre-university levels, integrating academic rigor with strong character development in a safe, inspiring environment.
          </p>
          <div className="hero-buttons animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/admissions" className="btn btn-primary">
              Discover GCIS <ArrowRight size={18} />
            </Link>
            <button className="btn btn-outline" aria-label="Watch Video">
              <Play size={18} /> Watch Video
            </button>
          </div>
        </div>

        <div className="hero-image-wrapper animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800" 
            alt="Students collaborating at Grace City International School" 
            className="hero-image"
          />
          <div className="hero-badge">
            <div className="hero-badge-icon">
              <Award size={24} />
            </div>
            <div className="hero-badge-text">
              Established
              <strong>Since 1995</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
