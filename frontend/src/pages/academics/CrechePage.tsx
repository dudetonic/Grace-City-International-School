import React from 'react';
import AcademicLevelPage from '../../components/academics/AcademicLevelPage';

const CrechePage: React.FC = () => {
  const pageProps = {
    levelName: 'Creche & Pre-Primary',
    ageRange: '0 - 5 Years',
    heroImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    introParagraph: 'Our Creche and Pre-Primary program offers a nurturing and stimulating environment where your child’s earliest developmental milestones are achieved. We fold Nursery and Pre-Primary education together to provide a seamless transition from infancy to early childhood learning. Through play-based learning and sensory exploration, we build a foundation for cognitive, social, and emotional growth.',
    curriculumHighlights: [
      'Sensory and Motor Skill Development',
      'Early Literacy and Numeracy (Phonics & Counting)',
      'Creative Arts and Music',
      'Social Skills and Emotional Intelligence',
      'Play-based Learning Centers'
    ],
    typicalDay: [
      { time: '07:30 AM', activity: 'Arrival, free play, and settling in' },
      { time: '08:30 AM', activity: 'Morning circle time (songs, stories, weather)' },
      { time: '09:00 AM', activity: 'Sensory play and structured learning activities' },
      { time: '10:00 AM', activity: 'Healthy morning snack' },
      { time: '10:30 AM', activity: 'Outdoor play and gross motor activities' },
      { time: '11:30 AM', activity: 'Creative arts (painting, building blocks)' },
      { time: '12:30 PM', activity: 'Lunch time' },
      { time: '01:30 PM', activity: 'Nap time / Quiet rest' },
      { time: '03:00 PM', activity: 'Afternoon snack and dismissal' }
    ]
  };

  return <AcademicLevelPage {...pageProps} />;
};

export default CrechePage;
