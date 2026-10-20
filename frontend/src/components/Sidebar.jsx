import { NavLink } from "react-router-dom";
import Copyright from "./CopyRight.jsx";
import Logo from "./Logo.jsx";

const menuItems = [
  { label: "Usuarios", path: "usuarios" },
  { label: "Áreas", path: "areas" },
  { label: "Publicaciones", path: "publicaciones" },
  { label: "Organigrama", path: "organigrama" },
  { label: "Empresa", path: "empresa" },
  { label: "Contraseña", path: "contrasena" },
];

export default function Sidebar() {
  return (
    <aside className="fixed p-1 bottom-0 left-0 right-0 z-50 sm:sticky sm:top-0 w-full sm:h-screen h-15 sm:w-64.5 gap-7 bg-grey sm:p-6 flex-col sm:flex bg-white">
      <div className="hidden sm:flex">
        <Logo />
      </div>
      <div className="sm:flex sm:flex-col hidden gap-1.5">
        <h2 className="text-sm font-bold text-[#203338]">
          Nombre de tu empresa
        </h2>
        <p className="text-xs text-[#677779]">Eslogan empresarial</p>
      </div>

      <p className="text-[10px] font-semibold text-[#677779] hidden sm:block">
        ADMINISTRACIÓN
      </p>

      <nav className="flex sm:flex-col gap-1 sm:gap-5 text-[12px] justify-around">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={`/home/${item.path}`}
            className={({ isActive }) =>
              `transition-colors ${
                isActive
                  ? "font-bold text-[#184F5B]"
                  : "text-[#677779] hover:text-[#184F5B]"
              }`
            }
          >
            {({ isActive }) => (
              <span className="flex sm:items-center sm:gap-2">
                <span className="hidden sm:inline">{isActive ? "●" : ""}</span>
                {item.label}
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="hidden sm:mt-auto sm:flex sm:flex-col sm:gap-7">
        <hr className="h-px border-0.5 border-gray-300" />

        <p className="text-xs text-[#677779]">Desarrollado por:</p>

        <a
          href="https://yeisonlopez.dev"
          target="_blank"
          rel="noreferrer"
          className="text-center text-xs text-[#184F5B]"
        >
          Yeison Andres López Burbano ↗
        </a>

        <Copyright style="text-center bottom-4 text-[#677779] text-xs" />

        <p className="text-center text-xs text-[#677779]">Versión: 1.0.0</p>
      </div>
    </aside>
  );
}
