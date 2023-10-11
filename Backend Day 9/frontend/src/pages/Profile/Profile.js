import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import dummyUserData from '../dummyUserData.json';
import Modal from 'react-modal';
import "../../assets/css/Profile.css"

Modal.setAppElement('#root'); 


function Profile() {
  const userEmail = useSelector((state) => state.user.email);
  const user = dummyUserData.find((user) => user.email === userEmail);

  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal} 
      contentLabel="Profile Modal"
      className="modal-profile"
    >
      <h2>Profile Page</h2>
      <div>
        <strong>Email:</strong> {user.email}
      </div>
      <div>
        <strong>Name:</strong> {user.name}
      </div>
      <div>
        <strong>Age:</strong> {user.age}
      </div>
      <div>
        <strong>City:</strong> {user.city}
      </div>
      <button onClick={closeModal}>Cancel</button>
    </Modal>
  );
}

export default Profile;
