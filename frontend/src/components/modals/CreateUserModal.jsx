import { useState } from "react";

export default function CreateUserModal({ onClose }) {
  const [form, setForm] = useState({
    primerNombre: "",
    segundoNombre: "",
    primerApellido: "",
    segundoApellido: "",
    documento: "",
    telefono: "",
    fechaIngreso: "",
    fechaNacimiento: "",
    area: "",
    cargo: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-lg p-6 flex flex-col gap-6">
        {/* Título */}
        <h2 className="text-[16px] font-bold text-[#203338]">
          Datos de la persona
        </h2>

        {/* Campos en grid de 2 columnas */}
        <div className="grid grid-cols-2 gap-4">
          <Field label="Primer nombre" required>
            <input
              type="text"
              name="primerNombre"
              value={form.primerNombre}
              onChange={handleChange}
              className="w-full bg-white p-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#184F5B]"
            />
          </Field>

          <Field label="Segundo nombre">
            <input
              type="text"
              name="segundoNombre"
              value={form.segundoNombre}
              onChange={handleChange}
              className="w-full bg-white p-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#184F5B]"
            />
          </Field>

          <Field label="Primer apellido" required>
            <input
              type="text"
              name="primerApellido"
              value={form.primerApellido}
              onChange={handleChange}
              className="w-full bg-white p-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#184F5B]"
            />
          </Field>

          <Field label="Segundo apellido">
            <input
              type="text"
              name="segundoApellido"
              value={form.segundoApellido}
              onChange={handleChange}
              className="w-full bg-white p-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#184F5B]"
            />
          </Field>

          <Field label="Número de documento" required>
            <input
              type="text"
              name="documento"
              value={form.documento}
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
              name="fechaIngreso"
              value={form.fechaIngreso}
              onChange={handleChange}
              className="w-full bg-white p-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#184F5B]"
            />
          </Field>

          <Field label="Fecha de nacimiento" required>
            <input
              type="date"
              name="fechaNacimiento"
              value={form.fechaNacimiento}
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
        </div>

        {/* Foto de perfil */}
        <div className="flex flex-col gap-2">
          <p className="text-[12px] font-semibold text-[#203338]">
            Foto de perfil{" "}
            <span className="text-[#677779] font-normal">(opcional)</span>
          </p>
          <div className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-xl p-6 bg-[#F5F4EF]">
            <p className="text-[11px] text-[#677779]">
              JPG o PNG · Máximo 5 MB
            </p>
            <button className="text-[12px] text-[#184F5B] font-semibold">
              Seleccionar archivo
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-1 p-4 bg-[#EEF4F3] rounded-xl">
          <p className="text-[12px] text-[#184F5B]">
            El cargo define su lugar en el organigrama. El área al lugar donde
            pertenece.
          </p>
          <p className="text-[12px] text-[#184F5B]">
            {form.primerNombre || "El usuario"} creará su contraseña al aceptar
            la invitación. No necesitas asignar una contraseña inicial.
          </p>
        </div>

        {/* Botones */}
        <div className="flex gap-3">
          <button className="bg-[#184F5B] text-white px-5 py-3 rounded-lg text-[14px] font-semibold hover:bg-[#133d47] transition-colors">
            Crear usuario
          </button>
          <button
            onClick={onClose}
            className="bg-white text-[#203338] px-5 py-3 rounded-lg text-[14px] font-semibold border border-gray-300 hover:bg-gray-50 transition-colors"
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
      <label className="text-[11px] font-semibold text-[#203338]">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
}
