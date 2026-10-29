import profileFoto from "../../assets/foto.jpg";

export default function CardUser({ nombre, cargo, foto }) {
  return (
    <div className="flex gap-3">
      <img
        src={!foto ? profileFoto : foto}
        alt="foto-perfil"
        className="w-8 h-8 rounded-full bg-black"
      />
      <div>
        <p className="text-[#203338] font-semibold text-[13px]">
          {!nombre ? "Administrador" : nombre}
        </p>
        <p className="text-[#677779] text-[11px]">
          {!cargo ? "Administrador del sistema" : cargo}
        </p>
      </div>
    </div>
  );
}
