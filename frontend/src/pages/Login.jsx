import { useSelector } from "react-redux";
import CopyRight from "../components/CopyRight.jsx";
import LoginComponent from "../components/LoginComponent.jsx";
import Logo from "../components/Logo.jsx";

export default function Login() {
  const company = useSelector((state) => state.company);

  return (
    <main className="relative flex min-h-screen items-center justify-center px-4 py-10 max-w-360 m-auto">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url(${company.company.photo})`,
        }}
      />

      <div className="absolute inset-0 bg-[#183438]/43" />

      <div className="relative z-10 flex w-full max-w-md flex-col items-center">
        <div className="mb-7 flex items-center gap-6">
          <Logo />
        </div>
        <LoginComponent />
        <p className="mt-7 max-w-sm text-center text-lg text-white">
          Una solución simple a la comunicación de tu organización
        </p>
      </div>
      <CopyRight style="absolute z-10 text-center bottom-4 text-white text-sm" />
    </main>
  );
}
