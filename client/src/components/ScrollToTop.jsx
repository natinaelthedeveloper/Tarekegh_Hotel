import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll the window to the top (X: 0, Y: 0) whenever the pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}