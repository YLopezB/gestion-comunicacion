import Title from "../../components/Title";
import userPlusIcon from "../../assets/icons/user-plus.png";
import CardUserActive from "../../components/CardUserActive";
import CardUser from "../../components/CardUser";

export default function UsersPage() {
  return (
    <div className="flex gap-5.75 flex-col">
      <div className="flex flex-col sm:flex sm:flex-row sm:justify-between gap-5">
        <Title ruta="ADMINISTRACIÓN/Usuarios" title="Usuarios y Permisos" />
        <button className="flex gap-2 items-center bg-[#184F5B] px-4.5 py-3 text-white rounded-lg text-[14px] w-38 h-11">
          <img src={userPlusIcon} alt="user" className="h-4 w-4" />
          Crear Usuario
        </button>
      </div>
      <div className="flex gap-3.5 flex-row justify-around">
        <CardUserActive number={28} description="Usuarios" />
        <CardUserActive number={26} description="Activos" />
        <CardUserActive number={2} description="Inactivos" />
      </div>
      <div className="p-4 sm:p-6 flex flex-col gap-4.5 bg-white rounded-[14px]">
        <div className="flex flex-col sm:flex-row justify-around gap-3">
          <div className="w-full bg-white p-3.25 rounded-lg border border-gray-300">
            <p className="text-[10px] text-[#677779]">Busca persona</p>
            <input
              type="text"
              placeholder="Nombre o usuario..."
              className="text-[14px] text-[#203338] w-full p-1 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="w-full bg-white p-3.25 rounded-lg border border-gray-300">
            <p className="text-[10px] text-[#677779]">Area</p>
            <select name="area" className="text-[14px] text-[#203338] w-full">
              <option value="all">Todas las areas</option>
              <option value="administración">administración</option>
              <option value="contabilidad">contabilidad</option>
            </select>
          </div>
          <div className="w-full bg-white p-3.25 rounded-lg border border-gray-300">
            <p className="text-[10px] text-[#677779]">Activo</p>
            <select name="area" className="text-[14px] text-[#203338] w-full">
              <option value="todas las areas">Activo</option>
              <option value="administración">Inactivo</option>
            </select>
          </div>
        </div>
        <hr className="h-px border-0.5 border-gray-300" />
        <div className="py-3.5 flex flex-col sm:flex-row border-b border-gray-300">
          <CardUser />
          <div className="text-[12px] text-[#184F5B]">
            <p>Lider</p>
            <p>✓ Activo</p>
          </div>
          <button className="bg-white py-2.25 px-3 rounded-lg border border-gray-300 text-[12px] text-[#184F5B]">
            Editar permisos
          </button>
        </div>
      </div>
    </div>
  );
}
