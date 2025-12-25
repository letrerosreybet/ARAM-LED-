
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BottomNav: React.FC = () => {
  const location = useLocation();
  const activeClass = "text-primary scale-110";
  const inactiveClass = "text-gray-400 dark:text-gray-500 hover:text-primary transition-all";

  const items = [
    { path: '/', label: 'Inicio', icon: 'dashboard' },
    { path: '/history', label: 'Ventas', icon: 'receipt_long' },
    { path: '/new-product', label: 'Añadir', icon: 'add_circle', isSpecial: true },
    { path: '/cost-calculator', label: 'Costos', icon: 'calculate' },
    { path: '/settings', label: 'Config', icon: 'settings' },
  ];

  return (
    <nav className="fixed bottom-0 w-full bg-surface-light dark:bg-[#0f0f11] backdrop-blur-md border-t border-gray-200 dark:border-gray-800 pb-8 pt-3 px-6 z-50">
      <ul className="flex justify-between items-center max-w-md mx-auto">
        {items.map((item) => (
          <li key={item.path}>
            {item.isSpecial ? (
              <div className="-mt-12">
                <Link 
                  to={item.path} 
                  className="w-14 h-14 rounded-full bg-primary text-white shadow-lg shadow-primary/40 flex items-center justify-center transform active:scale-95 transition-transform"
                >
                  <span className="material-icons-round text-3xl">add</span>
                </Link>
              </div>
            ) : (
              <Link to={item.path} className={`flex flex-col items-center gap-1 ${location.pathname === item.path ? activeClass : inactiveClass}`}>
                <span className="material-icons-round text-2xl">{item.icon}</span>
                <span className="text-[10px] font-medium">{item.label}</span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen pb-28 relative overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none -z-10"></div>
      <div className="max-w-md mx-auto">
        {children}
      </div>
      <BottomNav />
      {/* Texture overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-[60] bg-[url('https://picsum.photos/seed/aram-texture/1000/1000')] bg-repeat"></div>
    </div>
  );
};
