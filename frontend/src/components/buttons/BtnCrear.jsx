export default function BtnCrear({ icon, name, onClick }) {
  return (
    <button
      className="flex gap-2 items-center bg-[#184F5B] px-4.5 py-3 text-white rounded-lg text-[14px] w-38 h-11 cursor-pointer hover:bg-[#677779]"
      onClick={onClick}
    >
      <img src={icon} alt="user" className="h-4 w-4" />
      {name}
    </button>
  );
}
