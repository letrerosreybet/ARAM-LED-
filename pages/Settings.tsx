
import React from 'react';

export const Settings: React.FC = () => {
  return (
    <div className="animate-fade-in-up p-6">
      <header className="pt-6 pb-8">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-display font-bold">Configuración</h1>
          <div className="w-10 h-10 rounded-full bg-surface-light dark:bg-surface-dark shadow-sm flex items-center justify-center border border-gray-200 dark:border-gray-800">
            <span className="material-icons-round text-primary">person</span>
          </div>
        </div>
        <p className="text-gray-500 text-sm font-medium">Gestiona tus preferencias de ARAM</p>
      </header>

      <div className="space-y-8">
        <section>
          <h2 className="px-2 mb-3 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Seguridad</h2>
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800 divide-y divide-gray-100 dark:divide-gray-800">
            {[
              { label: 'Autenticación Básica', desc: 'Solicitar usuario al iniciar', icon: 'lock', color: 'bg-blue-100 text-blue-600' },
              { label: 'Biometría', desc: 'Usar FaceID / Huella', icon: 'fingerprint', color: 'bg-purple-100 text-purple-600', checked: true },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-4">
                  <div className={`p-2 rounded-lg ${item.color}`}>
                    <span className="material-icons-round">{item.icon}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{item.label}</p>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </div>
                <div className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${item.checked ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-700'}`}>
                  <div className={`w-4 h-4 bg-white rounded-full transition-all ${item.checked ? 'ml-6' : 'ml-0'}`}></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="px-2 mb-3 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Finanzas</h2>
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800 p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-lg bg-green-100 text-green-600">
                  <span className="material-icons-round">trending_up</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">Margen por Defecto</p>
                </div>
              </div>
              <span className="text-primary font-bold">30%</span>
            </div>
            <input type="range" className="w-full accent-primary" />
          </div>
        </section>

        <section>
          <h2 className="px-2 mb-3 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Gestión de Datos</h2>
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800 divide-y divide-gray-100 dark:divide-gray-800 overflow-hidden">
            {[
              { label: 'Copia de Seguridad', desc: 'Última: Hoy, 10:00 AM', icon: 'cloud_upload', color: 'bg-indigo-100 text-indigo-600' },
              { label: 'Exportar CSV', desc: 'Ventas y gastos', icon: 'file_download', color: 'bg-orange-100 text-orange-600' },
              { label: 'Limpiar Historial', desc: 'Acción irreversible', icon: 'delete_outline', color: 'bg-red-100 text-red-600', isDanger: true },
            ].map((item, i) => (
              <button key={i} className={`w-full flex items-center justify-between p-4 transition-colors hover:bg-gray-50 dark:hover:bg-white/5`}>
                <div className="flex items-center space-x-4">
                  <div className={`p-2 rounded-lg ${item.color}`}>
                    <span className="material-icons-round">{item.icon}</span>
                  </div>
                  <div className="text-left">
                    <p className={`font-semibold text-sm ${item.isDanger ? 'text-red-600' : ''}`}>{item.label}</p>
                    <p className="text-[10px] text-gray-500">{item.desc}</p>
                  </div>
                </div>
                <span className="material-icons-round text-gray-400">chevron_right</span>
              </button>
            ))}
          </div>
        </section>

        <div className="text-center pt-8 opacity-60">
          <h3 className="text-lg font-display font-bold">ARAM</h3>
          <p className="text-[10px] tracking-widest uppercase">Brilla Cabrón</p>
          <p className="text-[8px] mt-4">Versión 2.5.0 (Gemini Powered)</p>
        </div>
      </div>
    </div>
  );
};
