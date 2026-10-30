import SearchInput from "../../components/filters/SearchInput";
import Title from "../../components/Title";
import Icono from "../../assets/icons/Icono.svg";
import BtnUpload from "../../components/buttons/BtnUpload";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function CompanyPage() {
  const company = useSelector((state) => state.company);
  const [form, setForm] = useState({
    name: company.company.name,
    slogan: company.company.slogan,
    photo: company.company.photo,
    logo: company.company.logo,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex gap-5.75 flex-col">
      <Title ruta="ADMINISTRACIÓN/Empresa" title="Editar empresa" />
      <div className="flex gap-6 flex-col sm:flex-row ">
        <div className="flex gap-6 flex-col w-full">
          <div className="flex flex-col gap-5 rounded-[14px] bg-white p-6">
            <SearchInput
              placeholder="Nombre empresa S.A.S"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            <div className="flex justify-between text-[11px] text-[#677779]">
              <p>Usa el nombre comercial de tu empresa.</p>
              <p>18/60</p>
            </div>
          </div>
          <div className="flex flex-col rounded-[14px] bg-white p-6">
            <SearchInput
              placeholder="Eslogan de la empresa"
              name="slogan"
              value={form.slogan}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col rounded-[14px] bg-white p-6 gap-4">
            <p className="text-[11px] text-[#677779] font-semibold">
              VISTA PREVIA
            </p>
            <div className="p-6 flex gap-3 bg-[#F5F4EF] rounded-lg">
              <img
                src="api/repository/default/logo.png"
                alt=""
                className="w-11 h-11"
              />
              <div className="flex flex-col gap-1.25">
                <p className="text-[15px] text-[#203338]">Nombre empresa</p>
                <p className="text-[12px] text-[#677779]">Eslogan empresa</p>
              </div>
            </div>
            <div className="flex p-4 bg-[#EEF4F3] gap-2.5 rounded-2xl">
              <img src={Icono} alt="icono" className="h-4 w-4" />
              <p className="text-[12px] text-[#184F5B]">
                Este nombre, eslogan y logo aparecerá en la navegación y en las
                comunicaciones del portal.
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-6 flex-col bg-white rounded-[14px] p-6 w-full">
          <p className="text-[14px] text-[#203338] font-semibold">
            Logo de Empresa
          </p>
          <div className="flex gap-4 items-center flex-col rounded-lg bg-[#F5F4EF] h-65 justify-center">
            <img
              src="api/repository/default/logo.png"
              alt=""
              className="w-20 h-20"
            />
            <p className="text-[#184F5B] text-[16px] font-bold">
              Nombre empresa
            </p>
          </div>
          <BtnUpload name="Cambiar logo" />
          <p className="text-[11px] text-[#677779]">
            PNG o JPG · Máximo 5 MB · Mínimo 400 × 400 px
          </p>
          <div className="flex p-4 bg-[#EEF4F3] gap-2.5 rounded-2xl">
            <img src={Icono} alt="icono" className="h-4 w-4" />
            <p className="text-[12px] text-[#184F5B]">
              Usa una imagen nítida. Recomendamos un PNG con fondo transparente
              y espacio alrededor del logo.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 p-6 bg-white rounded-[14px]">
        <p className="text-[14px] text-[#203338] font-semibold">
          Imagen corporativa
        </p>
        <div className="bg-[#F5F4EF] rounded-lg h-72.5"></div>
        <BtnUpload name="Cambiar foto organizacional" />
        <p className="text-[11px] text-[#677779]">Recomendado: 1600 × 900 px</p>
      </div>
      <div className="flex flex-col gap-5 p-6 bg-white rounded-[14px]">
        <p className="text-[11px] text-[#677779]">
          Toca una muestra o escribe su código HEX.
        </p>
        <div className="flex gap-3 p-3 border border-gray-300 justify-between items-center rounded-lg">
          <input type="color" className="h-9.5 w-9.5 cursor-pointer rounded" />
          <div className="w-full">
            <p className="text-[11px] text-[#677779]">Color principal</p>
            <p className="text-[14px]">#D9E8E4</p>
          </div>
          <p className="text-[11px] text-[#677779]">HEX</p>
        </div>
        <div className="flex gap-3 p-3 border border-gray-300 justify-between items-center rounded-lg">
          <input type="color" className="h-9.5 w-9.5 cursor-pointer rounded" />
          <div className="w-full">
            <p className="text-[11px] text-[#677779]">Color Secundario</p>
            <p className="text-[14px]">#D9E8E4</p>
          </div>
          <p className="text-[11px] text-[#677779]">HEX</p>
        </div>
      </div>
    </div>
  );
}
