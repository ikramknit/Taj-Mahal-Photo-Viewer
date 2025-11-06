import React, { useState, useRef } from 'react';

const DEFAULT_TAJ_MAHAL_IMAGE = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/1280px-Taj_Mahal_%28Edited%29.jpeg';

const TajMahalImage: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>(DEFAULT_TAJ_MAHAL_IMAGE);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
      <div className="relative w-full rounded-xl shadow-2xl shadow-cyan-500/20 overflow-hidden transition-transform duration-500 hover:scale-105 group">
        <img
          src={imageUrl}
          alt="View of the Taj Mahal"
          className="w-full h-auto object-cover aspect-video bg-gray-800"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/png, image/jpeg, image/gif"
        className="hidden"
        aria-hidden="true"
      />

      <div className="text-center mt-6">
        <button
          onClick={handleUploadClick}
          className="bg-gradient-to-r from-amber-200 via-white to-amber-300 text-slate-800 font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg"
        >
          Upload Your Own Photo
        </button>
      </div>
    </div>
  );
};

export default TajMahalImage;