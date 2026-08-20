import { useState } from 'react';
import { Send } from 'lucide-react';

const AdmissionsPage = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    level: 'primary',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real app, send to backend API
    alert('Application submitted successfully! We will contact you soon.');
  };

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="container">
          <h1>Admissions</h1>
          <p>Join the Grace City International School Family</p>
        </div>
      </div>
      
      <div className="page-content container">
        <div className="admissions-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          
          <div className="admissions-info">
            <h2>Admission Process</h2>
            <ul className="process-list" style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
              <li style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem' }}>
                <div style={{ background: 'var(--primary-color)', color: 'white', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>1</div>
                <div>
                  <h4>Submit Inquiry</h4>
                  <p className="text-muted">Fill out the online application form to express your interest.</p>
                </div>
              </li>
              <li style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem' }}>
                <div style={{ background: 'var(--primary-color)', color: 'white', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>2</div>
                <div>
                  <h4>Entrance Assessment</h4>
                  <p className="text-muted">Your child will be scheduled for a CBT or written entrance exam depending on the level.</p>
                </div>
              </li>
              <li style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem' }}>
                <div style={{ background: 'var(--primary-color)', color: 'white', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>3</div>
                <div>
                  <h4>Interview</h4>
                  <p className="text-muted">A brief interactive session with the parents and child.</p>
                </div>
              </li>
            </ul>
            
            <div className="card" style={{ padding: '1.5rem', marginTop: '2rem' }}>
              <h3>Download Prospectus</h3>
              <p className="text-muted mb-4">Get detailed information about our curriculum and fees.</p>
              <button className="btn btn-outline" style={{ width: '100%' }}>Download PDF (2.4MB)</button>
            </div>
          </div>

          <div className="card form-card" style={{ padding: '2rem' }}>
            <h2>Online Inquiry Form</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Parent/Guardian Name</label>
                <input 
                  type="text" 
                  required
                  className="form-input" 
                  style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}
                  value={formData.parentName}
                  onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="form-input" 
                    style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    className="form-input" 
                    style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Child's Name</label>
                <input 
                  type="text" 
                  className="form-input" 
                  style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}
                  value={formData.childName}
                  onChange={(e) => setFormData({...formData, childName: e.target.value})}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Applying For</label>
                <select 
                  className="form-input" 
                  style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}
                  value={formData.level}
                  onChange={(e) => setFormData({...formData, level: e.target.value})}
                >
                  <option value="creche">Creche / Nursery</option>
                  <option value="primary">Primary School</option>
                  <option value="secondary">Secondary School</option>
                  <option value="tertiary">Tertiary / A-Levels</option>
                </select>
              </div>
              
              <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Submit Inquiry <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdmissionsPage;
