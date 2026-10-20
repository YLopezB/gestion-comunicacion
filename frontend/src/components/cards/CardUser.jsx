export default function CardUser() {
  return (
    <div className="flex gap-3">
      <img
        src="api/repository/default/logo.png"
        alt="foto-perfil"
        className="w-8 h-8 rounded-full bg-black"
      />
      <div>
        <p className="text-[#203338] font-semibold text-[13px]">
          Administrador
        </p>
        <p className="text-[#677779] text-[11px]">Administrador del sistema</p>
      </div>
    </div>
  );
}
