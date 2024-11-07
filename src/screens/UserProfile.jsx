import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { AiOutlineClose } from 'react-icons/ai';

const modalStyle = {
  position: 'fixed',
  top: '44%',
  right: '20px',
  transform: 'translateY(-50%)',
  width: '80vw',
  maxWidth: 400,
  height: '70vh',
  maxHeight: 600,
  bgcolor: 'background.paper',
  border: '1px solid #fff',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  zIndex: 1000,
  overflowY: 'auto',
};

const closeButtonStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  background: 'none',
  border: 'none',
  fontSize: '24px',
  cursor: 'pointer',
};

const UserProfile = () => {
  return (
    <Box sx={modalStyle}>
      <button style={closeButtonStyle}>
      </button>
      <div className="container">
      <h3>User Profile</h3>
      <div className="user-profile-content">
        <div className="pic-profile">
        <img src="../jeancy.jpg" alt="Profile" className="icon user-profile"/>
        </div>
        <div className="details">
        <p className='user-detail'>Username: JohnDoe</p>
        <p>Email: johndoe@example.com</p>
        <p>Location: Earth</p>


      </div>
      <div className="connexion">
        <a href=''>Logout</a>
      </div>
      </div>
  

      </div>
    </Box>
  );
};

export default UserProfile;
