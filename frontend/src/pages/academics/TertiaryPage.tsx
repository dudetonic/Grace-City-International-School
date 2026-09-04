import React from 'react';
import AcademicLevelPage from '../../components/academics/AcademicLevelPage';

const TertiaryPage: React.FC = () => {
  const pageProps = {
    levelName: 'Tertiary & University Prep',
    ageRange: '16+ Years (A-Levels / Foundation)',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    introParagraph: 'The Tertiary Preparation Program is designed for students seeking advanced qualifications like Cambridge A-Levels or foundation programs for top universities locally and internationally. The curriculum emphasizes independent study, research skills, and critical analysis, bridging the gap between secondary education and university life.',
    curriculumHighlights: [
      'Cambridge A-Levels & International Foundation Programs',
      'Advanced Research and Academic Writing',
      'University Admissions Counseling & Exam Prep (SAT, IELTS)',
      'Global Perspectives and Critical Thinking',
      'Internships and Professional Development Workshops'
    ],
    typicalDay: [
      { time: '08:00 AM', activity: 'Independent study and tutorial prep' },
      { time: '09:00 AM', activity: 'Advanced Subject Lecture 1' },
      { time: '11:00 AM', activity: 'Seminar / Group Discussion' },
      { time: '12:30 PM', activity: 'Lunch and Networking' },
      { time: '01:30 PM', activity: 'Advanced Subject Lecture 2' },
      { time: '03:00 PM', activity: 'University Guidance Counseling / Workshops' },
      { time: '04:30 PM', activity: 'Library Research and Dismissal' }
    ]
  };

  return <AcademicLevelPage {...pageProps} />;
};

export default TertiaryPage;
