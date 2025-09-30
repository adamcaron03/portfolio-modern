import React from "react";
export default function Hero() {
  return (
    <section className="py-16 flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none select-none opacity-30 animate-pulse" style={{background: 'radial-gradient(circle at 60% 40%, #3b82f6 0%, transparent 70%)'}}></div>
      <div className="relative z-10 p-8 rounded-2xl shadow-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-md transition-all duration-500 hover:scale-105">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white drop-shadow-lg">
          Adam Caron
        </h2>
        <div className="text-xl mb-6 text-gray-700 dark:text-gray-300 space-y-2 max-w-2xl mx-auto leading-relaxed">
          <p>
            Je m’appelle Adam, étudiant en cybersécurité.<br/>
            J’aime comprendre comment fonctionnent les systèmes et les réseaux, et je prends plaisir à les administrer et les sécuriser.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
          <div className="bg-blue-100 dark:bg-blue-900/60 rounded-xl shadow-md px-6 py-4 min-w-[220px] max-w-xs text-left">
            <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Centres d'intérêt</h5>
            <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-base">
              <li>Réseau & sécurité informatique</li>
              <li>Nouvelles technologies</li>
              <li>Découverte et apprentissage</li>
            </ul>
          </div>
          <div className="bg-green-100 dark:bg-green-900/60 rounded-xl shadow-md px-6 py-4 min-w-[220px] max-w-xs text-left">
            <h5 className="font-semibold text-green-700 dark:text-green-300 mb-1">Passions</h5>
            <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-base">
              <li>Sport</li>
              <li>Le Dimanche</li>
              <li>Moto GP</li>
            </ul>
          </div>
          <div className="bg-yellow-100 dark:bg-yellow-900/60 rounded-xl shadow-md px-6 py-4 min-w-[220px] max-w-xs text-left">
            <h5 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-1">Infos pratiques</h5>
            <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-base">
              <li>06 88 28 55 50</li>
              <li>adam.caron80@gmail.com</li>
              <li>Amiens / Lille</li>
              <li>Permis B (voiture) & A (moto)</li>
            </ul>
          </div>
        </div>
        <div className="space-x-4 mt-4">
          <a
            href="CV_NEXA_Caron_Adam.pdf"
            className="px-4 py-2 bg-blue-600 text-white rounded shadow-lg hover:bg-blue-700 transition"
          >
            Mon CV
          </a>
          <a
            href="https://www.linkedin.com/in/adam-caron-25a07b291/"
            className="px-4 py-2 bg-gray-600 text-white rounded shadow-lg hover:bg-gray-700 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
