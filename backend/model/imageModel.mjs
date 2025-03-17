import cloudinary from '../config/cloudinary.mjs';

export const uploadImageToCloudinary = async (file) => {
  
  const result = await cloudinary.uploader.upload(file, {
    folder: 'replicate-images',
  }).catch((error) => {
    console.table(error);
});
console.log(result)
  return result;
};