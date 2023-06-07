//@ts-nocheck
import { useState } from "react";

const BrowseButton = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  
  return (
    <div>
      <input
        type="file"
        onChange={handleFileChange}
        accept="image/*"
      />
    </div>
  );
};

export default BrowseButton;
