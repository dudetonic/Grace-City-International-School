import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Calendar, BookOpen, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80',
    title: 'Welcome to Grace City International School',
    subtitle: 'Nurturing Global Leaders for Tomorrow',
    ctaText: 'Apply for 2027 Admission',
    ctaLink: '/admissions'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80',
    title: 'Excellence in Academics',
    subtitle: 'Outstanding Results in WAEC, IGCSE & JAMB CBT',
    ctaText: 'View Our Results',
    ctaLink: '/academics'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80',
    title: 'Holistic Development',
    subtitle: 'State-of-the-art facilities for sports and extracurriculars',
    ctaText: 'Take a Virtual Tour',
    ctaLink: '/tour'
  }
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="home-page">
      {/* Hero Slider */}
      <section className="hero-slider">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `linear-gradient(rgba(15, 32, 39, 0.7), rgba(15, 32, 39, 0.7)), url(${slide.image})` }}
          >
            <div className="container slide-content text-center">
              <h1 className="animate-fade-in slide-title">{slide.title}</h1>
              <p className="animate-fade-in slide-subtitle" style={{ animationDelay: '0.2s' }}>{slide.subtitle}</p>
              <Link 
                to={slide.ctaLink} 
                className="btn btn-accent animate-fade-in" 
                style={{ animationDelay: '0.4s', marginTop: '2rem' }}
              >
                {slide.ctaText} <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        ))}
        
        <button className="slider-control prev" onClick={prevSlide}><ChevronLeft size={32} /></button>
        <button className="slider-control next" onClick={nextSlide}><ChevronRight size={32} /></button>
        
        <div className="slider-dots">
          {slides.map((_, idx) => (
            <button 
              key={idx} 
              className={`dot ${idx === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
            />
          ))}
        </div>
      </section>

      {/* Quick Links / Highlights */}
      <section className="highlights container" style={{ marginTop: '-4rem', position: 'relative', zIndex: 10 }}>
        <div className="highlights-grid">
          <div className="card highlight-card">
            <BookOpen size={40} className="icon-primary" />
            <h3>Academics</h3>
            <p>Comprehensive curriculum from Creche to Tertiary level preparation.</p>
          </div>
          <div className="card highlight-card highlight-accent">
            <Calendar size={40} className="icon-white" />
            <h3>Admissions Open</h3>
            <p>Secure a spot for your child in our upcoming academic session.</p>
          </div>
          <div className="card highlight-card">
            <Trophy size={40} className="icon-primary" />
            <h3>CBT Center</h3>
            <p>Accredited JAMB CBT center with lockdown browser technology.</p>
          </div>
        </div>
      </section>
      
      {/* Latest News & Events Preview Placeholder */}
      <section className="section container">
        <div className="section-header">
          <h2>Latest News & Announcements</h2>
          <Link to="/news" className="btn btn-outline">View All</Link>
        </div>
        <div className="placeholder-box">News components will go here</div>
      </section>
    </div>
  );
};

export default HomePage;
