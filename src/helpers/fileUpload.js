

export const fileUpload = async ( file ) => {
    
    /* Copy your upload url from your cloudinary account 
    Ej: https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/upload
    */
    
    const cloudUrl = 'https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/upload';
    
    const formData = new FormData();
    
    /* Insert your preset name here */
    formData.append('upload_preset','YOUR_PRESET_NAME');
    formData.append('file', file );
    
    try {
        
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });
        
        if ( resp.ok ) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }
        
    } catch (err) {
        throw err;
    }
    
    // return url de la imagen
}