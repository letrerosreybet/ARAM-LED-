
import React, { useState, useEffect } from 'react';
import { INITIAL_MOVEMENTS } from '../constants';
import { analyzeHistory } from '../services/geminiService';

export const History: React.FC = () => {
  const [insight, setInsight] = useState<string>('Analizando tus finanzas...');

  useEffect(() => {
    const runAnalysis = async () => {
      const summary = INITIAL_MOVEMENTS.map(m => `${m.title}: $${m.amount}`).join(', ');
      const res = await analyzeHistory(summary);
      setInsight(res);
    };
    runAnalysis();
  }, []);

  return (
    <div className="animate-fade-in-up p-6">
      <header className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold font-display">Historial</h1>
          <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Ventas y Gastos</p>
        </div>
        <div className="flex gap-3">
          <button className="p-2 rounded-full bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-sm text-gray-600 dark:text-gray-300">
            <span className="material-icons-round">picture_as_pdf</span>
          </button>
          <button className="p-2 rounded-full bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-sm text-gray-600 dark:text-gray-300">
            <span className="material-icons-round">file_download</span>
          </button>
        </div>
      </header>

      <div className="bg-surface-dark rounded-2xl p-6 relative overflow-hidden shadow-lg shadow-primary/10 border border-gray-200 dark:border-gray-800 mb-8">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary blur-[60px] opacity-20 rounded-full"></div>
        <div className="relative z-10">
          <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-1">Ganancia Neta Acumulada</p>
          <h2 className="text-4xl font-bold text-white mb-6">$12,450.00</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-black/20 rounded-xl p-3 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-1 text-green-400">
                <span className="material-icons-round text-xs">arrow_upward</span>
                <span className="text-xs text-gray-300">Ingresos</span>
              </div>
              <p className="font-semibold text-lg text-white">$18,200</p>
            </div>
            <div className="bg-black/20 rounded-xl p-3 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-1 text-red-400">
                <span className="material-icons-round text-xs">arrow_downward</span>
                <span className="text-xs text-gray-300">Gastos</span>
              </div>
              <p className="font-semibold text-lg text-white">$5,750</p>
            </div>
          </div>
          <div className="mt-4 p-3 bg-primary/5 rounded-lg border border-primary/20 flex items-start gap-3">
            <span className="material-icons-round text-primary text-sm mt-0.5">bolt</span>
            <p className="text-[10px] text-primary/80 leading-relaxed font-medium italic">"{insight}"</p>
          </div>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 material-icons-round">search</span>
          <input className="w-full bg-surface-light dark:bg-surface-dark border-none rounded-xl py-3 pl-10 pr-4 text-sm shadow-sm" placeholder="Buscar por producto..." />
        </div>
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
          {['Todo', 'Semana', 'Mes', 'Personalizado'].map((f, i) => (
            <button key={i} className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-semibold transition ${i === 0 ? 'bg-primary text-black' : 'bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-gray-800 text-gray-500'}`}>
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {INITIAL_MOVEMENTS.map((mov) => (
          <div key={mov.id} className="bg-surface-light dark:bg-surface-dark p-4 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${mov.type === 'VENTA' ? 'bg-primary/10 text-primary' : 'bg-red-500/10 text-red-500'}`}>
                  <span className="material-icons-round">{mov.type === 'VENTA' ? 'inventory_2' : 'local_shipping'}</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white leading-tight">{mov.title}</h4>
                  <p className="text-[10px] text-gray-500 mt-0.5">{mov.subtitle}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="block text-[10px] font-medium text-gray-400">{mov.date}</span>
                <span className={`inline-block px-2 py-0.5 mt-1 rounded text-[8px] font-bold border ${mov.type === 'VENTA' ? 'bg-green-500/10 text-green-500 border-green-500/20' : 'bg-red-500/10 text-red-500 border-red-500/20'}`}>
                  {mov.type}
                </span>
              </div>
            </div>
            {mov.type === 'VENTA' ? (
              <div className="grid grid-cols-3 gap-2 pt-3 border-t border-gray-100 dark:border-gray-800">
                <div><span className="block text-[8px] uppercase text-gray-400 font-bold">Costo</span><span className="text-xs font-medium">${mov.cost}</span></div>
                <div><span className="block text-[8px] uppercase text-gray-400 font-bold">Precio</span><span className="text-xs font-medium">${mov.amount}</span></div>
                <div><span className="block text-[8px] uppercase text-gray-400 font-bold">Ganancia</span><span className="text-xs font-bold text-primary">+${mov.gain}</span></div>
              </div>
            ) : (
              <div className="flex justify-between items-center pt-3 border-t border-gray-100 dark:border-gray-800">
                <span className="text-[10px] text-gray-500">Categoría: {mov.category}</span>
                <span className="text-sm font-bold">-${mov.amount}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
