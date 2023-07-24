// schemas/schema.js

export default {
  name: 'formulaire',
  title: 'Formulaire',
  type: 'document',
  fields: [
    {
      name: 'nom',
      title: 'Nom',
      type: 'string',
    },
    {
      name: 'ville',
      title: 'Ville',
      type: 'string',
    },
    {
      name: 'email',
      title: 'E-mail',
      type: 'string',
    },
    {
      name: 'adresseLocal',
      title: 'Adresse',
      type: 'text',
    },
  ],
};
