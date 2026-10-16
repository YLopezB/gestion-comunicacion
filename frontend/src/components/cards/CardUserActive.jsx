export default function CardUserActive({ number, description }) {
  return (
    <div className="flex flex-col p-4.5 gap-4.5 bg-white rounded-[14px] w-87.5">
      <p className="text-[28px] font-semibold text-[#203338]">{number}</p>
      <p className="text-[12px] text-[#677779]">{description}</p>
    </div>
  );
}
