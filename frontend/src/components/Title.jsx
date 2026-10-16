export default function Title({ruta, title}) {
  return (
    <div>
      <p className="text-[10px] text-[#184F5B] font-semibold">
        {ruta.toUpperCase()}
      </p>
      <h2 className="sm:text-[28px] text-[20px] font-semibold text-[#203338]">
        {title}
      </h2>
    </div>
  );
}
