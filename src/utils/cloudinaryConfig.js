const uploadPreset = 'recipes_preset';

const CLOUDINARY_URL = new URL(
  `https://api.cloudinary.com/v1_1/${
    import.meta.env.VITE_CLOUDNAME
  }/image/upload`
);

const Destroy_Image_CLOUDINARY_URL = new URL(
  `https://api.cloudinary.com/v1_1/dj0fgbobx/image/destroy?public_id=&upload_preset=&api_key=&timestamp=&signature=`
);

export const uploadImageToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', uploadPreset);

  try {
    const response = await fetch(CLOUDINARY_URL, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      const uploadedImageUrl = data.secure_url;
      return {
        uploadedImageUrl,
        timestamp: new Date().getTime(),
        publicId: data.public_id,
      };
    } else {
      console.error('Upload failed:', response.statusText);
      return null;
    }
  } catch (error) {
    console.error('Error during upload:', error.message);
  }
};

export const removeImageFromCloudinary = async (imageToDeleteDetails) => {
  const { imageToDeleteUrl, timestamp, publicId } = imageToDeleteDetails;

  try {
    // generate signature
    const stringToSign = `public_id=${publicId}&timestamp=${timestamp}${
      import.meta.env.VITE_CLOUDINARYSECRET
    }`;
    const signature = await getSignature(stringToSign);

    // set Query Params
    Destroy_Image_CLOUDINARY_URL.searchParams.set('public_id', publicId);
    Destroy_Image_CLOUDINARY_URL.searchParams.set('timestamp', timestamp);
    Destroy_Image_CLOUDINARY_URL.searchParams.set(
      'upload_preset',
      uploadPreset
    );
    Destroy_Image_CLOUDINARY_URL.searchParams.set(
      'api_key',
      import.meta.env.VITE_CLOUDAPIKEY
    );
    Destroy_Image_CLOUDINARY_URL.searchParams.set('signature', signature);

    // execute Delete request
    const response = await fetch(Destroy_Image_CLOUDINARY_URL.href, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept',
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log('destroyed Image response : ', data);
      if (data.result === 'ok') {
        return true;
      }
    } else {
      console.error('Destroy action failed:', response.statusText);
      return false;
    }
  } catch (error) {
    console.error('Error occurred during Resource destruction:', error.message);
    return false;
  }
};

async function getSignature(stringToSign) {
  const encoder = new TextEncoder();
  const data = encoder.encode(stringToSign);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const signature = hashArray
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');

  return signature;
}
