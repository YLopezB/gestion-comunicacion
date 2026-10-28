export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-10 flex items-center justify-center bg-slate-950/50 backdrop-blur-sm"
      role="status"
      aria-live="polite"
      aria-label="Cargando"
    >
      <div className="flex min-w-64 flex-col items-center rounded-2xl bg-white px-10 py-8 shadow-2xl">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-[#184F5B]" />
        <img
          src="/api/repository/default/logo.png"
          alt="Logo"
          className="h-24 w-24"
        />
        <h2 className="mt-5 text-lg font-semibold text-slate-800">
          Procesando solicitud
        </h2>

        <p className="mt-2 text-center text-sm text-slate-500">
          Estamos comunicándonos con el servidor.
        </p>

        <p className="mt-1 text-center text-xs text-slate-400">
          Por favor, espera un momento...
        </p>
      </div>
    </div>
  );
}
