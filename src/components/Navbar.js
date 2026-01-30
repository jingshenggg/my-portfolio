import { useState, useEffect, useCallback, memo } from "react";
import "../css/Navbar.css";

const menuItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#sidehustles", label: "Side Hustles" },
  { href: "#contact", label: "Contact" }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
    const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const toggleMenu = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.hamburger-menu')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  // Update active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || "");
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <a href="#main" className="skip-to-main">Skip to main content</a>
      
      {/* Desktop Nav */}
      <nav id="desktop-nav" role="navigation" aria-label="Main navigation">
        {/* <div className="logo" aria-label="Jing Sheng">Jing Sheng</div> */}
        <button className="logo" onClick={handleScrollToTop} aria-label="Jing Sheng">Jing Sheng</button>
        <ul className="nav-links">
          {menuItems.map(({ href, label }) => (
            <li key={href}>
              <a 
                href={href}
                className={activeSection === href.substring(1) ? 'active' : ''}
                aria-current={activeSection === href.substring(1) ? 'page' : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav id="hamburger-nav" role="navigation" aria-label="Mobile navigation">
        <div className="logo" aria-label="Jing Sheng">Jing Sheng</div>
        <div className="hamburger-menu">
          <button 
            className={`hamburger-icon ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul id="mobile-menu" className={`menu-links ${isOpen ? "open" : ""}`}>
            {menuItems.map(({ href, label }) => (
              <li key={href}>
                <a 
                  href={href}
                  onClick={toggleMenu}
                  className={activeSection === href.substring(1) ? 'active' : ''}
                  aria-current={activeSection === href.substring(1) ? 'page' : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

// Memoize the component since it rarely changes
export default memo(Navbar);
