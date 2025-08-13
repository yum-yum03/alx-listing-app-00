
import React from "react";

interface PillProps {
  label: string;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-200"
    >
      {label}
    </button>
  );
};

export default Pill;
