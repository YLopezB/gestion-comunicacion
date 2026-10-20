export default function SearchInput({ placeholder, name }) {
  return (
    <div className="w-full bg-white p-3.25 rounded-lg border border-gray-300">
      <p className="text-[10px] text-[#677779]">{name}</p>
      <input
        type="text"
        placeholder={placeholder}
        className="text-[14px] text-[#203338] w-full p-1 border border-gray-300 rounded-lg"
      />
    </div>
  );
}
