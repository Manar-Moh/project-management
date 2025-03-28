import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { IoMdCloseCircleOutline } from "react-icons/io";

export const Modal = forwardRef(function Modal({ children ,title}, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => ({
    open: () => dialog.current.showModal(),
  }));
  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-black/50 rounded-lg p-0 border-none"
    >
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={() => dialog.current.close()}
        >
          <IoMdCloseCircleOutline className="text-2xl" />
        </button>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          {title}
        </h2>
        <div className="text-gray-600">{children}</div>
      </div>
    </dialog>,
    document.getElementById("modal-root")
  );
});
