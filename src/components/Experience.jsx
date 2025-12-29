import React from "react";

const experiences = [
  {
    title: "Technicien Systèmes & Réseaux",
    company: "AMSOM Habitat",
    companyInfo: "Office Public de l’Habitat (ETI publique, ~400 salariés)",
    date: "Juin - Juil. 2025",
    description: "Stage 2e année BTS SIO. Sécurisation d’infrastructures (Fortinet, DMZ), supervision réseau (Zabbix, GLPI), administration Windows/Linux, déploiement et migration de postes, gestion de tickets et GPO."
  },
  {
    title: "Technicien Informatique",
    company: "Orange Bank",
    companyInfo: "SA, GE – établissement Amiens (~180 salariés)",
    date: "Mai - Juin 2024",
    description: "Stage 1ère année BTS SIO. Support utilisateurs, gestion du parc informatique, installation et maintenance de postes, assistance bureautique."
  },
  {
    title: "Magasinier (Job étudiant)",
    company: "Conforama",
    companyInfo: null,
    date: "Oct. 2024 - Oct. 2025",
    description: "Gestion logistique, travail d’équipe, organisation des stocks chaque samedi."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="p-12 bg-gray-100 dark:bg-gray-800">
      <h3 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        Expériences
      </h3>
      <div className="max-w-4xl mx-auto space-y-6">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="p-6 bg-white dark:bg-gray-700 rounded shadow"
          >
            <h4 className="font-bold text-gray-900 dark:text-white">{exp.title}</h4>
            <span className="block text-gray-700 dark:text-gray-300 font-semibold">
              {exp.company}
              {exp.companyInfo && (
                <span className="ml-2 text-xs text-gray-500 dark:text-gray-400 font-normal">{exp.companyInfo}</span>
              )}
            </span>
            <span className="text-gray-700 dark:text-gray-300">{exp.date}</span>
            <p className="text-gray-700 dark:text-gray-300 mt-2">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
