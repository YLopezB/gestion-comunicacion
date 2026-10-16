import Sidebar from "../components/Sidebar";
import Content from "../components/Content.jsx";

function Home() {
  return (
    <main className="sm:max-w-360 sm:m-auto bg-white sm:flex">
      <Sidebar />
      <Content />
    </main>
  );
}

export default Home;
