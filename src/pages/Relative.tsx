//@ts-nocheck
import React from 'react';
import Dropdown from '../components/dropdown';
import BrowseButton from '../components/BrowseButton'
import Button from '../components/Button/Button'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./relative.css"

interface RelativeProps {
  // Define prop types here (if any)
}

const Relative: React.FC<RelativeProps> = () => {
  return (
    <>
      <form className='main-div'>
        <div className='main-div-from'>
          <div className='full-name'>Full Name : </div>
          <div className='Name-input'><input type="text" placeholder='Enter Your Name' /></div>
          <div className='dropdown-div'> Relation :<Dropdown /></div>
          <div className='Description'> Description : </div>
          <div><textarea rows="4" cols="45" className='Description-Text-Area'></textarea></div>
          <div className='user-image'>User Image : <BrowseButton /></div>
          <div className='btn-submit'><Button Title={"SUBMIT"} /></div>
        </div>
      </form>
    </>
  );
}

export default Relative;

