const offres = [    
  {
    titre: "Operateur de Grue",
    entreprise: "Fekola SA",
        lieu: "Mali",
    diplome: "",
    datePublication: "15 Février 2025",
    dateFin: "25 Février 2025",
    logo: "https://malibaara-assets.s3.eu-west-3.amazonaws.com/833b9c51-3979-45e2-8536-48589945f286/Fekola%20SA.png",
    lien: "https://malibaara.com/jobs/details/14833"
  },
  {
    titre: "Contrôleur de coûts - Projet",
    entreprise: "Une Société de la place",
        lieu: "Bamako",
    diplome: "Bac+3",
    datePublication: "14 Février 2025",
    dateFin: "20 Février 2025",
    logo: "https://malibaara.com/assets/images/default-job.png",
    lien: "https://malibaara.com/jobs/details/14831"
  },
  {
    titre: "Un (e) (01) Assistante (e) Suivi Evaluation Redevabilité et Apprentissage",
    entreprise: "Croix-Rouge Malienne",
        lieu: "Mopti",
    diplome: "Bac+3",
    datePublication: "13 Février 2025",
    dateFin: "24 Février 2025",
    logo: "https://malibaara-assets.s3.eu-west-3.amazonaws.com/cd9f44f5-5855-45fb-ab26-14339bb9af9d/logo%20CRM.png",
    lien: "https://malibaara.com/jobs/details/14830"
  },
  {
    titre: "Un (01) Responsable Auditeur interne",
    entreprise: "Une Société de la place",
        lieu: "Bamako",
    diplome: "Bac+3",
    datePublication: "12 Février 2025",
    dateFin: "26 Février 2025",
    logo: "https://malibaara.com/assets/images/default-job.png",
    lien: "https://malibaara.com/jobs/details/14829"
  },
  {
    titre: "PMO Manager",
    entreprise: "IENG GROUP",
        lieu: "Bamako",
    diplome: "Bac+3",
    datePublication: "12 Février 2025",
    dateFin: "26 Février 2025",
    logo: "https://malibaara-assets.s3.eu-west-3.amazonaws.com/3b735171-5edb-458d-9533-4a8e6960130b/1571306680049.jpg",
    lien: "https://malibaara.com/jobs/details/14828"
  },
  {
    titre: "UN(E) PHARMACIEN(NE) DISPENSATEUR",
    entreprise: "CSLS-TBH",
        lieu: "Bamako",
    diplome: "Bac+8",
    datePublication: "11 Février 2025",
    dateFin: "28 Février 2025",
    logo: "https://malibaara-assets.s3.eu-west-3.amazonaws.com/e95eaa48-b06d-461b-bc99-241b474a9da2/CLCS.png",
    lien: "https://malibaara.com/jobs/details/14827"
  },
  {
    titre: "DEUX (02) MÉDECINS (MEDECIN/COORDINATEUR",
    entreprise: "CSLS-TBH",
        lieu: "Bamako",
    diplome: "Bac+8",
    datePublication: "11 Février 2025",
    dateFin: "28 Février 2025",
    logo: "https://malibaara-assets.s3.eu-west-3.amazonaws.com/e95eaa48-b06d-461b-bc99-241b474a9da2/CLCS.png",
    lien: "https://malibaara.com/jobs/details/14826"
  },
  {
    titre: "AGENT COMMERCIAL",
    entreprise: "Une Société de la place",
        lieu: "Bamako",
    diplome: "Bac+3",
    datePublication: "10 Février 2025",
    dateFin: "6 Mars 2025",
    logo: "https://malibaara.com/assets/images/default-job.png",
    lien: "https://malibaara.com/jobs/details/14825"
  },
  {
    titre: "QHSE Supervisor",
    entreprise: "IENG GROUP",
        lieu: "Bamako",
    diplome: "Bac+3",
    datePublication: "7 Février 2025",
    dateFin: "24 Février 2025",
    logo: "https://malibaara-assets.s3.eu-west-3.amazonaws.com/3b735171-5edb-458d-9533-4a8e6960130b/1571306680049.jpg",
    lien: "https://malibaara.com/jobs/details/14824"
  },
  {
    titre: "QHSE Coordinator",
    entreprise: "IENG GROUP",
        lieu: "Bamako",
    diplome: "Bac+3",
    datePublication: "7 Février 2025",
    dateFin: "24 Février 2025",
    logo: "https://malibaara-assets.s3.eu-west-3.amazonaws.com/3b735171-5edb-458d-9533-4a8e6960130b/1571306680049.jpg",
    lien: "https://malibaara.com/jobs/details/14823"
  }

];

const mois = {
  "Janvier": 0, "Février": 1, "Mars": 2, "Avril": 3, "Mai": 4, "Juin": 5,
  "Juillet": 6, "Août": 7, "Septembre": 8, "Octobre": 9, "Novembre": 10, "Décembre": 11
};

// Fonction pour convertir une date en format 'dd Mois yyyy' en objet Date
function convertirDate(dateStr) {
  const [jour, moisNom, annee] = dateStr.split(' ');
  return new Date(annee, mois[moisNom], jour);
}

const currentDate = new Date(); // Date actuelle

offres.forEach(offre => {
    const dateFin = convertirDate(offre.dateFin);

    if (currentDate <= dateFin) {  // On garde uniquement les offres non expirées
        const offreElement = document.createElement('div');
        offreElement.classList.add('offre-card');

        offreElement.innerHTML = `
            <img src="${offre.logo}" alt="Logo de ${offre.entreprise}" class="logo">
            <h3>${offre.titre}</h3>
            <p><strong>Entreprise :</strong> ${offre.entreprise}</p>
            <p><strong>Lieu :</strong> ${offre.lieu}</p>
            <p><strong>Diplôme :</strong> ${offre.diplome}</p>
            <p><strong>Date de publication :</strong> ${offre.datePublication}</p>
            <p><strong>Date de fin :</strong> ${offre.dateFin}</p>
            <a href="${offre.lien}" target="_blank">Voir l'offre</a>
        `;

        document.getElementById('offres').appendChild(offreElement);
    }
});
