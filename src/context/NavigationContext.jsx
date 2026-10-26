import React, { createContext, useContext, useState, useEffect } from 'react';

const NavigationContext = createContext();

export function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path) => {
    if (path.startsWith('#')) {
      // If we are not on home, first go to home then scroll
      if (currentPath !== '/') {
        window.history.pushState(null, '', '/' + path);
        const update = () => setCurrentPath('/');
        if (typeof document !== 'undefined' && document.startViewTransition) {
          document.startViewTransition(update);
        } else {
          update();
        }
        setTimeout(() => {
          const el = document.querySelector(path);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.querySelector(path);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    window.history.pushState(null, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const update = () => setCurrentPath(path);
    if (typeof document !== 'undefined' && document.startViewTransition) {
      document.startViewTransition(update);
    } else {
      update();
    }
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
}
