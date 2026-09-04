import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa6';
import { useState } from 'react';
import { CONTACT_INFO } from '../../config/constants';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for actual subscription logic
    alert(`Subscribed with ${email}`);
    setEmail('');
  };

  return (
    <>
      <footer className="site-footer" role="contentinfo">
        <div className="container">
          <div className="footer-grid">
            
            {/* Column 1: Brand */}
            <div className="footer-col footer-brand-col">
              <div className="footer-logo-row">
                <div className="footer-logo-circle" aria-hidden="true">GC</div>
                <div className="footer-brand-name">Grace City<br />International School</div>
              </div>
              <p>Raising a generation of leaders through excellence in academics, character, and innovation.</p>
              <div className="footer-social">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF size={16} /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram size={16} /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"><FaXTwitter size={16} /></a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube size={16} /></a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/academics/primary">Academics</Link></li>
                <li><Link to="/admissions">Admissions</Link></li>
                <li><Link to="/campus-life">Campus Life</Link></li>
                <li><Link to="/news">News &amp; Events</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div className="footer-col">
              <h4>Resources</h4>
              <ul className="footer-links">
                <li><Link to="/portal">Parent Portal</Link></li>
                <li><Link to="/portal">Student Login</Link></li>
                <li><Link to="/events">School Calendar</Link></li>
                <li><Link to="/policies">Policies</Link></li>
                <li><Link to="/vacancies">Vacancies / Careers</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div className="footer-col">
              <h4>Contact Us</h4>
              <ul className="footer-contact">
                <li>
                  <MapPin size={16} className="footer-contact-icon" aria-hidden="true" />
                  <span>{CONTACT_INFO.addressFull}</span>
                </li>
                <li>
                  <Phone size={16} className="footer-contact-icon" aria-hidden="true" />
                  <span>{CONTACT_INFO.phone}</span>
                </li>
                <li>
                  <Mail size={16} className="footer-contact-icon" aria-hidden="true" />
                  <span>{CONTACT_INFO.email}</span>
                </li>
              </ul>
            </div>

            {/* Column 5: Newsletter */}
            <div className="footer-col">
              <h4>Newsletter</h4>
              <p className="newsletter-text">Subscribe to our newsletter to receive the latest updates and announcements.</p>
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="newsletter-input" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email address for newsletter"
                />
                <button type="submit" className="newsletter-submit" aria-label="Subscribe">
                  <Send size={16} />
                </button>
              </form>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Grace City International School. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Chat Bubble */}
      <a
        href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-chat"
        aria-label="Chat with us on WhatsApp"
        title="Click to talk to us"
      >
        <FaWhatsapp size={28} />
      </a>
    </>
  );
};

export default Footer;
