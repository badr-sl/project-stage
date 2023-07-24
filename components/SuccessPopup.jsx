import React, { useEffect } from 'react';

const SuccessPopup = ({  onClose }) => {
  useEffect(() => {
    // Fermer la popup après 3 secondes
    const timer = setTimeout(() => {
      onClose();
    }, 3300);

    // Nettoyer le timer lorsque le composant est démonté
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="success-popup">
      <p>Votre commande a été validée avec succès </p>
         
      <style jsx>{`
        .success-popup {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: green;
          color: white;
          padding: 20px;
          border-radius: 8px;
          z-index: 9999;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
          text-align: center;
          width: 400px;
        }
        .success-popup p {
          margin: 0;
          font-size: 18px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default SuccessPopup;
