import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, MapPin, Mail, LogIn, GraduationCap } from 'lucide-react';
import { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../../config/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileDropdown = (name: string) => {
    setOpenMobileDropdown(prev => prev === name ? null : name);
  };

  const closeMobile = () => {
    setIsOpen(false);
    setOpenMobileDropdown(null);
  };

  return (
    <>
      {/* Top Utility Bar */}
      <div className="utility-bar">
        <div className="container utility-bar-inner">
          <div className="utility-bar-left">
            <span><MapPin size={12} /> {CONTACT_INFO.address}</span>
            <span><Phone size={12} /> {CONTACT_INFO.phone}</span>
            <span><Mail size={12} /> {CONTACT_INFO.email}</span>
          </div>
          <div className="utility-bar-right">
            <Link to="/portal" onClick={closeMobile}><LogIn size={12} /> Parent Portal</Link>
            <Link to="/portal" onClick={closeMobile}><GraduationCap size={12} /> Student Login</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`main-header ${scrolled ? 'scrolled' : ''}`} role="banner">
        <div className="container header-inner">
          <Link to="/" className="header-brand" aria-label="Grace City International School - Home">
            <div className="header-logo" aria-hidden="true">GC</div>
            <div className="header-brand-text">
              <span className="header-brand-name">Grace City</span>
              <span className="header-brand-tagline">International School</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav" role="navigation" aria-label="Main navigation">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About Us</Link>
            
            <div className="nav-dropdown">
              <span className="nav-link" tabIndex={0} style={{cursor: 'pointer'}}>
                Academics <ChevronDown size={14} />
              </span>
              <div className="nav-dropdown-menu">
                <Link to="/academics/creche">Creche &amp; Nursery</Link>
                <Link to="/academics/primary">Primary School</Link>
                <Link to="/academics/secondary">Secondary School</Link>
                <Link to="/academics/tertiary">Tertiary / A-Levels</Link>
              </div>
            </div>

            <div className="nav-dropdown">
              <span className="nav-link" tabIndex={0} style={{cursor: 'pointer'}}>
                Campus Life <ChevronDown size={14} />
              </span>
              <div className="nav-dropdown-menu">
                <Link to="/attendance">Attendance</Link>
                <Link to="/newsletters">Newsletters</Link>
                <Link to="/term-dates">Term Dates</Link>
                <Link to="/school-meals">School Meals</Link>
                <Link to="/uniform">Uniform</Link>
              </div>
            </div>

            <Link to="/news" className="nav-link">News &amp; Events</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            
            <Link to="/admissions" className="btn btn-accent header-apply-btn">APPLY NOW</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation menu" aria-expanded={isOpen}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="mobile-nav open" role="menu">
            <Link to="/" className="mobile-nav-link" onClick={closeMobile}>Home</Link>
            <Link to="/about" className="mobile-nav-link" onClick={closeMobile}>About Us</Link>
            
            <button className="mobile-dropdown-btn" onClick={() => toggleMobileDropdown('academics')} aria-expanded={openMobileDropdown === 'academics'}>
              Academics <ChevronDown size={16} className={`chevron-rotate ${openMobileDropdown === 'academics' ? 'open' : ''}`} />
            </button>
            {openMobileDropdown === 'academics' && (
              <div className="mobile-sub-items">
                <Link to="/academics/creche" onClick={closeMobile}>Creche &amp; Nursery</Link>
                <Link to="/academics/primary" onClick={closeMobile}>Primary School</Link>
                <Link to="/academics/secondary" onClick={closeMobile}>Secondary School</Link>
                <Link to="/academics/tertiary" onClick={closeMobile}>Tertiary / A-Levels</Link>
              </div>
            )}

            <button className="mobile-dropdown-btn" onClick={() => toggleMobileDropdown('campus')} aria-expanded={openMobileDropdown === 'campus'}>
              Campus Life <ChevronDown size={16} className={`chevron-rotate ${openMobileDropdown === 'campus' ? 'open' : ''}`} />
            </button>
            {openMobileDropdown === 'campus' && (
              <div className="mobile-sub-items">
                <Link to="/attendance" onClick={closeMobile}>Attendance</Link>
                <Link to="/newsletters" onClick={closeMobile}>Newsletters</Link>
                <Link to="/term-dates" onClick={closeMobile}>Term Dates</Link>
                <Link to="/school-meals" onClick={closeMobile}>School Meals</Link>
                <Link to="/uniform" onClick={closeMobile}>Uniform</Link>
              </div>
            )}

            <Link to="/news" className="mobile-nav-link" onClick={closeMobile}>News &amp; Events</Link>
            <Link to="/contact" className="mobile-nav-link" onClick={closeMobile}>Contact</Link>
            <Link to="/admissions" className="btn btn-accent" onClick={closeMobile} style={{ marginTop: '16px', width: '100%' }}>APPLY NOW</Link>
          </nav>
        )}
      </header>
    </>
  );
};

export default Navbar;
