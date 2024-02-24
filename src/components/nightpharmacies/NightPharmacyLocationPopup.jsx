import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';
import SimpleMap from '../map/SimpleMap';
import './css/NightPharmacyLocationPopup.css'

const NightPharmacyLocationPopup = ({show, setShowNightPharmacyMapPopup, selectedItem}) => {
  
    const handleClose = () =>{
        setShowNightPharmacyMapPopup(false);
    }
    
    return (
        <Modal show={show} onHide={handleClose} animation={false} className="night-pharmacy-location">
            <Modal.Header closeButton>
                <Modal.Title><div className='title'>{selectedItem.eczane}</div></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <SimpleMap lat ={parseFloat(selectedItem.enlem)} lng ={parseFloat(selectedItem.boylam)} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick = {() => handleClose()}>Kapat</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default NightPharmacyLocationPopup
