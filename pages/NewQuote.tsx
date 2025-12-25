
import React from 'react';

export const NewQuote: React.FC = () => {
  return (
    <div className="animate-fade-in-up dark">
      <header className="sticky top-0 z-20 bg-background-dark/90 backdrop-blur-md border-b border-gray-800 px-4 pt-12 pb-4 flex items-center justify-between">
        <button onClick={() => window.history.back()} className="p-2 -ml-2 rounded-full hover:bg-gray-800 text-gray-400">
          <span className="material-symbols-rounded text-2xl">arrow_back_ios_new</span>
        </button>
        <h1 className="text-lg font-bold text-white tracking-tight">Nueva Cotización</h1>
        <button className="p-2 -mr-2 rounded-full hover:bg-gray-800 text-gray-400">
          <span className="material-symbols-rounded text-2xl">more_vert</span>
        </button>
      </header>

      <main className="px-4 py-6 space-y-6 pb-40">
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-primary font-medium text-[10px] uppercase tracking-widest">
            <span className="material-symbols-rounded text-lg">person</span> Datos del Cliente
          </div>
          <div className="bg-surface-dark rounded-2xl p-5 shadow-sm border border-gray-800 space-y-4">
            <div>
              <label className="block text-[10px] font-bold text-gray-500 mb-1 ml-1 uppercase">Nombre / Empresa</label>
              <input className="w-full bg-gray-900 border border-gray-700 text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none" placeholder="Ej. Dr. Roberto Nuvo" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] font-bold text-gray-500 mb-1 ml-1 uppercase">Teléfono</label>
                <input className="w-full bg-gray-900 border border-gray-700 text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary" placeholder="899..." />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 mb-1 ml-1 uppercase">Email</label>
                <input className="w-full bg-gray-900 border border-gray-700 text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary" placeholder="@..." />
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 text-primary font-medium text-[10px] uppercase tracking-widest">
            <span className="material-symbols-rounded text-lg">description</span> Detalle del Proyecto
          </div>
          <div className="bg-surface-dark rounded-2xl p-1 border border-gray-800">
            <textarea className="w-full bg-transparent border-none text-white px-4 py-3 focus:ring-0 placeholder-gray-600 resize-none rounded-2xl" placeholder="Descripción breve..." rows={3} />
          </div>
        </section>

        <section className="space-y-3">
          <div className="flex items-center justify-between text-primary font-medium text-[10px] uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <span className="material-symbols-rounded text-lg">inventory_2</span> Items
            </div>
            <button className="text-[10px] bg-primary/10 text-primary px-3 py-1 rounded-lg font-bold">+ Catálogo</button>
          </div>
          
          <div className="space-y-3">
            <div className="bg-surface-dark rounded-2xl p-4 border border-gray-800">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center text-gray-400">
                    <span className="material-symbols-rounded">lightbulb</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm">Letras 3D Acrílico</h3>
                    <p className="text-[10px] text-gray-500 mt-0.5">Medidas: 1.20m x 0.40m</p>
                  </div>
                </div>
                <button className="text-gray-500 hover:text-red-500"><span className="material-symbols-rounded text-xl">delete</span></button>
              </div>
              <div className="flex items-center justify-between border-t border-gray-800 pt-3">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-gray-500">Cant:</span>
                  <input type="number" defaultValue={1} className="w-12 h-8 text-center text-sm font-bold bg-gray-900 rounded-lg border-0 text-white" />
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-gray-500 block">Precio Unit.</span>
                  <span className="font-bold text-white">$3,500.00</span>
                </div>
              </div>
            </div>
            
            <button className="w-full py-4 border-2 border-dashed border-gray-800 rounded-2xl flex items-center justify-center gap-2 text-gray-500 hover:border-primary hover:text-primary transition-all">
              <span className="material-symbols-rounded">add_circle</span>
              <span className="text-sm">Agregar Item Manual</span>
            </button>
          </div>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 text-primary font-medium text-[10px] uppercase tracking-widest">
            <span className="material-symbols-rounded text-lg">calculate</span> Costos y Margen
          </div>
          <div className="bg-surface-dark rounded-2xl p-5 border border-gray-800 space-y-5">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-300">Costos Adicionales</label>
              <div className="relative w-32">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
                <input className="w-full bg-gray-900 border border-gray-700 rounded-lg py-2 pl-7 pr-3 text-right text-sm text-white" placeholder="0.00" />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-300">Margen</label>
                <span className="text-sm font-bold text-primary">30%</span>
              </div>
              <input type="range" className="w-full accent-primary" />
            </div>
          </div>
        </section>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background-dark/95 backdrop-blur-xl border-t border-gray-800 z-[60] rounded-t-3xl shadow-2xl">
        <div className="max-w-md mx-auto">
          <div className="flex justify-between items-end mb-4 px-2">
            <div className="text-[10px] text-gray-500 leading-tight">
              Total Items (1)<br/>
              <span className="text-green-500 font-medium">Margen: $1,050.00</span>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-gray-500 block mb-0.5">Total Estimado</span>
              <span className="text-2xl font-bold text-white tracking-tight">$4,550.00</span>
            </div>
          </div>
          <button className="w-full bg-primary hover:bg-yellow-600 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-3">
            <span className="material-symbols-rounded">save_as</span> Generar Cotización
          </button>
        </div>
      </div>
    </div>
  );
};
