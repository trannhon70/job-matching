import { Modal } from "antd";
import React, { useState } from "react";
interface IProps {
  children: React.ReactNode;
}

const ModalAssign = (props: IProps) => {
  const { children } = props;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const showModal = () => {
    // setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div onClick={showModal}>{children}</div>
      <Modal
        title="Company list"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default ModalAssign;
