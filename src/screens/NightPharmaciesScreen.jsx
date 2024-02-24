import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Data from '../components/nightpharmacies/Data'
import NightPharmacyCard from '../components/nightpharmacies/NightPharmacyCard';
import './css/NightPharmaciesScreen.css'
import NightPharmacyLocationPopup from '../components/nightpharmacies/NightPharmacyLocationPopup';
import SharePopup from '../components/share/SharePopup';

export const NightPharmaciesScreen = () => {
    const [nightPharmacies, setNightPharmacies] = useState(null);
    const [isShowNightPharmacyMapPopup, setShowNightPharmacyMapPopup] = useState();
    const [isShowSharePopup, setShowSharePopup] = useState();
    const [selectedPharmacy, setSelectedPharmacy] = useState(null);

    useEffect(() => {
        //setNightPharmacies(Data);
        const fetchNobetBelediyeData = async () => {
            try {
                const response = await fetch('https://cors-anywhere.herokuapp.com/https://www.beo.org.tr/nobet-belediye', {
                    method: 'GET',
                    mode: 'cors', 
                });
        
                if (!response.ok) {
                    throw new Error('API isteği sırasında hata oluştu:', response.statusText);
                }
        
                const responseData = await response.text();
                const jsonData = JSON.parse(responseData);
                setNightPharmacies(jsonData);
            } catch (error) {
                setNightPharmacies(Data);
                console.error('API isteği sırasında hata oluştu:', error);
            }
        };
        
        fetchNobetBelediyeData();
        
          
             
    }, []);

    return (
        <div className="night-pharmacies-container">
            {nightPharmacies && Object.values(nightPharmacies).map((pharmacy, index) => (
                <NightPharmacyCard key={index}
                    pharmacy={pharmacy}
                    setShowNightPharmacyMapPopup={setShowNightPharmacyMapPopup}
                    setSelectedPharmacy={setSelectedPharmacy}
                    setShowSharePopup = {setShowSharePopup}
                />
            ))}
           
            {isShowNightPharmacyMapPopup == true &&
                <NightPharmacyLocationPopup
                    show={isShowNightPharmacyMapPopup}
                    setShowNightPharmacyMapPopup={setShowNightPharmacyMapPopup}
                    selectedItem ={selectedPharmacy}
                />
            }

            {isShowSharePopup == true &&
                <SharePopup
                    show={isShowSharePopup}
                    setShowSharePopup={setShowSharePopup}
                    selectedItem={selectedPharmacy}
                />
            }


        </div>
    )
}
