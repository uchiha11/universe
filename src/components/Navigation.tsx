import React, { useState } from 'react';

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex-item flex -dynamic-header -top-right">
      {/* Main nav */}
      <div className="main-nav flex-item">
        {/* SLIDE MENU for desktop and mobile */}
        <nav id="slide-menu-gr" className={`slide-menu-gr-container slide-menu-gr-container--mobile-only ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="menu-main-container">
            <ul id="menu-main" className="flex slide-menu-gr-parent slide-menu-gr-parent--mobile-only">
              <li className="menu-item menu-item-type-post_type menu-item-object-page slide-menu-gr-item">
                <a href="#home" onClick={closeMobileMenu}>Home</a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page slide-menu-gr-item">
                <a href="#shows" onClick={closeMobileMenu}>Shows</a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page slide-menu-gr-item">
                <a href="#concerts" onClick={closeMobileMenu}>Concerts</a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page slide-menu-gr-item">
                <a href="#about" onClick={closeMobileMenu}>About</a>
              </li>
              <li className="nav-last menu-item menu-item-type-post_type menu-item-object-page slide-menu-gr-item">
                <a href="#connect" onClick={closeMobileMenu}>Connect</a>
              </li>
            </ul>
          </div>
        </nav>
        {/* Page dimmer and close target for partial window panels and loaders */}
        <div className={`dimmer-lay ${isMobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}></div>
      </div>

      <section className="main-nav--mobile-only">
        {/* Mobile nav header */}
        <div className="main-nav flex-item">
          <div className="mobile-nav-header slide-menu-toggle" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navigation;