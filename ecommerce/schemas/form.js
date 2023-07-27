
export default {
  name: 'formulaire',
  title: 'Formulaire',
  type: 'document',
  fields: [
    {
      name: 'nom',
      title: 'Nom :',
      type: 'string',
    },
    {
      name: 'ville',
      title: 'Ville :',
      type: 'string',
    },
    {
      name: 'email',
      title: 'E-mail :',
      type: 'string',
    },
    {
      name: 'adresseLocal',
      title: 'Adresse :',
      type: 'text',
    },
    {
      name: 'total',
      title: 'Prix Total :',
      type: 'number',
    },
    {
      name: 'items',
      title: 'Liste des produits :', // Field title for the product list
      type: 'array', // Use the array type to store multiple products
      of: [
        {
          type: 'object',
          name:'item',
          fields: [
            {
              name: 'productName',
              title: 'Product Name :',
              type: 'string',
            },
            {
              name: 'productQte',
              title: 'Product Qte :',
              type: 'number',
            },
           
            {
              name: 'productPrice',
              title: 'Product Price :',
              type: 'number',
            },
            // Add more fields for other product properties as needed
          ],
        },
      ],
    },
  ],
};
