import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3 className="footer-heading">İletişim Bilgileri</h3>
            <ul className="footer-list">
              <li>📞 Telefon: <a href="tel:+905398664465">+90 539 866 44 65</a></li>
              <li>✉️ Email: <a href="mailto:E.kurtay@hotmail.com">E.kurtay@hotmail.com</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3 className="footer-heading">Sosyal Medya</h3>
            <ul className="footer-list">
              <li>🌐 <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li>🐦 <a href="https://twitter.com/emrhnkrty" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3 className="footer-heading">Adres</h3>
            <ul className="footer-list">
              <li>📍 Görükle/Nilüfer</li>
              <li>🌍 Bursa, Türkiye</li>
            </ul>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="footer-copy">Tüm hakları saklıdır. &copy; 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
