import { Subtitle } from '../components';
import { Button, Modal, ModalAction, ModalContent } from '../theme/daisyui';
import * as D from '../data';
import { useState } from 'react';

export default function ModalTest() {
  const [isOpen, setIsOpen] = useState(true);
  const closeClicked = () => setIsOpen(false);
  const acceptClicked = () => setIsOpen(false);

  return (
    <section className="mt-4">
      <h2 className="text-5xl font-bold text-center">ModalTest</h2>
      <Modal open={isOpen}>
        <ModalContent onCloseIconClicked={acceptClicked}>
          <Subtitle>Modal</Subtitle>
          <p className="mt-4 text-justify">{D.randomParagraphs()}</p>
          <ModalAction>
            <Button className="w-24 btn-primary btn-sm" onClick={closeClicked}>
              Accept
            </Button>
            <Button className="w-24 btn-sm" onClick={closeClicked}>
              Close
            </Button>
          </ModalAction>
        </ModalContent>
      </Modal>
    </section>
  );
}
