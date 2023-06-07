//@ts-nocheck
import { useState } from 'react';

const ParentComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <div onSelect={handleImageSelect}>
            {selectedImage && (
        <div>
          <h3>Selected Image</h3>
          <img src={selectedImage.url} alt={selectedImage.name} />
        </div>
      )}
    </div>
  );
};

export default ParentComponent;
