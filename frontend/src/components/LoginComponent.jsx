import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCurrentUser } from "../features/auth/authSlice.js";
import { apiFetch } from "../service/api.js";

export default function LoginComponent() {
  const [form, setForm] = useState({
    user: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((form) => ({
      ...form,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      // 1. Enviar las credenciales al microservicio de autenticación.
      const response = await apiFetch(
        "/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        },
        dispatch,
      );

      const data = await response.json();
      // 2. Si las credenciales son incorrectas, permanecer en el login.
      if (!response.ok) {
        setError(data.message || "No fue posible iniciar sesión");
        return;
      }

      // 3. Verificar la cookie y obtener los datos del usuario.
      const authenticated = await dispatch(fetchCurrentUser()).unwrap();
      // 4. Entrar únicamente si Express confirma la sesión.
      if (!authenticated) {
        setError("No se pudo verificar la sesión");
        return;
      }

      navigate("/home", { replace: true });
    } catch {
      setError("No fue posible verificar la sesión con el servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full rounded-2xl bg-white p-7 shadow-2xl sm:p-9">
      <p className="text-xs font-semibold text-teal-900">Nombre de empresa</p>

      <p className="mt-2 text-sm text-slate-500">Eslogan de tu empresa</p>

      <h1 className="mt-4 text-2xl font-bold text-slate-800">
        Qué bueno verte.
      </h1>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <label className="block">
          <span className="mb-1 block text-xs text-slate-500">Usuario</span>

          <input
            name="user"
            type="text"
            placeholder="Ingresa tu usuario"
            autoComplete="username"
            className="w-full rounded-lg border border-slate-200 px-3 py-3 text-sm outline-none transition focus:border-teal-800 focus:ring-2 focus:ring-teal-800/20"
            value={form.user}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-xs text-slate-500">Contraseña</span>

          <input
            name="password"
            type="password"
            placeholder="Ingresa tu contraseña"
            autoComplete="current-password"
            className="w-full rounded-lg border border-slate-200 px-3 py-3 text-sm outline-none transition focus:border-teal-800 focus:ring-2 focus:ring-teal-800/20"
            value={form.password}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </label>

        {error && (
          <p role="alert" className="text-sm text-red-600">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-[#184F5B] px-4 py-3 font-semibold text-white transition hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Verificando sesión..." : "Iniciar sesión"}
        </button>
      </form>

      <p className="mt-6 text-center text-xs leading-5 text-slate-500">
        ¿No tienes acceso? Contacta con el administrador del sistema.
      </p>
    </section>
  );
}
