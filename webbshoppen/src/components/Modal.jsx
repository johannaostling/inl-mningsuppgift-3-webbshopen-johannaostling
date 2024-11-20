function Modal({ isOpen, onClose, description, img }) {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close-button" onClick={onClose}>
            &times; 
          </button>
          <div className="modal-description">
            {description || "No description provided."}
          </div>
          <img 
          className="modal-image"
          src={img}
          alt="image unable to load"
            />
        </div>
      </div>
    );
  }
  
  export default Modal;
  