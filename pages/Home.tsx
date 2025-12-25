
import React from 'react';
import { BarChart, Bar, ResponsiveContainer, Cell } from 'recharts';
import { useNavigate } from 'react-router-dom';

const data = [
  { value: 40 },
  { value: 70 },
  { value: 100 },
  { value: 60 },
  { value: 30 },
];

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in-up">
      <header className="w-full pt-12 pb-4 px-6 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase">Bienvenido</span>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Hola, Usuario</h2>
        </div>
        <button className="p-2 rounded-full bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-sm transition-colors">
          <span className="material-symbols-outlined text-gray-800 dark:text-white">notifications</span>
        </button>
      </header>

      <main className="px-6 flex flex-col items-center">
        <div className="flex flex-col items-center justify-center mb-12 mt-8">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150"></div>
            <h1 className="relative text-7xl font-extrabold tracking-tighter text-gray-900 dark:text-white drop-shadow-2xl">
              ARAM
            </h1>
          </div>
          <p className="text-sm font-medium tracking-[0.4em] uppercase text-primary animate-pulse-slow">
            Brilla Cabrón
          </p>
        </div>

        <div className="w-full grid grid-cols-2 gap-4 mb-8">
          {[
            { label: 'Nuevo Presupuesto', icon: 'request_quote', path: '/new-quote' },
            { label: 'Registrar Producto', icon: 'inventory_2', path: '/new-product' },
            { label: 'Calcular Costos', icon: 'calculate', path: '/cost-calculator' },
            { label: 'Historial', icon: 'history', path: '/history' },
          ].map((btn, i) => (
            <button 
              key={i} 
              onClick={() => navigate(btn.path)}
              className="group relative overflow-hidden bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col items-start gap-3 hover:shadow-md transition-all active:scale-95"
            >
              <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-icons-round">{btn.icon}</span>
              </div>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">{btn.label}</span>
            </button>
          ))}
        </div>

        <div className="w-full bg-surface-light dark:bg-surface-dark rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200">Resumen Semanal</h3>
            <span className="text-xs text-primary font-semibold cursor-pointer">Ver Todo</span>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Ventas Totales</p>
              <p className="text-3xl font-serif font-bold text-gray-900 dark:text-white">$12,450</p>
            </div>
            <div className="h-12 w-28">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <Bar dataKey="value" radius={[2, 2, 0, 0]}>
                    {data.map((entry, index) => (
                      <Cell key={index} fill={index === 2 ? '#D4AF37' : '#D4AF3744'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
