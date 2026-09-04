import React from 'react';

const TermDatesPage = () => {
  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Term <span className="accent">Dates</span></h1>
          <p>Important dates for the 2026/2027 Academic Year.</p>
        </div>
      </div>

      <section style={{ padding: 'var(--section-py) 0', background: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          
          {/* Term Dates Table */}
          <div style={{ marginBottom: '60px' }}>
            <h2 style={{ marginBottom: '24px', color: 'var(--primary)' }}>Academic Terms</h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: 'var(--primary)', color: 'var(--white)' }}>
                    <th style={{ padding: '16px', fontWeight: 600 }}>Term</th>
                    <th style={{ padding: '16px', fontWeight: 600 }}>Start Date</th>
                    <th style={{ padding: '16px', fontWeight: 600 }}>Half Term Break</th>
                    <th style={{ padding: '16px', fontWeight: 600 }}>End Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '16px', fontWeight: 500, color: 'var(--primary)' }}>Autumn Term</td>
                    <td style={{ padding: '16px' }}>Wed, Sep 9, 2026</td>
                    <td style={{ padding: '16px' }}>Oct 26 - Oct 30, 2026</td>
                    <td style={{ padding: '16px' }}>Fri, Dec 18, 2026</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg-light)' }}>
                    <td style={{ padding: '16px', fontWeight: 500, color: 'var(--primary)' }}>Spring Term</td>
                    <td style={{ padding: '16px' }}>Mon, Jan 4, 2027</td>
                    <td style={{ padding: '16px' }}>Feb 15 - Feb 19, 2027</td>
                    <td style={{ padding: '16px' }}>Fri, Apr 2, 2027</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '16px', fontWeight: 500, color: 'var(--primary)' }}>Summer Term</td>
                    <td style={{ padding: '16px' }}>Mon, Apr 19, 2027</td>
                    <td style={{ padding: '16px' }}>May 31 - Jun 4, 2027</td>
                    <td style={{ padding: '16px' }}>Fri, Jul 16, 2027</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Public Holidays Table */}
          <div>
            <h2 style={{ marginBottom: '24px', color: 'var(--primary)' }}>Public Holidays & School Closures</h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: 'var(--accent)', color: 'var(--white)' }}>
                    <th style={{ padding: '16px', fontWeight: 600 }}>Holiday</th>
                    <th style={{ padding: '16px', fontWeight: 600 }}>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '16px' }}>Independence Day</td>
                    <td style={{ padding: '16px' }}>Thu, Oct 1, 2026</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg-light)' }}>
                    <td style={{ padding: '16px' }}>Christmas Day</td>
                    <td style={{ padding: '16px' }}>Fri, Dec 25, 2026</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '16px' }}>Boxing Day</td>
                    <td style={{ padding: '16px' }}>Sat, Dec 26, 2026 (Observed Mon, Dec 28)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg-light)' }}>
                    <td style={{ padding: '16px' }}>New Year's Day</td>
                    <td style={{ padding: '16px' }}>Fri, Jan 1, 2027</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '16px' }}>Good Friday</td>
                    <td style={{ padding: '16px' }}>Fri, Mar 26, 2027</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg-light)' }}>
                    <td style={{ padding: '16px' }}>Easter Monday</td>
                    <td style={{ padding: '16px' }}>Mon, Mar 29, 2027</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: '16px', fontSize: '0.85rem', color: 'var(--text-light)' }}>
              * Dates are subject to change. Please refer to our weekly newsletters for any updates.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default TermDatesPage;
