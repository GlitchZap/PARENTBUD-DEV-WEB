import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from '@/components/ui/resizable-navbar';
import logoImg from '@/assets/LogoFinal.png';

const APP_STORE_URL = 'https://apps.apple.com/us/app/parentbud/id6761531437';

const ResizableNavbarWrapper = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isLanding = location.pathname === '/';

  const landingNavItems = [
    { name: 'Features', link: '#features' },
    { name: 'Inside the App', link: '#inside-app' },
    { name: 'Team', link: '#team' },
    { name: 'Support', link: '/support' },
  ];

  const subPageNavItems = [
    { name: 'Home', link: '/' },
    { name: 'Support', link: '/support' },
    { name: 'Privacy', link: '/privacy' },
    { name: 'Terms', link: '/terms' },
  ];

  const navItems = isLanding ? landingNavItems : subPageNavItems;

  const handleItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavItemClick = (link: string) => {
    if (link.startsWith('#')) {
      const el = document.getElementById(link.replace('#', ''));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(link);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <Navbar>
      {/* Desktop */}
      <NavBody>
        <Link to="/" className="relative z-20 mr-4 flex items-center space-x-2.5 px-2 py-1">
          <img src={logoImg} alt="ParentBud" className="h-9 w-9 rounded-xl" />
          <span className="font-semibold font-outfit text-lg">
            <span style={{ color: '#E77076' }}>Parent</span>
            <span style={{ color: '#416E9A' }}>Bud</span>
          </span>
        </Link>
        <NavItems items={navItems} onItemClick={handleItemClick} />
        {/* Hover border gradient Download button */}
        <div className="relative group">
          <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-[#E77076] via-purple-500 to-[#416E9A] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[1px]" />
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-bold text-black hover:-translate-y-0.5 transition duration-200"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
            </svg>
            Download
          </a>
        </div>
      </NavBody>

      {/* Mobile */}
      <MobileNav>
        <MobileNavHeader>
          <Link to="/" className="relative z-20 flex items-center space-x-2 px-2 py-1">
            <img src={logoImg} alt="ParentBud" className="h-8 w-8 rounded-xl" />
            <span className="font-semibold font-outfit text-base">
              <span style={{ color: '#E77076' }}>Parent</span>
              <span style={{ color: '#416E9A' }}>Bud</span>
            </span>
          </Link>
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>
        <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleNavItemClick(item.link)}
              className="w-full text-left relative text-white/80 hover:text-white"
            >
              <span className="block">{item.name}</span>
            </button>
          ))}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-bold text-black"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
            </svg>
            Download on App Store
          </a>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default ResizableNavbarWrapper;
