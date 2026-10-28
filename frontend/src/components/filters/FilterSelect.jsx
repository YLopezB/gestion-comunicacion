export default function FilterSelect({ options, name, onChange, value }) {
  return (
    <div className="w-full bg-white p-3.25 rounded-lg border border-gray-300">
      <p className="text-[10px] text-[#677779]">{name}</p>
      <select
        name={name}
        className="text-[14px] text-[#203338] w-full"
        value={value}
        onChange={onChange}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
