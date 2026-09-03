import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const programs = [
  {
    id: 'creche',
    title: 'Creche',
    desc: 'A safe, nurturing environment focused on early sensory and motor development.',
    ageRange: '3 Months - 2 Years',
    image: 'https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?auto=format&fit=crop&q=80&w=400',
    link: '/academics/creche'
  },
  {
    id: 'nursery',
    title: 'Nursery',
    desc: 'Play-based learning introducing foundational literacy and numeracy skills.',
    ageRange: '2 - 5 Years',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=400',
    link: '/academics/nursery'
  },
  {
    id: 'primary',
    title: 'Primary',
    desc: 'Building strong academic foundations while encouraging curiosity and creativity.',
    ageRange: '5 - 11 Years',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400',
    link: '/academics/primary'
  },
  {
    id: 'secondary',
    title: 'Secondary',
    desc: 'Rigorous preparation for WAEC, NECO, and IGCSE examinations.',
    ageRange: '11 - 16 Years',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=400',
    link: '/academics/secondary'
  },
  {
    id: 'tertiary',
    title: 'Tertiary & A-Levels',
    desc: 'Advanced preparatory programs and JAMB CBT readiness for university admissions.',
    ageRange: '16+ Years',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400',
    link: '/academics/tertiary'
  }
];

const ProgramsSection = () => {
  return (
    <section className="programs-section" aria-labelledby="programs-heading">
      <div className="container">
        <div className="section-center">
          <span className="section-label">Academics</span>
          <h2 id="programs-heading">Our Educational Journey</h2>
          <p>We offer a continuous, comprehensive curriculum that guides students from their first steps to their transition into higher education.</p>
        </div>

        <div className="programs-grid">
          {programs.map((prog) => (
            <Link key={prog.id} to={prog.link} className="program-card">
              <div 
                className="program-card-image" 
                style={{ backgroundImage: `url(${prog.image})` }}
                aria-hidden="true"
              />
              <div className="program-card-body">
                <h4>{prog.title}</h4>
                <p>{prog.desc}</p>
                <span className="program-level">{prog.ageRange}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link to="/academics" className="btn btn-primary">
            View All Programs <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
