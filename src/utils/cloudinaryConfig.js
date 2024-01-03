const CLOUDINARY_URL = new URL(
  `https://api.cloudinary.com/v1_1/${
    import.meta.env.VITE_CLOUDNAME
  }/image/upload`
);
const uploadPreset = "recipes_preset";

export const uploadImageToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  try {
    const response = await fetch(CLOUDINARY_URL, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      // You can handle the Cloudinary response here
      const uploadedImageUrl = data.url;
      return uploadedImageUrl;
    } else {
      console.error("Upload failed:", response.statusText);
      return null;
    }
  } catch (error) {
    console.error("Error during upload:", error.message);
  }
};
