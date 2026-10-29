import Title from "../../components/Title";
import userPlusIcon from "../../assets/icons/user-plus.png";
import BtnCrear from "../../components/buttons/BtnCrear";
import SearchInput from "../../components/filters/SearchInput";
import FilterSelect from "../../components/filters/FilterSelect";
import HeaderUsers from "../../components/HeaderUsers";
import MainUsers from "../../components/MainUsers";
import { useEffect, useState } from "react";
import { apiFetch } from "../../service/apiFetch";
import Loading from "../../components/Loading";
import CreateUserModal from "../../components/modals/UserModal";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [searchArea, setSearchArea] = useState("");

  const [modalCreateUser, setModalCreateUser] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const [active, setActive] = useState(false);

  const firstFilter = users.filter(
    (user) =>
      user.primer_nombre?.toLowerCase().includes(search.trim().toLowerCase()) ||
      user.segundo_nombre
        ?.toLowerCase()
        .includes(search.trim().toLowerCase()) ||
      user.primer_apellido
        ?.toLowerCase()
        .includes(search.trim().toLowerCase()) ||
      user.segundo_apellido
        ?.toLowerCase()
        .includes(search.trim().toLowerCase()),
  );

  const secondFilter = firstFilter.filter((user) => {
    const matchesStatus =
      status === "" || user.is_active === (status === "true");

    const matchesArea = searchArea === "" || user.area === searchArea;

    return matchesStatus && matchesArea;
  });

  useEffect(() => {
    async function getUsers() {
      const result = await apiFetch("/api/users/all");
      setUsers(result);
      setLoading(false);
    }
    getUsers();
  }, [modalCreateUser, active]);

  const handleActive = async (u) => {
    const response = await apiFetch("/api/users/isactive", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: u.user_id,
        isActive: !u.is_active,
      }),
    });
    setActive(!active);
    alert(response.message);
  };

  const handleRestart = async (id) => {
    console.log(id)
    const response = await apiFetch("/api/users/restart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: id,
      }),
    });
    alert(response.message);
    setActive(!active);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex gap-5.75 flex-col">
      <div className="flex flex-col sm:flex sm:flex-row sm:justify-between gap-5 sm:items-center">
        <Title ruta="ADMINISTRACIÓN/Usuarios" title="Usuarios y Permisos" />
        <BtnCrear
          icon={userPlusIcon}
          name="Crear Usuario"
          onClick={() => {
            setSelectedUser(null);
            setModalCreateUser(true);
          }}
        />
      </div>
      <HeaderUsers users={users} />
      <div className="p-4 sm:p-6 flex flex-col gap-4.5 bg-white rounded-[14px]">
        <div className="flex flex-col sm:flex-row justify-around gap-3">
          <SearchInput
            placeholder="Nombre por nombre..."
            name="Buscar nombre"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <FilterSelect
            name="Área"
            value={searchArea}
            onChange={(event) => setSearchArea(event.target.value)}
            options={[
              { value: "", label: "Todas las áreas" },
              { value: "facturacion", label: "Facturación" },
              { value: "otra", label: "Otra" },
            ]}
          />
          <FilterSelect
            name="Activo"
            value={status}
            onChange={(event) => setStatus(event.target.value)}
            options={[
              { value: "", label: "Todos" },
              { value: "true", label: "Activo" },
              { value: "false", label: "Inactivo" },
            ]}
          />
        </div>
        <hr className="h-px border-0.5 border-gray-300" />
        <MainUsers
          users={secondFilter}
          onEdit={(user) => {
            setSelectedUser(user);
            setModalCreateUser(true);
          }}
          handleActive={handleActive}
          handleRestart={handleRestart}
        />
      </div>
      {modalCreateUser && (
        <CreateUserModal
          key={selectedUser?.user_id ?? "new-user"}
          user={selectedUser}
          onClose={() => setModalCreateUser(false)}
        />
      )}
    </div>
  );
}
