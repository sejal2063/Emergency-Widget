import React from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-newsletter py-4">
      <div className="container text-center">
        <h5>The safety of the people shall be the highest law.</h5>
        <div className="d-flex justify-content-center my-2">
          <input type="email" placeholder="Email *" className="form-control me-2" style={{ maxWidth: "250px" }} />
          <button className="btn">Subscribe</button>
        </div>
        <p className="mt-2">© {currentYear} Pune Emergency Contacts. Stay informed. Stay safe.</p>
      </div>
    </footer>
  );
};

export default Footer;
