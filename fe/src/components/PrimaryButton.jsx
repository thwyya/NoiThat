const PrimaryButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
          className="w-full block px-4 py-2 bg-[#323334] text-white rounded-none shadow-none"
    >
      {text}
    </button>
  )
}

export default PrimaryButton
