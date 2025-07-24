const SecondaryButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
          className="w-full block px-4 py-2 bg-transparent text-[#323334] border-2 border-[#323334]"
    >
      {text}
    </button>
  )
}

export default SecondaryButton