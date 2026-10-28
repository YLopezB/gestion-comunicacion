import { useState } from "react";
import { apiFetch } from "../../service/apiFetch";

export default function CreateUserModal({ onClose }) {
  const [form, setForm] = useState({
    primer_nombre: "",
    segundo_nombre: "",
    primer_apellido: "",
    segundo_apellido: "",
    numero_documento: "",
    telefono: "",
    fecha_ingreso: "",
    fecha_nacimiento: "",
    area: "",
    cargo: "",
    correo: "",
    nombre_contacto: "",
    telefono_contacto: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendForm = async () => {
    await apiFetch("/api/users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-198 p-6 flex flex-col gap-6">
        {/* Título */}
        <h2 className="text-[16px] font-bold text-[#203338]">
          Datos de la persona
        </h2>

        {/* Campos en grid de 2 columnas */}
        <div className="grid grid-cols-2 gap-4">
          <Field label="Primer nombre" required>
            <input
              type="text"
              name="primer_nombre"
              value={form.primer_nombre}
              onChange={handleChange}
              className="w-full bg-white p-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#184F5B]"
            />
          </Field>

          <Field label="Segundo nombre">
            <input
              type="text"
              name="segundo_nombre"
              value={form.segundo_nombre}
              onChange={handleChange}
              className="w-full bg-white p-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#184F5B]"
            />
          </Field>

          <Field label="Primer apellido" required>
            <input
              type="text"
              name="primer_apellido"
              value={form.primer_apellido}
              onChange={handleChange}
              className="w-full bg-white p-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#184F5B]"
            />
          </Field>

          <Field label="Segundo apellido">
            <input
              type="text"
              name="segundo_apellido"
              value={form.segundo_apellido}
              onChange={handleChange}
              className="w-full bg-white p-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#184F5B]"
            />
          </Field>

          <Field label="Número de documento" required>
            <input
              type="text"
              name="numero_documento"
              value={form.numero_documento}
              onChange={handleChange}
              className="w-full bg-white p-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#184F5B]"
            />
          </Field>

          <Field label="Teléfono" required>
            <input
              type="tel"
              name="telefono"
              value={form.telefono}
              onChange={handleChange}
              className="w-full bg-white p-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#184F5B]"
            />
          </Field>

          <Field label="Fecha de ingreso" required>
            <input
              type="date"
              name="fecha_ingreso"
              value={form.fecha_ingreso}
              onChange={handleChange}
              className="w-full bg-white p-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#184F5B]"
            />
          </Field>

          <Field label="Fecha de nacimiento" required>
            <input
              type="date"
              name="fecha_nacimiento"
              value={form.fecha_nacimiento}
              onChange={handleChange}
              className="w-full bg-white p-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#184F5B]"
            />
          </Field>

          <Field label="Área" required>
            <select
              name="area"
              value={form.area}
              onChange={handleChange}
              className="w-full bg-white p-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#184F5B]"
            >
              <option value="">Selecciona...</option>
              <option value="operaciones">Operaciones</option>
              <option value="finanzas">Finanzas</option>
              <option value="rrhh">RRHH</option>
            </select>
          </Field>

          <Field label="Cargo" required>
            <select
              name="cargo"
              value={form.cargo}
              onChange={handleChange}
              className="w-full bg-white p-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#184F5B]"
            >
              <option value="">Selecciona...</option>
              <option value="analista">Analista</option>
              <option value="coordinador">Coordinador</option>
              <option value="gerente">Gerente</option>
            </select>
          </Field>

          <Field label="Nombre de contacto para emergencias">
            <input
              type="text"
              name="nombre_contacto"
              value={form.nombre_contacto}
              onChange={handleChange}
              className="w-full bg-white p-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#184F5B]"
            />
          </Field>

          <Field label="Teléfono del contacto">
            <input
              type="tel"
              name="telefono_contacto"
              value={form.telefono_contacto}
              onChange={handleChange}
              className="w-full bg-white p-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#184F5B]"
            />
          </Field>
        </div>

        <Field label="Correo" required>
          <input
            type="email"
            name="correo"
            value={form.correo}
            onChange={handleChange}
            className="w-full bg-white p-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#184F5B]"
          />
        </Field>

        {/* Info */}
        <p className="text-[12px] text-[#184F5B]">
          El cargo define su lugar en el organigrama. El área al lugar donde
          pertenece.
        </p>
        <p className="text-[12px] text-[#184F5B]">
          Para {form.primer_nombre || "el usuario"} el sistema le creará un
          usurario y la contraseña para ingresar será su número de documento la
          primera vez, luego se solicitará a{" "}
          {form.primer_nombre || "el usuario"} cambiarla.
        </p>

        {/* Botones */}
        <div className="flex gap-3">
          <button
            className="bg-[#184F5B] text-white px-5 py-3 rounded-lg text-[14px] font-semibold hover:bg-[#133d47] transition-colors cursor-pointer"
            onClick={sendForm}
          >
            Crear usuario
          </button>
          <button
            onClick={onClose}
            className="bg-white text-[#203338] px-5 py-3 rounded-lg text-[14px] font-semibold border border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            Cancelar
          </button>
        </div>

        {/* Footer */}
        <p className="text-[10px] text-[#677779]">* Campos obligatorios</p>
      </div>
    </div>
  );
}

/* Componente reutilizable para cada campo */
function Field({ label, required, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] text-[#203338]">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
}
