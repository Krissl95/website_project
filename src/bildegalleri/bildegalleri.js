import React, { useState } from 'react'
import UploadForm from './uploadform.js'
import ImageGrid from './imagegrid'
import Modal from './modal'
import './bildegalleri.css'


const BildeGalleriComponent = () => {
    const [selectedImg, setSelectedImg] = useState(null);
    return(
        <div className="mainDivBildegalleri">
            <h3>Bildegalleri</h3>
            <UploadForm />
            <ImageGrid setSelectedImg={setSelectedImg} />
            { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
        </div>
    );
}

export default BildeGalleriComponent;