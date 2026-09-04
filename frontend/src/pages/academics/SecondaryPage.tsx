import React from 'react';
import AcademicLevelPage from '../../components/academics/AcademicLevelPage';

const SecondaryPage: React.FC = () => {
  const pageProps = {
    levelName: 'Secondary School',
    ageRange: '12 - 17 Years',
    heroImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    introParagraph: 'Our Secondary School prepares students for global challenges by providing rigorous academics alongside dedicated WAEC and JAMB preparatory tracks. Students engage in advanced scientific, humanistic, and technical subjects that cultivate independent thinking, leadership qualities, and academic excellence ahead of their tertiary journey.',
    curriculumHighlights: [
      'Intensive WAEC, NECO, and JAMB Preparation',
      'Advanced STEM (Science, Technology, Engineering, Math)',
      'Business, Arts, and Humanities Tracks',
      'Leadership and Entrepreneurship Modules',
      'Career Counseling and Mentorship'
    ],
    typicalDay: [
      { time: '07:45 AM', activity: 'Registration and Form Time' },
      { time: '08:00 AM', activity: 'Core Subject Block 1 (Math / English)' },
      { time: '09:30 AM', activity: 'Core Subject Block 2 (Sciences / Arts)' },
      { time: '10:50 AM', activity: 'Morning Break' },
      { time: '11:15 AM', activity: 'Electives and Track-specific Subjects' },
      { time: '12:35 PM', activity: 'Lunch Break' },
      { time: '01:20 PM', activity: 'Practical Labs / Project Work' },
      { time: '02:40 PM', activity: 'Exam Prep (WAEC/JAMB focus)' },
      { time: '03:30 PM', activity: 'Clubs, Sports, and Dismissal' }
    ]
  };

  return <AcademicLevelPage {...pageProps} />;
};

export default SecondaryPage;
