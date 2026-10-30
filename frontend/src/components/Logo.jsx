import { useSelector } from "react-redux";

export default function Logo() {
  const company = useSelector((state) => state.company);
  return <img src={company.company.logo} alt="Logo" className="h-24 w-24" />;
}
