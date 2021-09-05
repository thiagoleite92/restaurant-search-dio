import React, { useEffect } from 'react';

import Portal from './Portal';

import { Overlay, Dialog } from './style.js';

const Modal = ({ children, open, onClose }) => {
  useEffect(() => {
    function onEsc(event) {
      if (event.keyCode === 27) onClose();
    }
    window.addEventListener('keydown', onEsc);

    return () => {
      window.removeEventListener('keydown', onEsc);
    }
  }, [onClose]);

  if (!open) return null;

  function onOverLayClick() {
   onClose();
  }

  function onDialogClick(event) {
    event.stopPropagation();
  }

  return (
    <Portal>
      <Overlay 
        onClick={ onOverLayClick }
      >
        <Dialog
          onClick={ onDialogClick }
        >
          { children }
        </Dialog>
      </Overlay>
    </Portal>
  )
}

export default Modal;
