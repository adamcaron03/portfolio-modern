import React from "react";

const projects = [
  {
    name: "Installation & gestion de services",
    description: (
      <>
        Installation et gestion de services informatiques pour une entreprise.<br/>
        <span className="text-sm text-gray-500 dark:text-gray-400">Composé de 5 VM : ipfire, Windows Server, Windows 10, serveur Xubuntu, serveur Debian.</span>
      </>
    )
  },
  {
    name: "Installation & gestion de services",
    description: (
      <>
        Installation et gestion de services informatiques pour une entreprise.<br/>
        <span className="text-sm text-gray-500 dark:text-gray-400">Composé de 5 VM : ipfire, Windows Server, Windows 10, serveur Xubuntu, serveur Debian.</span>
      </>
    )
  },
  {
    name: "Active Directory & GPO",
    description: (
      <>
        Mise en place d’un Active Directory avec GPO, gestion des accès, ressources partagées et pare-feu pour une agence simulée.
      </>
    )
  }
];

export default function Projects() {
  return (
    <section id="projects" className="p-12 bg-gray-50 dark:bg-gray-900">
      <h3 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        Projets VM
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.map((project, i) => (
          <div
            key={i}
            className="p-6 bg-white dark:bg-gray-700 rounded shadow hover:scale-105 transition"
          >
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">{project.name}</h4>
            <div className="text-gray-700 dark:text-gray-300">{project.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
