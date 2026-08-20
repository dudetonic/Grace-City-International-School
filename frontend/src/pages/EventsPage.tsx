const EventsPage = () => {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="container">
          <h1>Interactive Event Calendar</h1>
          <p>Don't miss out on important school dates and activities</p>
        </div>
      </div>
      <div className="page-content container">
        <div className="placeholder-box" style={{ minHeight: '400px' }}>
          <h3>Calendar Component</h3>
          <p>Will implement a color-coded calendar synced with backend events.</p>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
