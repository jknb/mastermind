import { memo } from "react";
import "./Modal.css";
import { usePropsLogger } from "./hooks/usePropsLogger";

function Modal({ isOpen, onClose, children }) {
  usePropsLogger({ isOpen, onClose, children });
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default memo(Modal);
