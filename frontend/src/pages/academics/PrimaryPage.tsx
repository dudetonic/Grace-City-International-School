import React from 'react';
import AcademicLevelPage from '../../components/academics/AcademicLevelPage';

const PrimaryPage: React.FC = () => {
  const pageProps = {
    levelName: 'Primary School',
    ageRange: '6 - 11 Years',
    heroImage: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    introParagraph: 'Our Primary School program fosters curiosity and instills a love for lifelong learning. We offer a robust curriculum that balances foundational academics with extracurricular enrichment. Students develop critical thinking, collaborate on engaging projects, and build character in a supportive and disciplined environment.',
    curriculumHighlights: [
      'Comprehensive Mathematics and Literacy',
      'Integrated Science and Technology',
      'History, Geography, and Social Studies',
      'Physical Education and Wellbeing',
      'Introduction to Foreign Languages and Coding'
    ],
    typicalDay: [
      { time: '07:45 AM', activity: 'Morning assembly and character talks' },
      { time: '08:15 AM', activity: 'Numeracy / Mathematics block' },
      { time: '09:30 AM', activity: 'Literacy / Language Arts block' },
      { time: '10:45 AM', activity: 'Mid-morning break and snack' },
      { time: '11:15 AM', activity: 'Science / Humanities' },
      { time: '12:30 PM', activity: 'Lunch and outdoor recess' },
      { time: '01:30 PM', activity: 'Arts, Music, or Physical Education' },
      { time: '02:30 PM', activity: 'Reading time and homework prep' },
      { time: '03:15 PM', activity: 'Dismissal or extracurricular clubs' }
    ]
  };

  return <AcademicLevelPage {...pageProps} />;
};

export default PrimaryPage;
