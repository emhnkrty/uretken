import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { faCommentSms, faCopy, faMapPin, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import './css/SharePopup.css'

const SharePopup = ({show, setShowSharePopup, selectedItem}) => {
   
    const handleClose = () => {
        setShowSharePopup(false);
    }
    const handleShareOnWhatsApp = () => {
        const message = `${selectedItem.eczane} - ${selectedItem.adres}`; // WhatsApp'a gönderilecek mesaj
        const uri = `https://web.whatsapp.com/send?text=${encodeURIComponent(message)}`;
      
        window.open(uri, '_blank'); // Yeni bir pencerede WhatsApp web sayfasını aç
    };

    const handleSendSMS = () => {
        debugger;
        const phoneNumber = `${selectedItem.tel}`; // SMS gönderilecek telefon numarası
        const message = ""; // SMS içeriği
        
        const uri = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
        
        window.location.href = uri;
      };

    const handleCopyLink = () => {
        debugger;
        const linkText = `${selectedItem.eczane} - ${selectedItem.adres}`;
        window.prompt("Kopyalamak için sırayla tıklayın: Ctrl+C, Enter", linkText);
      };
    return (
        <Modal show={show} onHide={handleClose} animation={false} className="night-pharmacy-location">
            <Modal.Header closeButton>
                <Modal.Title><div className='title'>Paylaş</div></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="col-12">
                    <div className="row">
                        <div className="share-div col-6 mb-3">
                            <a onClick={handleShareOnWhatsApp}>
                                <span className="share-icon"><FontAwesomeIcon icon={faWhatsapp} /></span>
                                <span className="share-text" onClick={handleShareOnWhatsApp}>Whatsapp</span>
                            </a>
                        </div>
                        <div className="share-div col-6 mb-3">
                            <a onClick={handleSendSMS}>
                                <span className="share-icon"><FontAwesomeIcon icon={faCommentSms} /></span>
                                <span className="share-text">Sms</span>
                            </a>
                        </div>

                        <div class=" share-div col-6 mb-3">
                            <a onClick={handleCopyLink}>
                                <span className="share-icon"><FontAwesomeIcon icon={faCopy} /></span>
                                <span className="share-text">Bağlantıyı Kopyala</span>
                            </a>
                        </div>

                        <div class="share-div col-6 mb-3">
                          
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => handleClose()}>Kapat</Button>
            </Modal.Footer>
        </Modal>
    )
}
export default SharePopup
