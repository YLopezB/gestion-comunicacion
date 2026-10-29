import CardUser from "./cards/CardUser";
import BtnEdit from "./buttons/BtnEdit";

export default function MainUsers({
  users,
  onEdit,
  handleActive,
  handleRestart,
}) {
  if (users.length === 0) {
    return <div>No hay usuarios</div>;
  }

  return (
    <>
      {users.map((u) => (
        <div
          className="py-3.5 flex flex-col sm:flex-row border-b border-gray-300 justify-between"
          key={u.user_id}
        >
          <CardUser
            nombre={`${u.primer_nombre} ${u.primer_apellido}`}
            cargo={u.cargo}
            foto={u.foto}
          />

          <div className="text-[12px] text-[#184F5B]">
            <p>{u.area}</p>
            <p>{u.is_active ? "✓ Activo" : "x Inactivo"}</p>
          </div>

          <div className="flex gap-3">
            <BtnEdit
              name={"Restaurar"}
              onClick={() => handleRestart(u.user_id)}
            />
            <BtnEdit
              name={u.is_active ? "Desactivar" : "Activar"}
              onClick={() => handleActive(u)}
            />
            <BtnEdit name="Editar" onClick={() => onEdit(u)} />
          </div>
        </div>
      ))}
    </>
  );
}
