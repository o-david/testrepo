import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: ReactNode;
}

/** Page wrapper: fades pages in and out and honours #hash links. */
const Layout = ({ children }: LayoutProps) => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    // Wait a frame so the incoming page has rendered its sections.
    const id = window.setTimeout(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    return () => window.clearTimeout(id);
  }, [hash]);

  return (
    <motion.main
      className="flex-1"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  );
};

export default Layout;
