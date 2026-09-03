import { CalendarDays, Users, Award, FileCheck, GraduationCap } from 'lucide-react';

const stats = [
  { id: 1, icon: <CalendarDays size={32} />, number: '28+', label: 'Years of Excellence' },
  { id: 2, icon: <Users size={32} />, number: '1,200', label: 'Students Enrolled' },
  { id: 3, icon: <Award size={32} />, number: '150+', label: 'Qualified Staff' },
  { id: 4, icon: <FileCheck size={32} />, number: '99%', label: 'JAMB Pass Rate' },
  { id: 5, icon: <GraduationCap size={32} />, number: '95%', label: 'University Acceptance' }
];

const StatsBanner = () => {
  return (
    <section className="stats-banner" aria-label="School Statistics">
      <div className="container stats-grid">
        {stats.map(stat => (
          <div key={stat.id} className="stat-item">
            <div className="stat-icon" aria-hidden="true">
              {stat.icon}
            </div>
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBanner;
