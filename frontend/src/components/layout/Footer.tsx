import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <span className="school-name">Grace City</span>
              <span className="school-type">International School</span>
            </div>
            <p className="footer-desc">
              Raising a generation of leaders through excellence in academics, character, and innovation.
            </p>
            <div className="social-links">
              <a href="#" className="social-link"><Facebook size={20} /></a>
              <a href="#" className="social-link"><Twitter size={20} /></a>
              <a href="#" className="social-link"><Instagram size={20} /></a>
              <a href="#" className="social-link"><Youtube size={20} /></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/admissions">Admissions</Link></li>
              <li><Link to="/news">News & Updates</Link></li>
              <li><Link to="/events">School Calendar</Link></li>
              <li><Link to="/portal">Staff & Student Portal</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Academics</h3>
            <ul>
              <li><Link to="/academics/creche">Creche & Nursery</Link></li>
              <li><Link to="/academics/primary">Primary School</Link></li>
              <li><Link to="/academics/secondary">Secondary School</Link></li>
              <li><Link to="/academics/tertiary">Tertiary Level</Link></li>
              <li><Link to="/jamb-cbt">JAMB CBT Center</Link></li>
            </ul>
          </div>
          
          <div className="footer-col contact-col">
            <h3>Contact Us</h3>
            <ul className="contact-info">
              <li>
                <MapPin size={18} className="icon" />
                <span>123 Grace Avenue, GCIS Campus, Education City</span>
              </li>
              <li>
                <Phone size={18} className="icon" />
                <span>+234 123 456 7890</span>
              </li>
              <li>
                <Mail size={18} className="icon" />
                <span>info@gracecityintl.edu.ng</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Grace City International School. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
