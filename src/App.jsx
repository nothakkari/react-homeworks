import React, { useState } from 'react';
import Modal from './components/Time/Modal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>Modal Example</h1>
      <button onClick={openModal}>Open Modal</button>
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
};

export default App;
