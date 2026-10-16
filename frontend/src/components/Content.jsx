import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Content() {
  return (
    <div className="min-w-0 w-full">
      <Header />
      <div className="min-h-0 flex-1 overflow-y-auto bg-[#DCE3E0] sm:p-10 p-5">
        <Outlet />
      </div>
    </div>
  );
}
