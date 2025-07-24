const Input = ({ placeholder, value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full block px-4 py-2 bg-transparent text-[#989899] border border-[#323334] rounded-none focus:outline-none focus:border-[#323334] transition"
    />
  )
}

export default Input
