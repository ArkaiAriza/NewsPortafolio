import React, { useState } from 'react';
import PopOverMenu from './PopOverMenu';

import { Modal as AModal, Input } from 'antd';

const { Search } = Input;

const Modal = ({ visible, handleOk, handleCancel }) => {
  const [text, setText] = useState('');

  console.log(visible);

  return (
    <AModal visible={visible} onCancel={() => handleCancel()} footer={null}>
      <Search
        enterButton
        placeholder='Search'
        value={text}
        onChange={(e) => setText(e.target.value)}
        onSearch={(text) => handleOk(text)}
      />
      <PopOverMenu />
    </AModal>
  );
};

export default Modal;
