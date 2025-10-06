import React from "react";

const experiences = [
  {
    title: "Technicien Systèmes & Réseaux",
    company: "AMSOM Habitat",
    companyInfo: "Office Public de l’Habitat (ETI publique, ~400 salariés)",
    date: "Juin - Juil. 2025",
    description: (
      <>
        <div>Stage 2e année BTS SIO. Sécurisation d’infrastructures (Fortinet, DMZ), supervision réseau (Zabbix, GLPI), administration Windows/Linux, déploiement et migration de postes, gestion de tickets et GPO.</div>

        <h5 className="font-semibold mt-3">Missions réalisées</h5>
        <div className="space-y-3 mt-2 ml-0">
          <div>
            <strong>Refonte et sécurisation de la DMZ (Fortinet)</strong>
            <p><strong>Problème identifié :</strong> la DMZ n’était pas suffisamment cloisonnée ; certaines règles de pare-feu étaient trop permissives.</p>
            <p><strong>Objectif :</strong> renforcer la sécurité et limiter les flux réseau non nécessaires.</p>
            <p><strong>Travail effectué :</strong></p>
            <ul className="list-disc ml-5">
              <li>Audit des règles existantes sur le pare-feu Fortinet.</li>
              <li>Suppression et réécriture de règles ACL obsolètes.</li>
              <li>Segmentation VLAN pour isoler les différents services.</li>
              <li>Application du principe du moindre privilège (seuls les flux nécessaires sont autorisés).</li>
              <li>Mise en place d’un filtrage granulaire des flux entrants/sortants.</li>
            </ul>
            <p><strong>Résultat :</strong> Réduction de 40 % des flux ouverts dans la DMZ. Infrastructure réseau plus segmentée et conforme aux bonnes pratiques de sécurité.</p>
          </div>

          <div>
            <strong>Remplacement et déploiement de 45 postes utilisateurs</strong>
            <p><strong>Problème identifié :</strong> de nombreux postes étaient obsolètes et incompatibles avec les politiques de sécurité actuelles (chiffrement, GPO, compatibilité réseau).</p>
            <p><strong>Objectif :</strong> remplacer les anciens PC tout en intégrant les nouveaux dans le domaine Active Directory.</p>
            <p><strong>Travail effectué :</strong></p>
            <ul className="list-disc ml-5">
              <li>Configuration des nouveaux postes Windows 10.</li>
              <li>Intégration de 45 PC dans le domaine Active Directory.</li>
              <li>Création d’un planning de remplacement via un tableau de rendez-vous avec les salariés.</li>
              <li>Vérification des droits utilisateurs, des connexions réseau et des profils.</li>
            </ul>
            <p><strong>Résultat :</strong> Poste utilisateur modernisé et intégré au système centralisé. Gain en performance et compatibilité avec les outils de chiffrement (BitLocker) et de supervision.</p>
          </div>

          <div>
            <strong>Supervision et cartographie du réseau (Zabbix)</strong>
            <p><strong>Problème identifié :</strong> les plans réseau n’étaient plus à jour et certaines antennes Wi‑Fi n’étaient pas correctement documentées.</p>
            <p><strong>Objectif :</strong> actualiser la supervision réseau pour améliorer le suivi des équipements.</p>
            <p><strong>Travail effectué :</strong></p>
            <ul className="list-disc ml-5">
              <li>Refonte complète des plans des bâtiments dans Zabbix.</li>
              <li>Positionnement précis des imprimantes, bornes Wi‑Fi, et commutateurs à chaque étage.</li>
              <li>Attribution et mise à jour des adresses IP et noms d’hôtes.</li>
              <li>Vérification du bon fonctionnement de la supervision.</li>
            </ul>
            <p><strong>Résultat :</strong> Vue réseau complète, claire et actualisée. Facilitation du diagnostic lors d’incidents réseau.</p>
          </div>

          <div>
            <strong>Gestion du parc et assistance technique (GLPI & ManageEngine)</strong>
            <p><strong>Problème identifié :</strong> grand nombre d’incidents utilisateurs non centralisés et lenteur dans le traitement.</p>
            <p><strong>Objectif :</strong> améliorer le suivi et la réactivité du support technique.</p>
            <p><strong>Travail effectué :</strong></p>
            <ul className="list-disc ml-5">
              <li>Traitement d’environ 100 tickets utilisateurs sur GLPI : problèmes de connexion, imprimantes, mises à jour, périphériques, etc.</li>
              <li>Suivi des demandes via le système de tickets.</li>
              <li>Utilisation de ManageEngine Desktop Central pour le déploiement de logiciels, la prise en main à distance, et la gestion de l’inventaire matériel.</li>
            </ul>
            <p><strong>Résultat :</strong> Réduction du temps moyen de résolution des incidents. Meilleure visibilité sur l’état du parc informatique.</p>
          </div>

          <div>
            <strong>Supervision complémentaire et outils de sécurité</strong>
            <p>Participation à la configuration de BitLocker pour le chiffrement des disques. Découverte de Genetec, solution utilisée pour la vidéosurveillance et le contrôle d’accès.</p>
          </div>
        </div>
      </>
    )
  },

  {
    title: "Technicien Informatique",
    company: "Orange Bank",
    companyInfo: "SA, GE – établissement Amiens (~180 salariés)",
    date: "Mai - Juin 2024",
    description: (
      <>
        <div>Stage 1ère année BTS SIO. Support utilisateurs, gestion du parc informatique, installation et maintenance de postes, assistance bureautique.</div>

        <h5 className="font-semibold mt-3">Automatisation et serveurs Linux</h5>
        <p><strong>Problème identifié :</strong> certains processus d’installation ou de configuration étaient trop manuels.</p>
        <p><strong>Objectif :</strong> explorer des solutions d’automatisation sous Linux.</p>
        <p><strong>Travail effectué :</strong></p>
        <ul className="list-disc ml-5">
          <li>Mise en place de machines virtuelles Linux (Ubuntu).</li>
          <li>Création de serveurs de test pour automatiser certaines tâches (ex : installation de paquets, configuration réseau).</li>
          <li>Familiarisation avec les commandes d’administration système (bash, gestion de services).</li>
        </ul>
        <p><strong>Résultat :</strong> Amélioration des connaissances en automatisation et en environnement Linux. Réduction du temps de configuration pour les futures installations.</p>
      </>
    )
  },

  {
    title: "Magasinier (Job étudiant)",
    company: "Conforama",
    companyInfo: null,
    date: "Oct. 2024 - Aujourd’hui",
    description: "Gestion logistique, travail d’équipe, organisation des stocks chaque samedi."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="p-12 bg-gray-100 dark:bg-gray-800">
      <h3 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        Expériences professionnelles
      </h3>
      <div className="max-w-4xl mx-auto space-y-6">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="p-6 bg-white dark:bg-gray-700 rounded shadow flex items-start space-x-4"
          >
            {/* If company contains AMSOM, show the logo/image */}
            {exp.company && /AMSOM/i.test(exp.company) && (
              <img src={`${process.env.PUBLIC_URL}/images/Amsom.png`} alt="AMSOM" className="w-20 h-20 object-contain rounded" />
            )}
            {/* If company contains Orange, show Orange Bank logo */}
            {exp.company && /Orange/i.test(exp.company) && (
              <img src={`${process.env.PUBLIC_URL}/images/Orange_bank.png`} alt="Orange Bank" className="w-20 h-20 object-contain rounded" />
            )}
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white">{exp.title}</h4>
              <span className="block text-gray-700 dark:text-gray-300 font-semibold">
                {exp.company}
                {exp.companyInfo && (
                  <span className="ml-2 text-xs text-gray-500 dark:text-gray-400 font-normal">{exp.companyInfo}</span>
                )}
              </span>
              <span className="text-gray-700 dark:text-gray-300">{exp.date}</span>
              <div className="text-gray-700 dark:text-gray-300 mt-2">{exp.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
