import React from 'react';

function Footer() {
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
      <div>
        <p>&copy; Copyright {new Date().getFullYear()} <strong><span className="title">Pawtastic Pet Camp</span></strong>. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;