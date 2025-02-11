const offres = [    
  {
    titre: 'Logistics Supervisor, Warehouse',
    entreprise: 'IENG GROUP',
    lieu: "Mali",
         salaire : "200 000 fcfa - 800 000fcfa",
        diplome: "Bac+3",
    datePublication: '28 Janvier 2025',
    dateFin: '11 Février 2025',
    logo: 'https://malibaara-assets.s3.eu-west-3.amazonaws.com/3b735171-5edb-458d-9533-4a8e6960130b/1571306680049.jpg',
    lien: 'https://malibaara.com/jobs/details/14781'
  },
  {
    titre: 'Logistics Coordinator, Dispatch',
    entreprise: 'IENG GROUP',
    lieu: "Mali",
         salaire : "200 000 fcfa - 800 000 fcfa",
        diplome: "Bac+3",
    datePublication: '28 Janvier 2025',
    dateFin: '11 Février 2025',
    logo: 'https://malibaara-assets.s3.eu-west-3.amazonaws.com/3b735171-5edb-458d-9533-4a8e6960130b/1571306680049.jpg',
    lien: 'https://malibaara.com/jobs/details/14780'
  },
  {
    titre: 'O&M Coordinator, Site Security',
    entreprise: 'IENG GROUP',
    lieu: "Mali",
         salaire : "200 000 fcfa - 800 000 fcfa",
        diplome: "Bac+3",
    datePublication: '28 Janvier 2025',
    dateFin: '11 Février 2025',
    logo: 'https://malibaara-assets.s3.eu-west-3.amazonaws.com/3b735171-5edb-458d-9533-4a8e6960130b/1571306680049.jpg',
    lien: 'https://malibaara.com/jobs/details/14779'
  },
  {
    titre: 'O&M Coordinator, Data Entry',
    entreprise: 'IENG GROUP',
    lieu: "Mali",
         salaire : "200 000 fcfa - 800 000 fcfa",
        diplome: "Bac+3",
    datePublication: '28 Janvier 2025',
    dateFin: '11 Février 2025',
    logo: 'https://malibaara-assets.s3.eu-west-3.amazonaws.com/3b735171-5edb-458d-9533-4a8e6960130b/1571306680049.jpg',
    lien: 'https://malibaara.com/jobs/details/14778'
  },
  {
    titre: 'Civil Engineer',
    entreprise: 'IENG GROUP',
    lieu: "Mali",
         salaire : "200 000 fcfa - 800 000 fcfa",
        diplome: "Bac+3",
    datePublication: '28 Janvier 2025',
    dateFin: '11 Février 2025',
    logo: 'https://malibaara-assets.s3.eu-west-3.amazonaws.com/3b735171-5edb-458d-9533-4a8e6960130b/1571306680049.jpg',
    lien: 'https://malibaara.com/jobs/details/14777'
  },
  {
    titre: 'Support officer',
    entreprise: 'IENG GROUP',
    lieu: "Mali",
         salaire : "200 000 fcfa - 800 000 fcfa",
        diplome: "Bac+3",
    datePublication: '28 Janvier 2025',
    dateFin: '11 Février 2025',
    logo: 'https://malibaara-assets.s3.eu-west-3.amazonaws.com/3b735171-5edb-458d-9533-4a8e6960130b/1571306680049.jpg',
    lien: 'https://malibaara.com/jobs/details/14776'
  },
  {
    titre: 'Agent.e de projet – LUTTE CONTRE LA DETENTION PROVISOIRE ILLEGALE AU MALI',
    entreprise: 'Avocats sans frontières CANADA',
    lieu: "Bamako",
         salaire : "200 000 fca - 800 000 fcfa",
        diplome: "Bac+3",
    datePublication: '28 Janvier 2025',
    dateFin: '21 Février 2025',
    logo: 'https://malibaara-assets.s3.eu-west-3.amazonaws.com/86b5cf0b-616c-4d65-bda2-5fc87a00e9c5/logo%20avsf.png',
    lien: 'https://malibaara.com/jobs/details/14775'
  },
  {
    titre: 'e-opérateurs de storefront',
    entreprise: 'ABM INDUSTRIE SARL',
    lieu: "Bamako",
         salaire : "",
        diplome: "",
    datePublication: '27 Janvier 2025',
    dateFin: '14 Février 2025',
    logo: 'https://malibaara.com/assets/images/default-job.png',
    lien: 'https://malibaara.com/jobs/details/14772'
  },
  {
    titre: 'PROGRAMME DE FORMATION DU MOIS DE FEVRIER 2025',
    entreprise: 'Mining and Safety services',
    lieu: "Bamako",
         salaire : "",
        diplome: "",
    datePublication: '22 Janvier 2025',
    dateFin: '12 Février 2025',
    logo: 'https://malibaara-assets.s3.eu-west-3.amazonaws.com/c1eaaeb3-376b-49db-b20e-42f24540911c/PHOTO-2022-03-17-08-11-28.jpg',
    lien: 'https://malibaara.com/jobs/details/14761'
  },
    {
    titre: 'FORMATION EN SUIVI-EVALUTION (initiation/perfectionnement)',
    entreprise: 'Cabinet SERRA',
    lieu: "Bamako",
         salaire : "",
        diplome: "Bac+2",
    datePublication: '17 Janvier 2025',
    dateFin: '28 Février 2025',
    logo: 'https://malibaara-assets.s3.eu-west-3.amazonaws.com/f94a8050-cb82-4e14-bde9-0de40daae715/serra.png',
    lien: 'https://malibaara.com/jobs/details/14755'
  },
  {
    titre: 'PROGRAMME DE FORMATION EN GESTION DE LA PAIE',
    entreprise: 'Cabinet SERRA',
    lieu: "Bamako",
         salaire : "",
        diplome: "Bac+2",
    datePublication: '17 Janvier 2025',
    dateFin: '28 Février 2025',
    logo: 'https://malibaara-assets.s3.eu-west-3.amazonaws.com/f94a8050-cb82-4e14-bde9-0de40daae715/serra.png',
    lien: 'https://malibaara.com/jobs/details/14754'
  },

];

const currentDate = new Date();  // Date actuelle

offres.forEach(offre => {
    // Convertir la date de fin de l'offre en objet Date pour la comparaison
    const dateFin = new Date(offre.dateFin);

    // Créer l'élément pour l'offre et l'ajouter à la page
    const offreElement = document.createElement('div');
    offreElement.classList.add('offre-card');

    // Vérifier si l'offre est expirée
    if (currentDate > dateFin) {
        offreElement.innerHTML = `
            <img src="${offre.logo}" alt="Logo de ${offre.entreprise}" class="logo">
            <h3>${offre.titre}</h3>
            <p><strong>Entreprise :</strong> ${offre.entreprise}</p>
            <p><strong>Lieu :</strong> ${offre.lieu}</p>
            <p><strong>Diplôme :</strong> ${offre.diplome}</p>
            <p><strong>Date de publication :</strong> ${offre.datePublication}</p>
            <p><strong>Date de fin :</strong> ${offre.dateFin}</p>
            <p><strong>Cette offre est expirée.</strong></p>
        `;
    } else {
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
    }

    // Ajouter l'élément à la page
    document.getElementById('offres').appendChild(offreElement);
});
