const logos = [
  { name: 'WAEC', alt: 'West African Examinations Council' },
  { name: 'Cambridge', alt: 'Cambridge Assessment International' },
  { name: 'JAMB', alt: 'Joint Admissions & Matriculation Board' },
  { name: 'NUC', alt: 'National Universities Commission' },
  { name: 'NERDC', alt: 'Nigerian Educational Research & Development Council' },
  { name: 'British Council', alt: 'British Council' },
  { name: 'UNESCO', alt: 'UNESCO Associated Schools' },
  { name: 'APEN', alt: 'Association of Private Educators Nigeria' },
];

const PartnerLogos = () => {
  return (
    <section className="partner-section" aria-label="Partners and accreditations">
      <div className="container">
        <h2 className="text-center" style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>Our Affiliations & Accreditations</h2>
        <div className="partner-logo-strip">
          {logos.map((logo, idx) => (
            <div key={idx} className="partner-logo-item" title={logo.alt}>
              <div className="partner-logo-placeholder">
                <span>{logo.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
