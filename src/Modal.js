import { useEffect, useRef } from "react";

const Modal = (prop) => {
  const { shouldShowModal, children, allowModalToClose, onClose } = prop;
  const dialogRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key !== "Escape") return;
    e.preventDefault();
  };

  useEffect(() => {
    if (shouldShowModal) {
      dialogRef.current?.showModal();
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [shouldShowModal]);

  if (!shouldShowModal) {
    return null;
  }
  return (
    <div>
      <dialog ref={dialogRef}>
        {children}
        {allowModalToClose && (
          <div>
            <button aria-label="close" type="button" onClick={onClose}>
              Close
            </button>
          </div>
        )}
      </dialog>
    </div>
  );
};

export default Modal;
