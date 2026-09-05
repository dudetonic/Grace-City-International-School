import { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, MapPin, Clock } from 'lucide-react';

interface EventItem {
  event_id: number;
  title: string;
  description: string;
  start_datetime: string;
  end_datetime: string;
  location: string;
  rsvp_enabled: boolean;
}

const EventsPage = () => {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/public/events/')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch events');
        return res.json();
      })
      .then(data => {
        setEvents(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);

        // Mock fallback
        setEvents([
          {
            event_id: 1,
            title: "Inter-House Sports Competition",
            description: "Annual sports day featuring track and field events.",
            start_datetime: new Date(Date.now() + 86400000 * 5).toISOString(),
            end_datetime: new Date(Date.now() + 86400000 * 5 + 28800000).toISOString(),
            location: "Main Stadium, GCIS Campus",
            rsvp_enabled: false
          }
        ]);
      });
  }, []);

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="container">
          <h1>Interactive Event Calendar</h1>
          <p>Don't miss out on important school dates and activities</p>
        </div>
      </div>
      <div className="page-content container">
        {loading && <div className="text-center p-8">Loading events...</div>}

        <div className="events-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
          {events.map(event => {
            const startDate = new Date(event.start_datetime);
            return (
              <div key={event.event_id} className="card event-card" style={{ display: 'flex', overflow: 'hidden' }}>
                <div style={{ background: 'var(--primary-color)', color: 'white', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minWidth: '120px' }}>
                  <span style={{ fontSize: '2rem', fontWeight: 700 }}>{startDate.getDate()}</span>
                  <span style={{ textTransform: 'uppercase', letterSpacing: '2px' }}>{startDate.toLocaleString('default', { month: 'short' })}</span>
                </div>
                <div style={{ padding: '1.5rem', flex: 1 }}>
                  <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>{event.title}</h3>
                  <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Clock size={16} /> {startDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <MapPin size={16} /> {event.location || 'TBA'}
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-muted)' }}>{event.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
