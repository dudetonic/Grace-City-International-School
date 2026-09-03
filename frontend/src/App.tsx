import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import EventsPage from './pages/EventsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AttendancePage from './pages/AttendancePage';
import NewslettersPage from './pages/NewslettersPage';
import TermDatesPage from './pages/TermDatesPage';
import UniformPage from './pages/UniformPage';
import SchoolMealsPage from './pages/SchoolMealsPage';
import CrechePage from './pages/academics/CrechePage';
import PrimaryPage from './pages/academics/PrimaryPage';
import SecondaryPage from './pages/academics/SecondaryPage';
import TertiaryPage from './pages/academics/TertiaryPage';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/attendance" element={<AttendancePage />} />
            <Route path="/newsletters" element={<NewslettersPage />} />
            <Route path="/term-dates" element={<TermDatesPage />} />
            <Route path="/school-meals" element={<SchoolMealsPage />} />
            <Route path="/uniform" element={<UniformPage />} />
            <Route path="/academics/creche" element={<CrechePage />} />
            <Route path="/academics/primary" element={<PrimaryPage />} />
            <Route path="/academics/secondary" element={<SecondaryPage />} />
            <Route path="/academics/tertiary" element={<TertiaryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
