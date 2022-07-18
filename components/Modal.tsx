import { Modal as DaisyModal, Button } from "react-daisyui";
import { useState } from "react";

export const Modal = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className="font-sans">
      <Button onClick={toggleVisible}>Open Modal</Button>
      <DaisyModal open={visible}>
        <DaisyModal.Header className="font-bold">
          Congratulations random Interner user!
        </DaisyModal.Header>

        <DaisyModal.Body>
          been selected for a chance to get one year of subscription to use
          Wikipedia for free!
        </DaisyModal.Body>

        <DaisyModal.Actions>
          <Button onClick={toggleVisible}>Yay!</Button>
        </DaisyModal.Actions>
      </DaisyModal>
    </div>
  );
};
