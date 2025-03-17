import Replicate from 'replicate';
import dotenv from 'dotenv';
dotenv.config();

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export const generateImage = async (input) => {
  // console.log(input)
  const output = await replicate.run(
    'stability-ai/sdxl:7762fd07cf82c948538e41f63f77d685e02b063e37e496e96eefd46c929f9bdc',
    { input }
  );
  // console.log(output, "outttppuuutt")
  return output;
};