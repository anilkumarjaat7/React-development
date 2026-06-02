import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const email = localStorage.getItem("userEmail");

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");

    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Dashboard</h1>

      <p className="mb-4">Welcome {email}</p>

      <button
        onClick={logout}
        className="bg-red-500 text-white px-5 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
