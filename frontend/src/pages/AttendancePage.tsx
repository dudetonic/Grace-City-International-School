import React from 'react';

const AttendancePage = () => {
  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Attendance & <span className="accent">Absence</span></h1>
          <p>Our policies for maintaining consistent student engagement and how to report absences.</p>
        </div>
      </div>

      <section style={{ padding: 'var(--section-py) 0', background: 'var(--white)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-label">Our Policy</span>
            <h2 style={{ marginBottom: '24px' }}>Every Day <span className="accent">Counts</span></h2>
            <p style={{ marginBottom: '16px', lineHeight: '1.8' }}>
              At Grace City International School, we believe that regular attendance is crucial to your child's academic success and overall well-being. Consistent attendance allows students to fully engage with the curriculum, participate in classroom discussions, and build strong social connections with their peers.
            </p>
            <p style={{ marginBottom: '32px', lineHeight: '1.8' }}>
              We expect all students to maintain an attendance rate of at least 95%. Extended or frequent absences can disrupt the learning process. If you know in advance that your child will be absent, please inform the school as early as possible.
            </p>

            <div style={{ background: 'var(--cream)', padding: '32px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ marginBottom: '16px', color: 'var(--primary)', fontFamily: 'var(--font-display)' }}>How to Report an Absence</h3>
              <p style={{ marginBottom: '16px' }}>If your child is unwell or unable to attend school, please follow these steps before 8:00 AM on the day of absence:</p>
              
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '24px', color: 'var(--text-body)' }}>
                <li style={{ marginBottom: '8px' }}>Call the Main Office at <strong>+234 123 456 7890</strong></li>
                <li style={{ marginBottom: '8px' }}>Or email <strong>attendance@gracecityschool.edu</strong></li>
              </ul>
              
              <p style={{ fontWeight: 600, marginBottom: '8px' }}>Please provide the following information:</p>
              <ul style={{ listStyleType: 'circle', paddingLeft: '20px', color: 'var(--text-body)' }}>
                <li>Student's full name</li>
                <li>Student's class/grade</li>
                <li>Reason for absence</li>
                <li>Expected date of return</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AttendancePage;
