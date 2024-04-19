import { ReactNode } from "react";
import "./Timeblock.css";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Timeblock = ({ children, onClose }: Props) => {
  return (
    <div className="alert-dark alert-dismissible">
      {children}
      <button type="button" className="btn-close" onClick={onClose}>
        x
      </button>
    </div>
  );
};

export default Timeblock;
