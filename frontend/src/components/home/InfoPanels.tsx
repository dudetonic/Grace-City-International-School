import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaLaptopCode, FaShieldAlt, FaFutbol } from 'react-icons/fa';

const panels = [
  {
    id: 'admissions',
    icon: <FaGraduationCap size={40} />,
    title: 'Admissions',
    description: 'Grace City International School is now accepting applications for the 2027/2028 academic session across all levels — Creche, Nursery, Primary, Secondary, and Tertiary preparatory programs.',
    ctaText: 'Start Your Application',
    ctaLink: '/admissions',
    extraCta: { text: 'Download Prospectus', href: '#' },
    bgClass: 'panel-light',
  },
  {
    id: 'jamb-cbt',
    icon: <FaLaptopCode size={40} />,
    title: 'JAMB CBT Center',
    description: 'Our fully accredited JAMB CBT center features lockdown browser technology, uninterruptible power supply, and dedicated supervisors. Practice with our mock exam platform before the real day.',
    ctaText: 'Learn More',
    ctaLink: '/jamb-cbt',
    bgClass: 'panel-primary',
  },
  {
    id: 'safeguarding',
    icon: <FaShieldAlt size={40} />,
    title: 'Safeguarding & Support',
    description: 'The safety and well-being of every child is our top priority. Our trained safeguarding team, anti-bullying policy, and student counselling services ensure a supportive learning environment.',
    ctaText: 'Our Policies',
    ctaLink: '/policies',
    bgClass: 'panel-light',
  },
  {
    id: 'clubs',
    icon: <FaFutbol size={40} />,
    title: 'School Clubs & Extracurriculars',
    description: 'From robotics to football, debate club to drama, Grace City offers a wide range of extracurricular activities that help students discover their passions and develop leadership skills.',
    ctaText: 'Explore Activities',
    ctaLink: '/clubs',
    bgClass: 'panel-accent',
  }
];

const InfoPanels = () => {
  return (
    <section className="info-panels-section" aria-label="School information panels">
      {panels.map((panel) => (
        <div key={panel.id} className={`info-panel ${panel.bgClass}`}>
          <div className="container info-panel-inner">
            <div className="info-panel-icon">{panel.icon}</div>
            <div className="info-panel-content">
              <h3>{panel.title}</h3>
              <p>{panel.description}</p>
              <div className="info-panel-ctas">
                <Link to={panel.ctaLink} className="btn btn-panel">
                  {panel.ctaText} <ArrowRight size={16} />
                </Link>
                {panel.extraCta && (
                  <a href={panel.extraCta.href} className="btn btn-panel-secondary" download>
                    {panel.extraCta.text}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default InfoPanels;
