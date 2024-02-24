import React, { useState } from 'react';
import './css/NightPharmacyCard.css'
import { faPhone, faLocationDot, faMapLocationDot, faMapPin, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import pharmacyImage from '../../assets/pharmacy.gif';



const NightPharmacyCard = ({ pharmacy, setShowNightPharmacyMapPopup, setSelectedPharmacy, setShowSharePopup }) => {
  return (
    <div className="night-pharmacy-card">
      <div className='night-pharmacy-name'>{pharmacy.eczane}</div>
      <div className="night-pharmacy-info">
        <FontAwesomeIcon icon={faLocationDot} /> {pharmacy.adres}
      </div>
      <div className="night-pharmacy-info">
        <FontAwesomeIcon icon={faPhone} /> {pharmacy.tel}
      </div>

      <div className="night-pharmacy-info">
        <FontAwesomeIcon icon={faMapPin} />{pharmacy.ilce}
      </div>
      <div style ={{display: "flex", justifyContent: "space-between"}}>
        <div>
          <div className="night-pharmacy-info">
            <Button className="btn" onClick={() => { setShowNightPharmacyMapPopup(true); setSelectedPharmacy(pharmacy); }}><FontAwesomeIcon icon={faMapLocationDot} />Haritada Göster</Button>
          </div>

          <div className="night-pharmacy-info">
            <Button className="btn" onClick={() => { setShowSharePopup(true); setSelectedPharmacy(pharmacy); }}>  <FontAwesomeIcon icon={faShareNodes} />Paylaş</Button>
          </div>
        </div>
        <div><img className="pharmacy-img" src={pharmacyImage} alt="Resim açıklaması"/></div>
      </div>

    </div>
  );
};

export default NightPharmacyCard;