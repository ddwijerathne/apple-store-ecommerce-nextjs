"use client"; // Required for useState in Next.js App Router
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { name: 'Store', href: '/store' },
  { name: 'Mac', href: '/mac' },
  { name: 'iPad', href: '/ipad' },
  { name: 'iPhone', href: '/iphone' },
  { name: 'Watch', href: '/watch' },
  { name: 'Vision', href: '/vision' },
  { name: 'Accessories', href: '/accessories' },
  { name: 'AirPods', href: '/airpods' },
  { name: 'TV & Home', href: '/tv-home' },
  { name: 'Entertainment', href: '/entertainment' },
  { name: 'Support', href: '/support' },
];


const SearchIconPlaceholder = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const BagIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    width="20" 
    height="20"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier"> 
      <path 
        d="M3.74157 20.5545C4.94119 22 7.17389 22 11.6393 22H12.3605C16.8259 22 19.0586 22 20.2582 20.5545M3.74157 20.5545C2.54194 19.1091 2.9534 16.9146 3.77633 12.5257C4.36155 9.40452 4.65416 7.84393 5.76506 6.92196M3.74157 20.5545C3.74156 20.5545 3.74157 20.5545 3.74157 20.5545ZM20.2582 20.5545C21.4578 19.1091 21.0464 16.9146 20.2235 12.5257C19.6382 9.40452 19.3456 7.84393 18.2347 6.92196M20.2582 20.5545C20.2582 20.5545 20.2582 20.5545 20.2582 20.5545ZM18.2347 6.92196C17.1238 6 15.5361 6 12.3605 6H11.6393C8.46374 6 6.87596 6 5.76506 6.92196M18.2347 6.92196C18.2347 6.92196 18.2347 6.92196 18.2347 6.92196ZM5.76506 6.92196C5.76506 6.92196 5.76506 6.92196 5.76506 6.92196Z" 
        stroke="currentColor" 
        strokeWidth="1.5"
      ></path> 
      <path 
        opacity="0.5" 
        d="M10 14.3C10.5207 14.7686 10.8126 15.0314 11.3333 15.5L14 12.5" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      ></path> 
      <path 
        opacity="0.5" 
        d="M9 6V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V6" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round"
      ></path> 
    </g>
  </svg>
);

const HamburgerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar} aria-label="Global Navigation">
        
        {/* Left: Logo */}
        <Link href="/" className={styles.logoLink} aria-label="Apple Home">
          <Image src="/apple-logo.png" alt="Apple Logo" width={18} height={18} priority />
        </Link>

        {/* Center: Desktop Navigation Links */}
        <ul className={styles.desktopNavLinks}>
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className={styles.link}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Search Bar (Desktop) */}
        <div className={styles.searchContainer}>
          <div className={styles.searchWrapper}>
            <div className={styles.searchIconPosition}>
              <SearchIconPlaceholder />
            </div>
            <input 
              type="text" 
              placeholder="search..." 
              className={styles.searchInput}
              aria-label="Search"
            />
          </div>

          <button className={styles.bagBtn} aria-label="Shopping Bag">
            <BagIcon />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className={styles.hamburgerBtn} 
          onClick={toggleMenu} 
          aria-label="Toggle Menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>

        {/* Mobile Dropdown Menu */}
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
          <ul className={styles.mobileNavLinks}>
            {NAV_LINKS.map((link) => (
              <li key={link.name} onClick={() => setIsMobileMenuOpen(false)}>
                <Link href={link.href} className={styles.mobileLink}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;