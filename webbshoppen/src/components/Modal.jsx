import style from './Modal.module.css'
function Modal({ isOpen, onClose, description, img }) {
    if (!isOpen) return null;
  
    return (
      <div className={style.modaloverlay} onClick={onClose}>
        <div
          className={style.modalcontent}
          onClick={(e) => e.stopPropagation()}
        >
          <button className={style.modalclosebutton} onClick={onClose}>
            &times; 
          </button>

          <img 
          className={style.modalimage}
          src={img}
          alt="image unable to load"
            />
            
          <div className={style.modaldescription}>
            {description || "No description provided."}
          </div>
        </div>
      </div>
    );
  }
  
  export default Modal;
  