import Title from "../../components/Title";
import PlusIcon from "../../assets/icons/plus.png";
import BtnCrear from "../../components/buttons/BtnCrear";
import BtnNav from "../../components/buttons/BtnNav";
import SearchInput from "../../components/filters/SearchInput";
import BuildingIcon from "../../assets/icons/building-2.png";
import BtnEdit from "../../components/buttons/BtnEdit";

export default function AreasPage() {
  return (
    <div className="flex gap-6 flex-col">
      <div className="flex flex-col sm:flex sm:flex-row sm:justify-between gap-5 sm:items-center">
        <Title title="Area y cargos" ruta="Administracion/Áreas y cargos" />
        <BtnCrear icon={PlusIcon} name="Crear Cargo" />
      </div>
      <div className="flex gap-3 items-start">
        <BtnNav name="Áreas" />
        <BtnNav name="Cargos" />
      </div>
      <SearchInput placeholder="Nombre del área..." name="Buscar área" />
      <div className="p-5 bg-white rounded-[14px] gap-4.5 flex flex-col">
        <div className="flex justify-between gap-3 items-center">
          <img src={BuildingIcon} alt="" className="h-6 w-6" />
          <p className="text-[16px] sm:text-[19px] font-semibold w-full">
            Facturación y cuentas médicas
          </p>
          <div className="text-[#28715B] text-[8px] sm:text-[11px] py-1.5 px-1 bg-[#EAF4ED] rounded-full h-6.5 w-13.5 text-center">
            Activa
          </div>
        </div>
        <p className="text-[#677779] text-[12px]">Responsable: </p>
        <p className="text-[#203338] text-[12px]">12 personas · 3 áreas</p>
        <BtnEdit name="Editar Área" />
      </div>
      <div className="p-5 bg-white rounded-[14px] gap-4.5 flex flex-col">
        <div className="flex justify-between gap-3 items-center">
          <img src={BuildingIcon} alt="" className="h-6 w-6" />
          <p className="text-[16px] sm:text-[19px] font-semibold w-full">
            Facturación y cuentas médicas
          </p>
          <div className="text-[#28715B] text-[8px] sm:text-[11px] py-1.5 px-1 bg-[#EAF4ED] rounded-full h-6.5 w-13.5 text-center">
            Activa
          </div>
        </div>
        <p className="text-[#677779] text-[12px]">Responsable: </p>
        <p className="text-[#203338] text-[12px]">12 personas · 3 áreas</p>
        <BtnEdit name="Editar Área" />
      </div>
      <div className="p-5 bg-white rounded-[14px] gap-4.5 flex flex-col">
        <div className="flex justify-between gap-3 items-center">
          <img src={BuildingIcon} alt="" className="h-6 w-6" />
          <p className="text-[16px] sm:text-[19px] font-semibold w-full">
            Facturación y cuentas médicas
          </p>
          <div className="text-[#28715B] text-[8px] sm:text-[11px] py-1.5 px-1 bg-[#EAF4ED] rounded-full h-6.5 w-13.5 text-center">
            Activa
          </div>
        </div>
        <p className="text-[#677779] text-[12px]">Responsable: </p>
        <p className="text-[#203338] text-[12px]">12 personas · 3 áreas</p>
        <BtnEdit name="Editar Área" />
      </div>
    </div>
  );
}
