import { useState, useEffect } from 'react';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EventItem {
  event_id: number;
  title: string;
  description: string;
  start_datetime: string;
  end_datetime: string;
  location: string;
  section?: string;
}

const SECTION_COLORS: Record<string, string> = {
  'Creche': '#F6AD55',
  'Nursery': '#68D391',
  'Primary': '#63B3ED',
  'Secondary': '#B794F4',
  'Tertiary': '#FC8181',
  'General': '#A0AEC0',
};

const EventPreviewWidget = () => {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/public/events/')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch events');
        return res.json();
      })
      .then(data => {
        const list = Array.isArray(data) ? data : data.results || [];
        setEvents(list.slice(0, 4));
        setLoading(false);
      })
      .catch(() => {
        // Fallback data for development
        setEvents([
          { event_id: 1, title: 'Open Day & School Tour', description: 'Visit our campus and meet the teaching staff.', start_datetime: '2027-02-15T09:00:00', end_datetime: '2027-02-15T14:00:00', location: 'Main Campus', section: 'General' },
          { event_id: 2, title: 'Inter-House Sports Competition', description: 'Annual inter-house sports day for all levels.', start_datetime: '2027-02-20T08:00:00', end_datetime: '2027-02-20T16:00:00', location: 'Sports Complex', section: 'Secondary' },
          { event_id: 3, title: 'Primary Science Fair', description: 'Students showcase their science projects.', start_datetime: '2027-03-01T10:00:00', end_datetime: '2027-03-01T13:00:00', location: 'Primary Block', section: 'Primary' },
          { event_id: 4, title: 'JAMB CBT Mock Examination', description: 'Free mock JAMB exam for registered candidates.', start_datetime: '2027-03-10T08:00:00', end_datetime: '2027-03-10T12:00:00', location: 'CBT Center', section: 'Tertiary' },
        ]);
        setLoading(false);
      });
  }, []);

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return { day: d.getDate(), month: d.toLocaleDateString('en-NG', { month: 'short' }), time: d.toLocaleTimeString('en-NG', { hour: '2-digit', minute: '2-digit' }) };
  };

  return (
    <section className="section event-preview-section" aria-label="Upcoming events">
      <div className="container">
        <div className="section-header">
          <h2>Upcoming Events</h2>
          <Link to="/events" className="btn btn-outline">Full Calendar <ArrowRight size={16} /></Link>
        </div>

        {loading ? (
          <div className="news-loading"><div className="spinner" /><p>Loading events...</p></div>
        ) : (
          <div className="events-preview-grid">
            {events.map(event => {
              const { day, month, time } = formatDate(event.start_datetime);
              const sectionColor = SECTION_COLORS[event.section || 'General'] || SECTION_COLORS['General'];
              return (
                <article key={event.event_id} className="event-preview-card" style={{ borderLeftColor: sectionColor }}>
                  <div className="event-date-badge" style={{ background: sectionColor }}>
                    <span className="event-date-day">{day}</span>
                    <span className="event-date-month">{month}</span>
                  </div>
                  <div className="event-preview-body">
                    <h4>{event.title}</h4>
                    <p className="event-preview-desc">{event.description}</p>
                    <div className="event-meta">
                      <span><Clock size={14} /> {time}</span>
                      <span><MapPin size={14} /> {event.location}</span>
                      {event.section && <span className="event-section-tag" style={{ background: sectionColor }}>{event.section}</span>}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default EventPreviewWidget;
