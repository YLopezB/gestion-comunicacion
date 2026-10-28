import CardUserActive from "../components/cards/CardUserActive";

export default function HeaderUsers({ users }) {
  const active = users.filter((user) => user.is_active).length;

  return (
    <div className="flex gap-3.5 flex-row justify-around">
      <CardUserActive number={users.length} description="Usuarios" />

      <CardUserActive number={active} description="Activos" />

      <CardUserActive number={users.length - active} description="Inactivos" />
    </div>
  );
}
