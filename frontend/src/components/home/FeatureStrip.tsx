import { BookOpen, Users, Monitor, Globe, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <BookOpen size={24} />,
    title: 'Multi-Level Education',
    description: 'From Creche to Tertiary, we offer seamless academic progression.'
  },
  {
    icon: <Users size={24} />,
    title: 'Expert Educators',
    description: 'Our faculty is comprised of passionate, highly qualified teachers.'
  },
  {
    icon: <Monitor size={24} />,
    title: 'JAMB CBT Readiness',
    description: 'State-of-the-art CBT center for exam preparation and success.'
  },
  {
    icon: <Globe size={24} />,
    title: 'Global Standards',
    description: 'Curriculum designed to meet and exceed international benchmarks.'
  },
  {
    icon: <ShieldCheck size={24} />,
    title: 'Safe Campus',
    description: 'A secure, nurturing environment where students thrive safely.'
  }
];

const FeatureStrip = () => {
  return (
    <section className="feature-strip" aria-label="Our Core Features">
      <div className="container feature-strip-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-item animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="feature-icon">
              {feature.icon}
            </div>
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureStrip;
