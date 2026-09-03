import HeroSection from '../components/home/HeroSection';
import NewsGridPreview from '../components/home/NewsGridPreview';
import InfoPanels from '../components/home/InfoPanels';
import EventPreviewWidget from '../components/home/EventPreviewWidget';
import QuickLinkStrip from '../components/home/QuickLinkStrip';
import PartnerLogos from '../components/home/PartnerLogos';

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <NewsGridPreview />
      <InfoPanels />
      <EventPreviewWidget />
      <QuickLinkStrip />
      <PartnerLogos />
    </div>
  );
};

export default HomePage;
