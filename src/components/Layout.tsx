import { type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  showNav?: boolean;
  showFooter?: boolean;
}

const navHiddenRoutes = ['/splash', '/city', '/login'];

export default function Layout({ children, showNav = true, showFooter = true }: LayoutProps) {
  const location = useLocation();
  const shouldHideNav = navHiddenRoutes.some(route => location.pathname.startsWith(route));
  const shouldHideFooter = navHiddenRoutes.some(route => location.pathname.startsWith(route));

  const effectiveShowNav = showNav && !shouldHideNav;
  const effectiveShowFooter = showFooter && !shouldHideFooter;

  return (
    <div className="min-h-[100dvh] flex justify-center bg-matcha-100">
      <div className="w-full max-w-[430px] bg-matcha-50 relative flex flex-col min-h-[100dvh] shadow-xl">
        {/* Content area */}
        <main className="flex-1 flex flex-col">
          {effectiveShowNav && <Navbar />}
          <div className={`flex-1 ${effectiveShowFooter ? 'pb-14' : ''}`}>
            {children}
          </div>
        </main>

        {/* Footer */}
        {effectiveShowFooter && <Footer />}
      </div>
    </div>
  );
}
