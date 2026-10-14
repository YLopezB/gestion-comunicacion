import api from "../service/api.js";
import LoginComponent from "../component/LoginComponent.jsx";

const indexImage = api.apiimage("/repository/default/index_image.png");
const logoImage = api.apiimage("/repository/default/logo.png");

export default function Login() {
  return (
    <main className="relative flex min-h-screen items-center justify-center  px-4 py-10 bg-black">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url(${indexImage})`,
        }}
      />

      <div className="absolute inset-0 bg-[#183438]/43" />

      <div className="relative z-10 flex w-full max-w-md flex-col items-center">
        <div className="mb-7 flex items-center gap-6">
          <img src={logoImage} alt="Logo" className="h-24 w-24" />
        </div>
        <LoginComponent />
        <p className="mt-7 max-w-sm text-center text-lg text-white">
          Una solución simple a la comunicación de tu organización
        </p>
      </div>
      <p className="absolute z-10 text-center text-xs text-white bottom-4">
        © 2026 Yeison Andres Lopez.
      </p>
    </main>
  );
}
