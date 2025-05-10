import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed mt-[48px] w-[320px] h-[330px] flex z-50 bg-black rounded-lg shadow-lg  py-2 border border-gray-500 ">
      {children}
    </div>
  );
};

export default Modal;