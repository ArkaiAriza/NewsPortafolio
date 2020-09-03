import React from 'react';
import PopOverMenu from './PopOverMenu';

const Modal = ({ children }) => {
  return (
    <div>
      <PopOverMenu>{children}</PopOverMenu>
    </div>
  );
};

export default Modal;
