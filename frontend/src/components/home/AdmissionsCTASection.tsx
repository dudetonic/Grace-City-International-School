import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';

const AdmissionsCTASection = () => {
  return (
    <section className="admissions-cta" aria-labelledby="admissions-heading">
      {/* Decorative background element */}
      <div 
        className="admissions-bg-pattern" 
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          opacity: 0.03,
          backgroundImage: 'radial-gradient(circle at 2px 2px, #0A1F44 1px, transparent 0)',
          backgroundSize: '32px 32px',
          zIndex: 0,
          pointerEvents: 'none'
        }}
        aria-hidden="true"
      />

      <div className="container admissions-cta-grid" style={{ position: 'relative', zIndex: 1 }}>
        <div className="admissions-cta-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800" 
            alt="Students engaged in a classroom discussion" 
            className="admissions-cta-image"
          />
        </div>

        <div className="admissions-cta-text">
          <span className="section-label">Admissions</span>
          <h2 id="admissions-heading">Begin Your Child's Journey With Us</h2>
          <p>
            We are currently accepting applications for the upcoming academic session. Join our vibrant community where every student is empowered to achieve their full potential. Spaces are limited, so we encourage early applications to secure a place for your child.
          </p>
          <div className="admissions-cta-buttons">
            <Link to="/admissions" className="btn btn-accent">
              Apply Now <ArrowRight size={16} />
            </Link>
            <Link to="/admissions?tab=tour" className="btn btn-outline">
              <Calendar size={16} /> Schedule a Tour
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsCTASection;
