
const UniformPage = () => {
  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>School <span className="accent">Uniform</span></h1>
          <p>Dress code requirements for all academic sections.</p>
        </div>
      </div>

      <section style={{ padding: 'var(--section-py) 0', background: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          
          <div style={{ marginBottom: '48px' }}>
            <span className="section-label">Dress Code</span>
            <h2 style={{ marginBottom: '24px' }}>Uniform <span className="accent">Guidelines</span></h2>
            <p style={{ lineHeight: '1.8' }}>
              We believe that a school uniform fosters a sense of belonging, equality, and pride in Grace City International School. 
              Students are expected to wear the correct uniform at all times, keeping it clean, neat, and well-maintained.
            </p>
          </div>

          {/* Creche & Nursery */}
          <div style={{ marginBottom: '40px', padding: '32px', background: 'var(--bg-light)', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '16px', fontFamily: 'var(--font-display)' }}>Creche & Pre-Primary</h3>
            <ul style={{ listStyleType: 'disc', paddingLeft: '24px', lineHeight: '1.8', color: 'var(--text-body)' }}>
              <li>School branded yellow polo shirt</li>
              <li>Navy blue comfortable shorts (Boys) / Navy blue skorts (Girls)</li>
              <li>White ankle socks</li>
              <li>Black velcro shoes or comfortable trainers</li>
              <li>School branded cardigan (Navy blue)</li>
            </ul>
          </div>

          {/* Primary */}
          <div style={{ marginBottom: '40px', padding: '32px', background: 'var(--bg-light)', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '16px', fontFamily: 'var(--font-display)' }}>Primary School</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
              <div>
                <h4 style={{ fontSize: '1rem', marginBottom: '12px', color: 'var(--primary-light)' }}>Boys</h4>
                <ul style={{ listStyleType: 'disc', paddingLeft: '24px', lineHeight: '1.8', color: 'var(--text-body)' }}>
                  <li>White short-sleeved shirt with school logo</li>
                  <li>Navy blue tailored trousers or shorts</li>
                  <li>School tie (Navy blue with gold stripes)</li>
                  <li>Navy blue socks</li>
                  <li>Black leather lace-up shoes</li>
                </ul>
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', marginBottom: '12px', color: 'var(--primary-light)' }}>Girls</h4>
                <ul style={{ listStyleType: 'disc', paddingLeft: '24px', lineHeight: '1.8', color: 'var(--text-body)' }}>
                  <li>White short-sleeved blouse with school logo</li>
                  <li>Navy blue pleated skirt or pinafore</li>
                  <li>School tie (Navy blue with gold stripes)</li>
                  <li>White knee-high socks</li>
                  <li>Black leather buckle or lace-up shoes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Secondary */}
          <div style={{ marginBottom: '40px', padding: '32px', background: 'var(--bg-light)', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '16px', fontFamily: 'var(--font-display)' }}>Secondary & Tertiary</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
              <div>
                <h4 style={{ fontSize: '1rem', marginBottom: '12px', color: 'var(--primary-light)' }}>Boys</h4>
                <ul style={{ listStyleType: 'disc', paddingLeft: '24px', lineHeight: '1.8', color: 'var(--text-body)' }}>
                  <li>White long-sleeved shirt</li>
                  <li>Charcoal grey tailored trousers</li>
                  <li>School blazer with embroidered crest</li>
                  <li>Senior school tie</li>
                  <li>Dark grey or black socks</li>
                  <li>Black leather formal shoes</li>
                </ul>
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', marginBottom: '12px', color: 'var(--primary-light)' }}>Girls</h4>
                <ul style={{ listStyleType: 'disc', paddingLeft: '24px', lineHeight: '1.8', color: 'var(--text-body)' }}>
                  <li>White long-sleeved blouse</li>
                  <li>Charcoal grey tailored skirt (below knee)</li>
                  <li>School blazer with embroidered crest</li>
                  <li>Senior school tie</li>
                  <li>White ankle or knee-high socks / opaque tights</li>
                  <li>Black leather formal shoes (low heel)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* PE Kit */}
          <div style={{ padding: '32px', background: 'var(--cream)', borderRadius: 'var(--radius-lg)', borderLeft: '4px solid var(--accent)' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '16px', fontFamily: 'var(--font-display)' }}>Physical Education (PE) Kit</h3>
            <p style={{ marginBottom: '12px' }}>Required for all students (Primary through Secondary):</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '24px', lineHeight: '1.8', color: 'var(--text-body)' }}>
              <li>House color polo shirt (Red, Blue, Green, or Yellow)</li>
              <li>Navy blue sports shorts or track pants</li>
              <li>White sports socks</li>
              <li>Appropriate athletic trainers (non-marking soles)</li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
};

export default UniformPage;
