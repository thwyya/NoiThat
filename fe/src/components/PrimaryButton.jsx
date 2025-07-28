const PrimaryButton = ({ text, onClick, fullWidth = false }) => {
  return (
    <button
      onClick={onClick}
      className={`block px-4 py-2 bg-[#323334] text-white font-bold rounded-none shadow-none 
        ${fullWidth ? "w-full" : "w-auto inline-block"}`}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
