import { useState } from 'react';
import React from 'react';
import SuccessPopup from './SuccessPopup';
import { useStateContext } from '../context/StateContext';
import client from '../lib/client' ; 

export default function FormPopup(props) {
  const [nom, setNom] = useState('');
  const [ville, setVille] = useState('');
  const [email, setEmail] = useState('');
  const [adresseLocal, setAdresseLocal] = useState('');
  const [ setErrorMessage] = useState('');
  const { totalPrice } = useStateContext();
  


  const villesMaroc = [
    'Casablanca',
'Rabat',
'Marrakech',
'Fès',
'Tanger',
'Agadir',
'Meknès',
'Oujda',
'Kenitra',
'Tetouan',
'Safi',
'Mohammedia',
'Beni Mellal',
'El Jadida',
'Témara',
'Nador',
'Taza',
'Settat',
'Khouribga',
'Larache','Ouarzazate',
'Essaouira',
'Agdz'
  ];



  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérifiez que tous les champs du formulaire sont remplis avant d'envoyer les données
    if (nom && ville && email && adresseLocal) {
      try {
        setNom('');
        setVille('');
        setEmail('');
        setAdresseLocal('');
        // Utilisez le client Sanity pour envoyer les données du formulaire
        await client.create({
          _type: 'formulaire', 
          nom: nom,
          ville: ville,
          email: email,
          adresseLocal: adresseLocal,
        });

        // Réinitialisez les champs du formulaire après l'envoi des données
        setNom('');
        setVille('');
        setEmail('');
        setAdresseLocal('');

        // Affichez un message de succès ou effectuez toute autre action que vous souhaitez après l'envoi réussi du formulaire
        setShowPopup(true);
      } catch (error) {
        // Traitez les erreurs ici si nécessaire
        console.error('Erreur lors de l\'envoi des données du formulaire:', error);
      }
    } else {
      // Affichez un message d'erreur ou effectuez toute autre action si les champs du formulaire ne sont pas tous remplis
      // setErrorMessage('Veuillez remplir tous les champs requis.');
    }
  };

// hada nta3 sucssec
const [showPopup, setShowPopup] = useState(false);

const handleButtonClick = () => {
  if (nom && ville && email && adresseLocal ) {
    setShowPopup(true);
   // setErrorMessage(''); // Réinitialise le message d'erreur s'il y en avait un précédemment
  } else {
   //setErrorMessage('Veuillez remplir tous les champs requis.');
  }
};





  return (
    <div className={`popup ${props.isopen ? 'open' : ''}`}>
      <div className="popup-content">
      <span className='Xferm' onClick={props.handleclickclose}>X</span>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nom">Nom :</label>
            <input
              type="text"
              id="nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              required
              placeholder="Entrez votre Nom"

            />
            
          </div>
          
          <div>
            <label htmlFor="ville">Ville :</label>
            <select className='ville1'
              id="ville"
              value={ville}
              onChange={(e) => setVille(e.target.value)}
              placeholder='Sélectionner une ville'
              required
              
            >
              <option value="" disabled>
                Sélectionner une ville
              </option>
              {villesMaroc.map((ville) => (
                <option key={ville} value={ville}>
                  {ville}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="email">e-mail :</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Entrez votre e-mail"
            />
           
          </div>
          
          <div>
            <label htmlFor="adresseLocal">Adresse :</label>
            <textarea
              id="adresseLocal"
              value={adresseLocal}
              onChange={(e) => setAdresseLocal(e.target.value)}
              required
              placeholder="Entrez votre localisation"
              style={{ resize: 'none', maxHeight: '200px' }}
            ></textarea>
          </div>
          <div className="total">
              <h3>Total:</h3>
              <h3>${totalPrice}</h3>
            </div>
          
          <div className='tt'>
          <button type="submit" className='btn1' onClick={handleButtonClick}>Valider</button>
          {showPopup && (
    <SuccessPopup
      message="Message de succès"
      onClose={() => setShowPopup(false)}
    />
  )}
      
          </div>

         
          
        </form>
      </div>

      <style jsx>{`
        .popup {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: none;
          justify-content: center;
          align-items: center;
        }
        .ville1{
          width: 100%;
          padding: 10px;
          font-size: 13px;
          border: 1px solid #ccc;
          border-radius: 5px;
          appearance: none; /* Pour supprimer les styles de l'élément select du navigateur */
          background-color: #fff;
          background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg fill="%23666666" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"/%3E%3C/svg%3E'); /* Ajoutez une petite flèche pour styliser le select */
          background-position: right 10px center;
          background-repeat: no-repeat;
          background-size: 12px;
          cursor: pointer;
          max-height: 190px; /* Vous pouvez ajuster cette valeur selon vos besoins */
          overflow-y: auto;
        }
        .tt{
          padding: 0px 12px;
        }

        .popup.open {
          display: flex;
        }

        .popup-content {
          background-color: #fff;
          padding: 20px;
          border-radius: 5px;
          width: 430px;
          
        }
        .btn1{
          width: 100%;
          max-width: 400px;
          padding: 10px 12px;
          border-radius: 15px;
          border: none;
          font-size: 20px;
          margin-top: 10px;
          margin-top: 40px;
          text-transform: uppercase;
          background-color: #0266da;
          color: #fff;
          cursor: pointer;
          
        }
        .btn1:hover{
          transform: scale(1.1,1.1);
          transition: transform 0.5s ease;
          
        }
       
        .Xferm {
          display: inline-block;
          width: 25px;
          height: 25px;
          line-height: 25px;
          text-align: center;
          background-color: #ccc;
          color: #fff;
          font-weight: bold;
          cursor: pointer;
          border-radius: 50%;
          margin-left: 367px;
          margin-bottom: 10px;
        }
        
        .Xferm:hover {
          background-color: #f02d34;
        }
        
        label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
        }
        
        input[type="text"],
        textarea {
          width: 100%;
          padding: 5px;
          border: 1px solid #ccc;
          border-radius: 3px;
        }
        
        input[type="email"] {
          width: 100%;
          padding: 5px;
          border: 1px solid #ccc;
          border-radius: 3px;
        }
        
        div {
          margin-bottom: 10px;
        }
        #adresseLocal{
          width: 389px;
          height: 126px;
        }
        .total1{
          display: flex;
          justify-content: space-between;
          padding-top: 20px;
        }
        .total1 h3{
          font-size: 22px;
        
        }
        
        
        
       
        
        





        
        
        
          
        
      `}</style>
    </div>
  );
}
