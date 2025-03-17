"use client"
import { useState, useEffect, useRef } from 'react'
import Image from "next/image"
import Sidebar from './components/Sidebar'
import { BiSolidCloudUpload } from "react-icons/bi"
import { BsStars } from "react-icons/bs";
import { GiElectric } from "react-icons/gi";
import { IoIosImages } from "react-icons/io";
import { TbDimensions } from "react-icons/tb";
import { FaExpand, FaTrash, FaDownload, FaTimes } from "react-icons/fa";
import { PiTrashSimpleThin } from "react-icons/pi";
import { IoMdCloudDownload } from "react-icons/io";
import { GiExpand } from "react-icons/gi";

const Page = () => {
  const fileInputRef = useRef()
  const [dragging, setDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [sliderValue, setSliderValue] = useState(0.4);

  const [expandedImage, setExpandedImage] = useState(null); // State to track expanded image

  // Function to handle expanding an image
  const handleExpand = (image) => {
    setExpandedImage(image);
  };

  // Function to handle closing the expanded image
  const handleClose = () => {
    setExpandedImage(null);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setVideoFile(file);
    handleFile(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);
    const file = event.dataTransfer.files[0];
    handleFile(file);
  };


  const images = [
    { url: 'https://leonardo.ai/wp-content/uploads/2023/12/AlbedoXL_3.jpg' },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeJnnE2CT0_E5Al8R9lo4lWH5piOpco-O3Zg&s' },
    // Add more image objects as needed
  ];
  

  return (
    <div className="flex ">
      <Sidebar />
      <div className="grid grid-cols-11 w-full">
        <div className="bg-slate-100 col-span-3 w-full py-5 px-6 min-h-screen flex flex-col gap-4 justify-between">
          <div className="flex flex-col gap-5">
            <h2 className="text-xl font-bold">Filter</h2>

            <div className="flex flex-col gap-3 py-2">
              <label className="font-semibold">Generating Engine</label>
              <select className="bg-white rounded-full px-3 py-2 focus:outline-0">
                <option> DreamyEngine v5.2
                </option>
                <option> DreamyEngine v5.2
                </option>
                <option> DreamyEngine v5.2
                </option>
                <option> DreamyEngine v5.2
                </option>
              </select>
            </div>

            <div>
          <label>Number of images</label>
          <div className="grid grid-cols-5 gap-2 mt-2">
              {[1, 2, 3, 4, ].map((num) => (
                <label key={num} className="flex items-center justify-center px-2 py-3 hover:text-white font-semibold hover:bg-gradient-to-tr from-[#4A68FF] to-[#9A53DF] border border-gray-300 rounded-full cursor-pointer hover:bg-gray-100">
                  <input type="radio" name="numberOfImages" value={num} className="hidden" />
                  <span>{num}</span>
                </label>
              ))}
            </div>
          </div>

            <div className="p-3 bg-slate-50 flex flex-col gap-3 font-semibold">
              <label>Image Dimension</label>
              <div className="flex items-end gap-2">
                <div title="512 x 512" className="w-6 h-6 bg-slate-300 hover:bg-gradient-to-tr from-[#4A68FF] to-[#9A53DF] cursor-pointer transition-all ease-in-out duration-500 rounded"></div>
                <div title="512 x 1024" className="w-6 h-12 bg-slate-300 hover:bg-gradient-to-tr from-[#4A68FF] to-[#9A53DF] cursor-pointer transition-all ease-in-out duration-500 rounded"></div>
                <div title="768 x 768" className="w-8 h-8 bg-slate-300 hover:bg-gradient-to-tr from-[#4A68FF] to-[#9A53DF] cursor-pointer transition-all ease-in-out duration-500 rounded"></div>
                <div title="1024 x 768" className="w-12 h-8 bg-slate-300 hover:bg-gradient-to-tr from-[#4A68FF] to-[#9A53DF] cursor-pointer transition-all ease-in-out duration-500 rounded"></div>
                <div title="768 x 1024" className="w-8 h-12 bg-slate-300 hover:bg-gradient-to-tr from-[#4A68FF] to-[#9A53DF] cursor-pointer transition-all ease-in-out duration-500 rounded"></div>
                <div title="1024 x 1024" className="w-12 h-12 bg-slate-300 hover:bg-gradient-to-tr from-[#4A68FF] to-[#9A53DF] cursor-pointer transition-all ease-in-out duration-500 rounded"></div>

              </div>
            </div>

            <div className="flex flex-col gap-7 py-2">
          <label>Prompt magic strength</label>
          <div className="relative">
            <input
              type="range"
              min="0.1"
              max="0.9"
              step="0.1"
              defaultValue="0.4"
              onChange={(e) => setSliderValue(e.target.value)} // Update the value dynamically
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-slider"
            />
            
            {/* Dynamic value display */}
            <div
              className="absolute -top-4 text-sm text-gray-800 felx flex-col justify-center"
              style={{ left: `calc(${((sliderValue - 0.1) / 0.8) * 100}% - 12px)` }}
            >
              {sliderValue}
            </div>
          </div>
        </div>

          </div>
          <div>
            <label
              htmlFor="fileInput"
              className={`md:mx-0 mx-auto px-5 py-5 flex flex-col items-center justify-center  md:h-full   text-center  border-2 border-dashed rounded-lg cursor-pointer ${dragging ? 'border-red-500 ' : 'border-gray-300 '
                }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <BiSolidCloudUpload size={50} color={dragging ? '#EE9F35' : '#333'} />
              <p className="mt-4 text-xl text-slate-800 font-bold">Click to Upload</p>
              <p className="mt-1.5 text-gray-800 text-[13px]">Or Drag and Drop image</p>
              <p className="mt-2 text-gray-500 text-[13px]">PNG or JPEG less than 100MB</p>


              <input
                type="file"
                id="fileInput"
                onChange={handleFileChange}
                hidden
                ref={fileInputRef}
                accept=".mp4,.mov,.webm"
              />
            </label>
          </div>

      </div>

        <div className="w-full max-h-screen col-span-8 bg-slate-50 px-7 py-5 flex flex-col gap-4">
        <h2 className="text-xl font-bold">Image Generation</h2>

        <div className="">
          <div className="bg-slate-200 rounded-full flex " >
            <input type="text" className="w-full outline-0 focus:outline-0  focus:rounded-full px-5  bg-transparent"placeholder="Tell us how you want us to refine your image" />
            <button className="text-white flex font-semibold px-3 py-3  justify-center mx-auto rounded-full bg-gradient-to-tr from-[#4A68FF] to-[#9A53DF] text-center w-[25%]">Generate Image <BsStars size="20" /></button>
          </div>
        </div>
        <div className="bg-black rounded-full text-white rounded-3xl  py-4 w-full flex justify-between px-5 gap-5">
          <div className="flex items-center gap-3 justify-between">
            <span className="bg-white text-[#9A53DF] p-2 shadow-lg shadow-[#4A68FF] rounded-full "><GiElectric  size={30} color="#9A53DF" /> </span>
            <div className="flex flex-col items-start">
              <p>You are currently on a free plan</p>
              <p>Upgrade for  priority generations, additional token credit and  much more</p>
            </div>
            <button className="shadow-lg shadow-[#4A68FF81] border-2 border-[#4A68FF] px-6 rounded-full py-2">Upload plan </button>
          </div>
        </div>
          <div className="">
            <div className="flex items-center justify-between text-slate-500">
              <p>prompt text goes here...</p>
              <div className="flex items-center gap-4">
                <p>Stable diffusion v2.1</p>
                <p className="flex items-center gap-2"><IoIosImages size="" /> 4</p>
                <p className="flex items-center gap-2"><TbDimensions size="" /> 512 x 512px</p>
              </div>
            </div>






          </div>
            <div className="container mx-auto p-4">
      {isLoading ? (
        // Loader effect with animate-pulse
        <div className="grid grid-cols-4 gap-4">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="animate-pulse bg-gray-400 rounded-lg h-48 w-full"
            ></div>
          ))}
        </div>
      ) : (
        // Grid of images with actions on hover
        <div className="grid grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative group">
              {/* Next.js Image component */}
              <img
                src={image.url}
                alt={`Image ${index + 1}`}
                width={300} // Set width and height for the Image component
                height={200}
                className="rounded-lg h-48 w-full object-cover"
              />
              {/* Actions on hover */}
              <div className="absolute inset-0 bg-[#5E65F940] bg-opacity-20 group-hover:bg-opacity-20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center space-x-4">
                <button className="text-white hover:text-gray-300">
                  <IoMdCloudDownload  className="w-6 h-6" /> {/* Download icon */}
                </button>
                <button className="text-white hover:text-gray-300">
                  <PiTrashSimpleThin className="w-6 h-6" /> {/* Delete icon */}
                </button>
                <button onClick={() => handleExpand(image)} className="cursor-pointer text-white hover:text-gray-300">
                  <GiExpand className="w-6 h-6" /> {/* Expand icon */}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    
        </div>
        {/* Expanded Image Modal */}
      {expandedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
          onClick={handleClose} // Close modal when clicking outside the image
        >
          <div className="relative max-w-full max-h-full">
            {/* Close button */}
            <button
              className="absolute -top-10 right-0 text-white hover:text-gray-300 z-50"
              onClick={handleClose}
            >
              <FaTimes className="w-8 h-8" /> {/* Close icon */}
            </button>
            {/* Expanded Image */}
            <img
              src={expandedImage.url}
              alt="Expanded Image"
              width={800} // Larger size for expanded view
              height={600}
              className="rounded-lg object-contain max-w-full max-h-[90vh]"
            />
          </div>
        </div>
      )}
      </div>

    </div>
  )
}

export default Page
