import React from "react";

export const Footer= () => {
  
  const currentYear = new Date().getFullYear();

  return (
      <footer className="footer-newsletter">
        <div className="newsletter-content">
          <h2>The safety of the people shall be the highest law..</h2>
          <div className="subscribe-form">
            <input type="email" placeholder="Email *" />
            <button>Get subscribers</button>
          </div>
          <div className="social-links">
            <input type="checkbox" id="subscribe-confirm" />
            <label htmlFor="subscribe-confirm">Yes, subscribe me to your Emergency-widget.</label>
            <p className="social-icons">©2035 Pune Emergency Contacts. Stay informed. Stay safe.</p>
          </div>
        </div>
      </footer>
  );
}