import { HfInference } from '@huggingface/inference';
import dotenv from 'dotenv';
dotenv.config();

const hf = new HfInference(process.env.HUGGINGFACE_TOKEN);

export const generateImageWithDeepFloyd = async (prompt) => {
  try {
    const response = await hf.textToImage({
      model: 'DeepFloyd/IF-I-XL-v1.0',
      inputs: prompt,
      parameters: {
        width: 512,
        height: 512,
        num_inference_steps: 50,
      },
    });
    return response;
  } catch (error) {
    throw new Error(`Failed to generate image: ${error.message}`);
  }
};