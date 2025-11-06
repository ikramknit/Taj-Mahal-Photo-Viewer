import React, { useState, useRef } from 'react';

const TajMahalImage: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
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
      {imageUrl ? (
        <div className="relative w-full rounded-xl shadow-2xl shadow-cyan-500/20 overflow-hidden transition-transform duration-500 hover:scale-105 group">
          <img
            src={imageUrl}
            alt="User uploaded view of the Taj Mahal"
            className="w-full h-auto object-cover aspect-video"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      ) : (
        <div
          onClick={handleUploadClick}
          className="relative w-full aspect-video border-2 border-dashed border-gray-600 rounded-xl flex flex-col items-center justify-center text-gray-400 cursor-pointer hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 bg-white/5"
          aria-label="Upload an image"
          role="button"
          tabIndex={0}
          onKeyPress={(e) => (e.key === 'Enter' || e.key === ' ') && handleUploadClick()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 sm:h-16 sm:w-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-lg sm:text-xl font-semibold">Upload Your Photo</p>
          <p className="text-sm sm:text-base">Click here to select an image of the Taj Mahal</p>
        </div>
      )}

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/png, image/jpeg, image/gif"
        className="hidden"
        aria-hidden="true"
      />

      {imageUrl && (
        <div className="text-center mt-6">
          <button
            onClick={handleUploadClick}
            className="bg-gradient-to-r from-amber-200 via-white to-amber-300 text-slate-800 font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg"
          >
            Change Image
          </button>
        </div>
      )}
    </div>
  );
};

export default TajMahalImage;