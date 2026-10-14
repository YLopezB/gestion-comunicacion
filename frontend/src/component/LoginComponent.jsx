import { useState } from "react";

export default function LoginComponent() {
  const [form, setForm] = useState({
    user: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="w-full rounded-2xl bg-white p-7 shadow-2xl sm:p-9">
      <p className="text-xs font-semibold text-teal-900">
        Nombre de empresa
      </p>

      <p className="mt-2 text-sm text-slate-500">
        Eslogan de tu empresa
      </p>

      <h1 className="mt-4 text-2xl font-bold text-slate-800">
        Qué bueno verte.
      </h1>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <label className="block">
          <span className="mb-1 block text-xs text-slate-500">
            Usuario
          </span>

          <input
            name="user"
            type="text"
            placeholder="Ingresa tu usuario"
            className="w-full rounded-lg border border-slate-200 px-3 py-3 text-sm outline-none transition focus:border-teal-800 focus:ring-2 focus:ring-teal-800/20"
            value={form.user}
            onChange={handleChange}
            required
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-xs text-slate-500">
            Contraseña
          </span>

          <input
            name="password"
            type="password"
            placeholder="Ingresa tu contraseña"
            className="w-full rounded-lg border border-slate-200 px-3 py-3 text-sm outline-none transition focus:border-teal-800 focus:ring-2 focus:ring-teal-800/20"
            value={form.password}
            onChange={handleChange}
            required
          />
        </label>

        <button
          type="submit"
          className="w-full rounded-lg bg-[#184F5B] px-4 py-3 font-semibold text-white transition hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2"
        >
          Iniciar sesión
        </button>
      </form>

      <p className="mt-6 text-center text-xs leading-5 text-slate-500">
        ¿No tienes acceso? Contacta con el administrador del sistema.
      </p>
    </section>
  );
}

