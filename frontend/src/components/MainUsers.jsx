import CardUser from "./cards/CardUser";

export default function MainUsers({ users }) {
  if (users.length === 0) {
    return <div>No hay usuarios</div>;
  }

  return (
    <>
      {users.map((u) => {
        return (
          <div
            className="py-3.5 flex flex-col sm:flex-row border-b border-gray-300 justify-between"
            key={u.user_id}
          >
            <CardUser
              nombre={u.primer_nombre + " " + u.primer_apellido}
              cargo={u.cargo}
              foto={u.foto}
            />
            <div className="text-[12px] text-[#184F5B]">
              <p>{u.cargo}</p>
              <p>{u.is_active ? "✓ Activo" : "x Inactivo"}</p>
            </div>
            <button className="bg-white py-2.25 px-3 rounded-lg border border-gray-300 text-[12px] text-[#184F5B]">
              Editar permisos
            </button>
          </div>
        );
      })}
    </>
  );
}
