import Title from "../../components/Title";
import userPlusIcon from "../../assets/icons/user-plus.png";
import CardUserActive from "../../components/cards/CardUserActive";
import CardUser from "../../components/cards/CardUser";
import BtnCrear from "../../components/buttons/BtnCrear";
import SearchInput from "../../components/filters/SearchInput";
import FilterSelect from "../../components/filters/FilterSelect";

export default function UsersPage() {
  return (
    <div className="flex gap-5.75 flex-col">
      <div className="flex flex-col sm:flex sm:flex-row sm:justify-between gap-5 sm:items-center">
        <Title ruta="ADMINISTRACIÓN/Usuarios" title="Usuarios y Permisos" />
        <BtnCrear icon={userPlusIcon} name="Crear Usuario" />
      </div>
      <div className="flex gap-3.5 flex-row justify-around">
        <CardUserActive number={28} description="Usuarios" />
        <CardUserActive number={26} description="Activos" />
        <CardUserActive number={2} description="Inactivos" />
      </div>
      <div className="p-4 sm:p-6 flex flex-col gap-4.5 bg-white rounded-[14px]">
        <div className="flex flex-col sm:flex-row justify-around gap-3">
          <SearchInput
            placeholder="Nombre por nombre..."
            name="Buscar nombre"
          />
          <FilterSelect
            name="Área"
            options={[
              { value: "all", label: "Todas las áreas" },
              { value: "facturacion", label: "Facturación" },
            ]}
          />
          <FilterSelect
            name="Activo"
            options={[
              { value: "activo", label: "Activo" },
              { value: "inactivo", label: "Inactivo" },
            ]}
          />
        </div>
        <hr className="h-px border-0.5 border-gray-300" />
        <div className="py-3.5 flex flex-col sm:flex-row border-b border-gray-300 justify-between">
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
