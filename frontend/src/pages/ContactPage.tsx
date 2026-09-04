import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { CONTACT_INFO } from '../config/constants';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch('/api/public/news/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData), // your existing name/email/subject/message state
      });

      if (!response.ok) {
        throw new Error('Something went wrong submitting the form.');
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' }); // reset fields
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setError('Sorry, we could not send your message. Please try again.');
    }
  };

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Get in touch with us for any inquiries.</p>
        </div>
      </div>

      <div className="container" style={{ padding: '60px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>

          {/* Contact Details & Map */}
          <div>
            <h2 style={{ marginBottom: '24px', color: 'var(--primary)', fontFamily: 'var(--font-display)' }}>Get In Touch</h2>
            <p style={{ marginBottom: '32px', color: 'var(--text-body)' }}>
              Have questions about admissions, our curriculum, or anything else? Our team is here to help you.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--accent)', background: 'rgba(212, 160, 23, 0.1)', padding: '12px', borderRadius: '50%' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ color: 'var(--primary)', marginBottom: '4px' }}>Our Location</h4>
                  <p style={{ color: 'var(--text-body)' }}>{CONTACT_INFO.addressFull}</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--accent)', background: 'rgba(212, 160, 23, 0.1)', padding: '12px', borderRadius: '50%' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ color: 'var(--primary)', marginBottom: '4px' }}>Phone Number</h4>
                  <p style={{ color: 'var(--text-body)' }}>{CONTACT_INFO.phone}</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--accent)', background: 'rgba(212, 160, 23, 0.1)', padding: '12px', borderRadius: '50%' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ color: 'var(--primary)', marginBottom: '4px' }}>Email Address</h4>
                  <p style={{ color: 'var(--text-body)' }}>{CONTACT_INFO.email}</p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed Placeholder */}
            <div style={{ width: '100%', height: '300px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', background: '#e5e7eb' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15858.11893356079!2d3.35904795!3d6.4545934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b28a2432a67%3A0xc3f5fb470707a0c0!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ background: 'var(--white)', padding: '40px', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)' }}>
            <h2 style={{ marginBottom: '24px', color: 'var(--primary)', fontFamily: 'var(--font-display)' }}>Send us a Message</h2>

            {isSubmitted ? (
              <div style={{ padding: '24px', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--success)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                <h4 style={{ marginBottom: '8px' }}>Thank you!</h4>
                <p>We'll be in touch with you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: 'var(--primary)' }}>Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', fontSize: '1rem', fontFamily: 'var(--font-body)' }}
                  />
                </div>

                <div>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: 'var(--primary)' }}>Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', fontSize: '1rem', fontFamily: 'var(--font-body)' }}
                  />
                </div>

                <div>
                  <label htmlFor="subject" style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: 'var(--primary)' }}>Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', fontSize: '1rem', fontFamily: 'var(--font-body)' }}
                  />
                </div>

                <div>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: 'var(--primary)' }}>Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', fontSize: '1rem', fontFamily: 'var(--font-body)', resize: 'vertical' }}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '12px', padding: '14px' }}>
                  Send Message <Send size={18} />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
