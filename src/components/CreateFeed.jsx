import React, { useState } from 'react';
import "../CreateFeed.css";
import { BiImageAdd, BiPhotoAlbum, BiVideo, BiVideoRecording ,} from 'react-icons/bi';
import { BsFillRecord2Fill } from 'react-icons/bs';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { AiOutlineClose } from 'react-icons/ai';
import CustomButton from '../components/Button';
import ButtonDisabled from './ButtonDisable';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:500,
  bgcolor: 'background.paper',
  border: '1px solid #fff',
  radius: 7,
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,

};

const closeButtonStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  background: 'none',
  border: 'none',
  fontSize: '24px',
  cursor: 'pointer'
};

function NestedModal({ open, onClose }) {
  const [username] = useState("Jeancy");
  const [isButtonVisible , setIsButtonVisible] = useState(false)


  return (
    <Modal open={open} onClose={onClose} className='modal-box'>
      <Box sx={{ ...style, width:500 }} >
        <button onClick={onClose} style={closeButtonStyle} className ="close-button"><AiOutlineClose  size={30}/> </button>
        
        <h2>Create a New Post</h2>
        <div className="sep-line-modal"/>
        <form method="POST" encType="multipart/form-data">
          <div className="container">
            <div className="profile-info-modal">
            <div className="profiles-modal">
            <img src="../jeancy.jpg" alt="user" className="user-profile-modal" width="40px" />
            <div className="user-details-modal">
             <div className="user-id">{username}</div>
             <span>World</span>
             </div>
          </div>
           
            </div>
            <div className="border-form">
            <div className="form-input-file">
            <div className="input-post-file">
             <div className="file">
              Photo
             </div>
            </div>
            </div>
            
            <div className="form-input-post">
            <div className="input-post">
              <textarea type="text" placeholder='text' cols={10} rows={5} className='create-input'
              onFocus={()=>setIsButtonVisible(true)}
              onBlur={()=>setIsButtonVisible(false)}
              ></textarea>
            </div>
            </div>
             <div className="sep-line-modal"/>
             <div className="files-upload" 
                           onClick={()=>setIsButtonVisible(true)}
              >
              <BiImageAdd size={30} />
              <BiVideo size={30} />
              <BiVideoRecording size={30} />
             </div>
             </div>

          </div>
          {isButtonVisible ? <CustomButton  text={"Next"} onClick={()=>{}}/>:(
            <ButtonDisabled text={"Next"} onClick={()=>{}}/>
            
          )}
        </form>
        
      </Box>
    </Modal>
  );
}

function CreateFeed() {
  const [username] = useState("Jeancy");
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalClose = () => setModalOpen(false);

  return (
    <div>
      <div className="container-feed">
        <div className="input-feed">
          <div className="profiles">
            <img src="../jeancy.jpg" alt="user" className="user-profile" width="40px" />
          </div>
          <div className="create-feed"   onClick={() => setModalOpen(true)}>
            {`What's Up ${username}?`}
          </div>
        </div>
        <div className="sep-feed" />
        <div className="file-feed"   onClick={() => setModalOpen(true)}>
          <a href="#"><BiVideo size={40} /></a>
          <a href="#"><BiPhotoAlbum size={40} /></a>
          <a href="#"><BsFillRecord2Fill size={40} /></a>
        </div>
      </div>
      
      <NestedModal open={modalOpen} onClose={handleModalClose} />
    </div>
  );
}

export default CreateFeed;
