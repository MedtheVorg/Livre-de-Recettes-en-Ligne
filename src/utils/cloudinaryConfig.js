const CLOUDINARY_URL = new URL(
  `https://api.cloudinary.com/v1_1/${
    import.meta.env.VITE_CLOUDNAME
  }/image/upload`
);

const DestroyRessource_CLOUDINARY_URL = new URL(
  `https://api.cloudinary.com/v1_1/${
    import.meta.env.VITE_CLOUDNAME
  }/image/destroy/publicid?upload_preset=uploadpreset`
);

const uploadPreset = 'recipes_preset';

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
      // You can handle the Cloudinary response here
      console.log('uploaded image', data);

      const uploadedImageUrl = data.secure_url;
      return uploadedImageUrl;
    } else {
      console.error('Upload failed:', response.statusText);
      return null;
    }
  } catch (error) {
    console.error('Error during upload:', error.message);
  }
};

export const removeImageFromCloudinary = async (publicId) => {
  try {
    const targetResourceURL = DestroyRessource_CLOUDINARY_URL.href
      .replace('publicid', publicId)
      .replace('uploadpreset', uploadPreset);

    const response = await fetch(targetResourceURL, {
      method: 'DELETE',
    });

    if (response.ok) {
      const data = await response.json();
      // You can handle the Cloudinary response here
      const responseMessage = data.secure_url;
      if (responseMessage.result) {
        return true;
      }
    } else {
      console.error('Destroy action failed :', response.statusText);
      return false;
    }
  } catch (error) {
    console.error(
      'Error occurred during Resource destructuring:',
      error.message
    );
  }
};
