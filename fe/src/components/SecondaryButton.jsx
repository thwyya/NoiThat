const SecondaryButton = ({ text, onClick, fullWidth = false, color = "#323334", className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`block px-4 py-2 bg-transparent border-2 ${
        fullWidth ? "w-full" : "w-auto inline-block" 
      } ${className}`}
      style={{
        color: color,
        borderColor: color,
      }}
    >
      {text}
    </button>
  );
};

export default SecondaryButton;
