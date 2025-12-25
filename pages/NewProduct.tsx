
import React, { useState } from 'react';
import { Material, Product } from '../types';
import { getSmartDescription, suggestPrice } from '../services/geminiService';

export const NewProduct: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<Partial<Product>>({
    name: '',
    description: '',
    material: Material.NeonFlex,
    cost: 0,
    price: 0,
    width: 0,
    height: 0,
    depth: 0,
  });

  const handleSmartAI = async () => {
    if (!product.name) return;
    setLoading(true);
    const desc = await getSmartDescription(product.name);
    const suggested = await suggestPrice(product.cost || 0, 100, product.name);
    setProduct(prev => ({ ...prev, description: desc, price: suggested }));
    setLoading(false);
  };

  return (
    <div className="animate-fade-in-up p-6">
      <header className="flex items-center justify-between mb-8">
        <button onClick={() => window.history.back()} className="p-2 -ml-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
          <span className="material-icons-round text-2xl">arrow_back</span>
        </button>
        <h1 className="text-xl font-bold tracking-wide text-gray-900 dark:text-white font-display">Nuevo Producto</h1>
        <button className="p-2 -mr-2 rounded-full text-primary hover:bg-gray-200 dark:hover:bg-gray-800">
          <span className="material-icons-round">save</span>
        </button>
      </header>

      <div className="flex flex-col items-center justify-center mb-8">
        <div className="relative group cursor-pointer w-32 h-32 rounded-2xl bg-surface-light dark:bg-surface-dark border-2 border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center overflow-hidden hover:border-primary transition-colors">
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
            <span className="material-icons-round text-3xl mb-1">add_a_photo</span>
            <span className="text-xs font-medium">Agregar Foto</span>
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <button className="flex items-center gap-2 px-4 py-2 text-xs font-medium bg-surface-light dark:bg-surface-dark rounded-full shadow-sm border border-gray-200 dark:border-gray-700">
            <span className="material-icons-round text-sm text-primary">photo_library</span> Galería
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-xs font-medium bg-surface-light dark:bg-surface-dark rounded-full shadow-sm border border-gray-200 dark:border-gray-700">
            <span className="material-icons-round text-sm text-primary">camera_alt</span> Cámara
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1">Nombre</label>
          <div className="relative">
            <input 
              className="w-full bg-surface-light dark:bg-surface-dark border-transparent focus:border-primary focus:ring-0 rounded-xl text-gray-900 dark:text-white py-3 px-4 shadow-sm"
              placeholder="Ej. Lámpara Neón ARAM"
              value={product.name}
              onChange={(e) => setProduct({...product, name: e.target.value})}
            />
            <button 
              onClick={handleSmartAI}
              disabled={loading}
              className="absolute right-2 top-2 p-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 disabled:opacity-50"
            >
              <span className="material-icons-round text-lg">{loading ? 'sync' : 'auto_fix_high'}</span>
            </button>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1">Descripción</label>
          <textarea 
            className="w-full bg-surface-light dark:bg-surface-dark border-transparent focus:border-primary focus:ring-0 rounded-xl text-gray-900 dark:text-white py-3 px-4 shadow-sm resize-none"
            placeholder="Detalles sobre el diseño, acabado..."
            rows={3}
            value={product.description}
            onChange={(e) => setProduct({...product, description: e.target.value})}
          />
        </div>

        <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-800 space-y-5">
          <h3 className="text-sm font-semibold flex items-center gap-2">
            <span className="material-icons-round text-primary">square_foot</span> Especificaciones
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {[Material.NeonFlex, Material.Acryclic, Material.Wood].map((m) => (
              <button 
                key={m}
                onClick={() => setProduct({...product, material: m})}
                className={`px-2 py-2 rounded-lg text-xs font-medium border ${product.material === m ? 'bg-primary text-black border-primary' : 'border-gray-200 dark:border-gray-700 text-gray-400'}`}
              >
                {m}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-3">
            {['L', 'A', 'P'].map((label, i) => (
              <div key={label} className="relative">
                <span className="absolute left-3 top-2.5 text-xs text-gray-500">{label}</span>
                <input 
                  type="number" 
                  className="w-full bg-background-light dark:bg-black/30 border-none rounded-lg pl-6 pr-2 py-2 text-sm text-center focus:ring-1 focus:ring-primary dark:text-white"
                  placeholder="0"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-800">
          <h3 className="text-sm font-semibold flex items-center gap-2 mb-4">
            <span className="material-icons-round text-primary">attach_money</span> Costos
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">COSTO MATERIAL</label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-500 text-sm">$</span>
                <input 
                  type="number" 
                  className="w-full bg-background-light dark:bg-black/30 border-none rounded-xl pl-7 pr-3 py-3 font-semibold text-gray-900 dark:text-white focus:ring-1 focus:ring-primary"
                  value={product.cost}
                  onChange={(e) => setProduct({...product, cost: Number(e.target.value)})}
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">PRECIO VENTA</label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-primary text-sm font-bold">$</span>
                <input 
                  type="number" 
                  className="w-full bg-background-light dark:bg-black/30 border-none rounded-xl pl-7 pr-3 py-3 font-bold text-primary focus:ring-1 focus:ring-primary"
                  value={product.price}
                  onChange={(e) => setProduct({...product, price: Number(e.target.value)})}
                />
              </div>
            </div>
          </div>
        </div>

        <button className="w-full bg-primary hover:bg-yellow-600 text-black font-bold py-4 rounded-xl shadow-lg shadow-amber-500/20 active:scale-95 transition-all flex justify-center items-center gap-2">
          <span className="material-icons-round">check_circle</span> Guardar Producto
        </button>
      </div>
    </div>
  );
};
