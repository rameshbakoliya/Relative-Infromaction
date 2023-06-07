import { useState } from "react";
import './Dropdown.css'

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event:any) => {  
    setSelectedOption(event.target.value);
  };

  return (
    <div className="select-dropdown">
      <select className="select-label" value={selectedOption} onChange={handleSelectChange} >
        <option value="">Select</option>
        <option value="Father">Father</option>
        <option value="Mother">Mother</option>
        <option value="Brother">Brother</option>
        <option value="Sister">Sister</option>
        <option value="Son">Son</option>
        <option value="Daughter">Daughter</option>
        <option value="Uncle">Uncle</option>
        <option value="Aunt">Aunt</option>
        <option value="GrandFather">Grand Father</option>
        <option value="Grand Mother">Grand Mother</option>
        <option value="Other">Other</option>
      </select>      
      {selectedOption === "Other" && <input type="text"/>}
    </div>
  );
};

export default Dropdown;

