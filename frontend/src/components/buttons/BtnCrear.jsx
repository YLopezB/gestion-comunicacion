export default function BtnCrear({ icon, name }) {
  return (
    <button className="flex gap-2 items-center bg-[#184F5B] px-4.5 py-3 text-white rounded-lg text-[14px] w-38 h-11">
      <img src={icon} alt="user" className="h-4 w-4" />
      {name}
    </button>
  );
}
