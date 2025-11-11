import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  // useLocation gives you access to the current location object
  const { pathname } = useLocation();

  // useLayoutEffect is often preferred over useEffect for scroll control
  // because it runs synchronously *before* the browser repaints.
  useLayoutEffect(() => {
    // This is the core function to scroll the window to the top (0, 0)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Use 'smooth' if you prefer an animation
    });
  }, [pathname]); // The effect re-runs every time the pathname changes

  return null; // This component doesn't need to render anything
}

export default ScrollToTop;