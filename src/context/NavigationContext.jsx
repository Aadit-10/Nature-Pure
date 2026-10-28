import React, { createContext, useContext, useState, useEffect } from 'react';

const NavigationContext = createContext();

export function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      if (window.location.hash) {
        setTimeout(() => {
          const el = document.querySelector(window.location.hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path) => {
    // Extract route and hash from path (e.g., '/#catalog', '/brands#catalog', '#catalog', '/solutions')
    let route = path;
    let hash = '';
    const hashIndex = path.indexOf('#');
    if (hashIndex !== -1) {
      route = path.substring(0, hashIndex) || '/';
      hash = path.substring(hashIndex);
    }

    if (!route.startsWith('/')) {
      route = '/' + route;
    }

    const isSameRoute = route === currentPath;

    window.history.pushState(null, '', path.startsWith('#') ? (currentPath === '/' ? path : '/' + path) : path);

    if (isSameRoute && hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    const update = () => setCurrentPath(route);
    if (typeof document !== 'undefined' && document.startViewTransition) {
      document.startViewTransition(update);
    } else {
      update();
    }

    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
