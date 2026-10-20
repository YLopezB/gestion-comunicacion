import Upload from "../../assets/icons/upload.svg";

export default function BtnUpload({ name }) {
  return (
    <button className="flex text-[14px] font-semibold px-4.5 h-12 gap-2 justify-center items-center rounded-lg border-gray-300 border text-[#184F5B]">
      <img src={Upload} alt="" className="w-4.5 h-4.5" />
      {name}
    </button>
  );
}
