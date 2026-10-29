export default function BtnEdit({ name, onClick }) {
  return (
    <button
      className="border border-[#DCE3E0] rounded-lg px-3 py-2.25 w-25 h-8.75 text-[12px] text-[#184F5B] cursor-pointer hover:bg-[#184F5B] hover:text-[#DCE3E0]"
      onClick={onClick}
    >
      {name}
    </button>
  );
}
