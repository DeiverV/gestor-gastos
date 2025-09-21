import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  isOpen: boolean;
  onClose: VoidFunction;
}

export const Modal = ({ children, isOpen, onClose }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/70 backdrop-blur-[2px] flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg shadow relative text-black placeholder:text-black">
        <button
          onClick={onClose}
          className="bg-gray-700 text-white rounded-full p-1 px-3 font-bold text-lg absolute -top-4 -right-4 cursor-pointer"
          aria-label="Cerrar modal"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};
