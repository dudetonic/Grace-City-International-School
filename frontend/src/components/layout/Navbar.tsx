import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar-wrapper">
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-contact">
            <span><Phone size={14} /> +234 123 456 7890</span>
            <span><MapPin size={14} /> 123 Grace Avenue, GCIS Campus</span>
          </div>
          <div className="top-bar-links">
            <Link to="/portal" className="portal-link">Staff/Student Portal</Link>
          </div>
        </div>
      </div>
      
      <nav className="main-nav">
        <div className="container nav-content">
          <Link to="/" className="brand">
            <div className="logo-placeholder"></div>
            <div className="brand-text">
              <span className="school-name">Grace City</span>
              <span className="school-type">International School</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="desktop-menu">
            <Link to="/" className="nav-link">Home</Link>
            <div className="nav-item-dropdown">
              <span className="nav-link">Academics <ChevronDown size={16} /></span>
              <div className="dropdown-content glass">
                <Link to="/academics/creche">Creche & Nursery</Link>
                <Link to="/academics/primary">Primary School</Link>
                <Link to="/academics/secondary">Secondary School</Link>
                <Link to="/academics/tertiary">Tertiary/A-Levels</Link>
              </div>
            </div>
            <Link to="/admissions" className="nav-link">Admissions</Link>
            <Link to="/news" className="nav-link">News</Link>
            <Link to="/events" className="nav-link">Events</Link>
            <Link to="/admissions" className="btn btn-primary ml-4">Apply Now</Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mobile-menu animate-fade-in">
            <Link to="/" className="mobile-link" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/admissions" className="mobile-link" onClick={() => setIsOpen(false)}>Admissions</Link>
            <Link to="/news" className="mobile-link" onClick={() => setIsOpen(false)}>News</Link>
            <Link to="/events" className="mobile-link" onClick={() => setIsOpen(false)}>Events</Link>
            <Link to="/portal" className="mobile-link portal-link-mobile" onClick={() => setIsOpen(false)}>Login to Portal</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
