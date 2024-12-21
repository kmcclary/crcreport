import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../zl.png'; // Ensure this path is correct
import { 
  MdMonitorHeart,
  MdSettings,
} from 'react-icons/md'; // Import necessary icons

const MainButton = ({ to, icon: Icon, label, isActive, isPrimary, onClick }) => (
  <li className="group relative">
    <Link
      to={to}
      className={`flex items-center justify-center w-8 h-8 sm:w-8 sm:h-8 rounded-lg shadow transition-colors
        ${isPrimary && isActive
          ? 'bg-black text-white'
          : isActive
            ? 'bg-white text-black'
            : 'bg-black/20 text-white hover:bg-white/30'}`}
      onClick={onClick}
    >
      <Icon 
        className="w-6 h-6 sm:w-6 sm:h-6 transition-transform duration-300 transform group-hover:scale-90"
      />


    </Link>
  </li>
);

const BannerNavBar = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('overview');
  const [lastActiveSubbutton, setLastActiveSubbutton] = useState('overview');
  const [activeMainButton, setActiveMainButton] = useState('components-overview'); // Add this line

  // Update isComponentsOverview to include CRC detection
  const isComponentsOverview = activeMainButton === 'components-overview';
  const isCRCSection = activeMainButton === 'crc-detection';

  // Consolidate the useEffect hooks
  useEffect(() => {
    // Set Components view as default when app launches
    if (isComponentsOverview) {
      setActiveSection('overview');
      setLastActiveSubbutton('overview');
      
      const handleScroll = () => {
        const sections = document.querySelectorAll('.component-section, .crc-section');
        const viewportHeight = window.innerHeight;
        let maxVisibility = 0;
        let mostVisibleSection = '';

        sections.forEach(section => {
          const rect = section.getBoundingClientRect();
          // Calculate how much of the section is visible
          const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
          const visibility = visibleHeight / rect.height;

          // Only consider sections that are at least 30% visible
          if (visibility > maxVisibility && visibility > 0.3) {
            maxVisibility = visibility;
            mostVisibleSection = section.id;
          }
        });

        // Only update if we have a clearly visible section
        if (mostVisibleSection) {
          setActiveSection(mostVisibleSection);
          setLastActiveSubbutton(mostVisibleSection);
        }
      };

      window.addEventListener('scroll', handleScroll);
      // Initial check
      setTimeout(handleScroll, 100);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [location.pathname, isComponentsOverview, isCRCSection]);

  // Directly set the active state for the Components button on app launch
  useEffect(() => {
    if (isComponentsOverview) {
      setActiveSection('overview');
      setLastActiveSubbutton('overview');
    }
  }, [isComponentsOverview]);



  return (
    <div className="bg-gradient-to-br from-yellow-300 via-yellow-300 to-yellow-500 p-1 w-full fixed top-0 left-0 z-50 shadow-md">
      <div className="flex items-center justify-between flex-nowrap">
        <Link to="/">
          <img src={Logo} alt="Zymo Logo with Banner" className="h-8 flex-shrink-0" />
        </Link>
        <nav className="flex-shrink-0 ml-auto overflow-x-hidden">
          <ul className="flex space-x-1 px-1">
            <MainButton 
              to="/crc-detection"
              icon={MdMonitorHeart}
              label="CRC Detection" 
              isActive={activeMainButton === 'crc-detection'}
              isPrimary={true}
              onClick={() => setActiveMainButton('crc-detection')}
            />
            {!isCRCSection && (
              <>

              </>
            )}
            <li className="h-9 w-px bg-black/30 mx-1" />
            <MainButton 
              to="/settings"
              icon={MdSettings}
              label="Settings" 
              isActive={activeMainButton === 'settings'}
              onClick={() => setActiveMainButton('settings')}
            />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BannerNavBar;