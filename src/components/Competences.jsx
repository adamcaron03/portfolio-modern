import React from "react";

const competences = [
  {
  image: "/images/Fortinet.png",
    title: "Fortinet - Sécurisation d’infrastructures (DMZ)",
    description: `Hardening et reconfiguration d’une DMZ (firewall Fortinet – règles ACL, segmentation VLAN, gestion des flux entrants/sortants).\nMise en place d’un filtrage granulaire des flux réseau dans une DMZ (principes de moindre privilège, ouverture/fermeture de ports).`
  },
  {
  image: "/images/Zabbix_logo_square.svg.png",
    title: "Zabbix - Supervision & Cartographie",
    description: `Refonte des plans d'un bâtiment pour placer les imprimantes et bornes WiFi à chaque étage, en appliquant leur IP et nom. Mise à jour de la cartographie du plan réseau pour toutes les antennes WiFi de l'entreprise.`
  },
  {
  image: "/images/Cisco-Webex-Calling.png",
    title: "TP Réseaux (Cisco) - Architecture & Sécurisation",
    description: `Conception d’une architecture réseau Cisco (routeurs + switchs L3)\n\nÉlaboration d’un plan d’adressage IP (postes clients, serveurs, imprimantes)\n\nSegmentation réseau par VLAN (Direction, Ventes, Comptabilité, Production, Techniciens, Serveurs)\n\nRoutage inter-VLAN et configuration des sous-interfaces (802.1Q)\n\nDéploiement d’un serveur DHCP/DNS et d’un serveur web\n\nConfiguration des passerelles, DNS et réservations IP pour les clients\n\nDocumentation et cartographie réseau (adressage + interconnexions)\n\nMise en place d’une sécurisation des flux via cloisonnement et hiérarchisation des VLAN.`
  },
{
  image: "/images/Active Directory.png",
    title: "Active Directory & Déploiement PC",
    description: `Injection de 45 PC dans le domaine Active Directory, configuration, et mise en place d'un tableau de rendez-vous avec les salariés pour effectuer le remplacement de leur poste et outils de travail.`
  },
  {
  image: "/images/PictoGlpi.png",
    title: "GLPI - Gestion de tickets",
    description: `Gestion des tickets pour intervenir sur l'ensemble de l'entreprise (problèmes utilisateurs, techniques, PC, imprimantes, périphériques, etc.). Création de GPO, gestion de VLAN.`
  },
  {
  image: "/images/UbuntuCoF.svg.png",
    title: "Automatisation & Linux",
    description: `Création de serveurs d'automatisation et de serveurs sous Linux sous forme de VM.`
  }
];

export default function Competences() {
  return (
    <section id="competences" className="p-12 bg-white dark:bg-gray-800">
      <h3 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        Blocs de Compétences
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {competences.map((comp, i) => (
          <div
            key={i}
            className="flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-700 rounded shadow hover:scale-105 transition"
          >
            <img src={comp.image} alt={comp.title} className="h-24 mb-4 object-contain" />
            <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white text-center">{comp.title}</h4>
            <p className="text-gray-700 dark:text-gray-300 text-center">{comp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
