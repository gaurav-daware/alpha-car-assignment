"use client";

import React from "react";
import ThreeSixtyViewer from "./ThreeSixtyViewer";

type View360ModalProps = {
  onClose: () => void;
};

const View360Modal: React.FC<View360ModalProps> = ({ onClose }) => {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <header className="modal-header">
          <h3 className="modal-title">360° Interactive View</h3>
          <button className="close-btn" onClick={onClose} aria-label="Close modal">
            ✕
          </button>
        </header>

        <div className="modal-body">
          <ThreeSixtyViewer />
        </div>
      </div>
    </div>
  );
};

export default View360Modal;