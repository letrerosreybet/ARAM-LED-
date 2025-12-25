
import React, { useState } from 'react';

export const CostCalculator: React.FC = () => {
  const [margin, setMargin] = useState(35);
  const [width, setWidth] = useState(120);
  const [height, setHeight] = useState(60);
  const [complexity, setComplexity] = useState(true);

  const materialsCost = 1250;
  const laborCost = 450;
  const overhead = 150;
  
  const subtotal = materialsCost + laborCost + overhead;
  const complexityFactor = complexity ? 1.15 : 1;
  const baseCost = subtotal * complexityFactor;
  const estimatedGain = baseCost * (margin / 100);
  const finalPrice = baseCost + estimatedGain;

  return (
    <div className="animate-fade-in-up p-6">
      <header className="flex items-center justify-between mb-8">
        <button onClick={() => window.history.back()} className="p-2 rounded-full bg-surface-light dark:bg-surface-dark shadow-sm">
          <span className="material-icons-round">arrow_back_ios_new</span>
        </button>
        <h1 className="text-lg font-bold font-display">Cálculo de Costos</h1>
        <button className="p-2 rounded-full bg-surface-light dark:bg-surface-dark shadow-sm relative">
          <span className="material-icons-round">history</span>
          <span className="absolute top-1 right-2 w-2 h-2 bg-primary rounded-full"></span>
        </button>
      </header>

      <div className="space-y-6">
        <section>
          <label className="block text-sm font-medium text-gray-500 mb-2 ml-1">Producto Base</label>
          <div className="relative">
            <select className="w-full bg-surface-light dark:bg-surface-dark border-0 rounded-xl py-4 pl-4 pr-10 shadow-sm appearance-none cursor-pointer focus:ring-2 focus:ring-primary">
              <option>Letrero Neón Personalizado</option>
              <option>Caja de Luz 50x50</option>
              <option>Letras Volumétricas 3D</option>
            </select>
            <span className="material-icons-round absolute right-4 top-4 text-primary">expand_more</span>
          </div>
        </section>

        <section className="bg-surface-light dark:bg-surface-dark p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
          <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
            <span className="material-icons-round text-primary text-sm">straighten</span> Medidas del Pedido
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Ancho (cm)</label>
              <input 
                type="number" 
                value={width} 
                onChange={(e) => setWidth(Number(e.target.value))}
                className="w-full bg-background-light dark:bg-black/30 border-0 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Alto (cm)</label>
              <input 
                type="number" 
                value={height} 
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full bg-background-light dark:bg-black/30 border-0 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-gray-100 dark:border-gray-800 pt-4">
            <span className="text-sm text-gray-600 dark:text-gray-300">Complejidad Alta (+15%)</span>
            <button 
              onClick={() => setComplexity(!complexity)}
              className={`w-11 h-6 rounded-full transition-colors relative ${complexity ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-700'}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all ${complexity ? 'right-0.5' : 'left-0.5'}`}></div>
            </button>
          </div>
        </section>

        <section>
          <div className="flex justify-between mb-2 items-end">
            <label className="text-sm font-medium text-gray-500">Margen de Ganancia</label>
            <span className="text-lg font-bold text-primary">{margin}%</span>
          </div>
          <input 
            type="range" 
            className="w-full h-2 bg-gray-200 dark:bg-surface-dark rounded-lg appearance-none cursor-pointer accent-primary"
            value={margin}
            onChange={(e) => setMargin(Number(e.target.value))}
          />
        </section>

        <section className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-gray-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-primary/20 blur-3xl rounded-full"></div>
          <h2 className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mb-6">Resumen de Costos</h2>
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-sm"><span className="text-gray-400">Materiales</span><span className="text-white">${materialsCost.toFixed(2)}</span></div>
            <div className="flex justify-between text-sm"><span className="text-gray-400">Mano de Obra</span><span className="text-white">${laborCost.toFixed(2)}</span></div>
            <div className="flex justify-between text-sm"><span className="text-gray-400">Gastos Indirectos</span><span className="text-white">${overhead.toFixed(2)}</span></div>
            <div className="h-px bg-gray-800 w-full my-2"></div>
            <div className="flex justify-between text-sm"><span className="text-primary">Ganancia Estimada</span><span className="text-primary font-bold">${estimatedGain.toFixed(2)}</span></div>
          </div>
          <div className="text-center pt-2">
            <span className="text-gray-400 text-[10px] mb-1 block">Precio Final Sugerido</span>
            <div className="text-4xl font-bold text-white tracking-tight">${finalPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
          </div>
        </section>

        <button className="w-full bg-primary text-black font-bold py-4 rounded-xl shadow-lg transform active:scale-95 transition-all">
          Guardar Venta
        </button>
      </div>
    </div>
  );
};
