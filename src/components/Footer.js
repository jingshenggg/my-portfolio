import { useEffect, useState } from "react";
import "../css/Footer.css";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#sidehustles", label: "Side Hustles" },
    { href: "#contact", label: "Contact" }
  ];

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <footer className={`section-fade ${isVisible ? 'visible' : ''}`}>
      <div className="footer-content">
        <nav aria-label="Footer navigation">
          <div className="nav-links-container">
            <ul className="nav-links">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        
        <div className="footer-bottom">
          <p className="copyright">
            Copyright &#169; {currentYear} Jing Sheng. All Rights Reserved.
          </p>
          <button 
            className="scroll-to-top"
            onClick={handleScrollToTop}
            aria-label="Scroll to top of page"
          >
            <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
