import { generateImage } from '../services/replicate.service.mjs';
import { uploadImageToCloudinary } from '../model/imageModel.mjs';

export const generateImages = async (req, res) => {
  try {
    const { prompt, width, height, num_outputs, prompt_strength } = req.body;
    const imageFile = req.file;
    // Upload input image to Cloudinary
    const imageUrl = await uploadImageToCloudinary(imageFile.buffer.toString('base64'));
    
    // Prepare input for Replicate API
    const input = {
      image: imageUrl,
      width: parseInt(width),
      height: parseInt(height),
      prompt,
      num_outputs: parseInt(num_outputs),
      prompt_strength: parseFloat(prompt_strength),
    };
    // console.log(input, "onlyyyy")



    // Generate images using Replicate API
    const output = await generateImage(input);

    // Return the response
    res.status(200).json({
      success: true,
      data: {
        output,
        dimension: { width, height },
        num_outputs,
        prompt,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};