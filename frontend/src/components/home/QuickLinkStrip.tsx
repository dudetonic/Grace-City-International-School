import { Link } from 'react-router-dom';
import { FaNewspaper, FaCalendarAlt, FaUsers, FaBookOpen, FaBlog, FaEnvelope } from 'react-icons/fa';

const quickLinks = [
  { icon: <FaNewspaper size={28} />, label: 'Newsletters', link: '/newsletters' },
  { icon: <FaCalendarAlt size={28} />, label: 'Term Dates', link: '/term-dates' },
  { icon: <FaUsers size={28} />, label: 'Staff Directory', link: '/staff' },
  { icon: <FaBookOpen size={28} />, label: 'Home Learning', link: '/home-learning' },
  { icon: <FaBlog size={28} />, label: 'School Blog', link: '/blog' },
  { icon: <FaEnvelope size={28} />, label: 'Contact Us', link: '/contact' },
];

const QuickLinkStrip = () => {
  return (
    <section className="quick-link-section" aria-label="Quick links">
      <div className="container">
        <h2 className="text-center" style={{ marginBottom: '2rem' }}>Quick Links</h2>
        <div className="quick-link-grid">
          {quickLinks.map((item, idx) => (
            <Link key={idx} to={item.link} className="quick-link-tile">
              <div className="quick-link-icon">{item.icon}</div>
              <span className="quick-link-label">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinkStrip;
