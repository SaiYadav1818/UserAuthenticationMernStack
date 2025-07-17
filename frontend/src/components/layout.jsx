import { Link, Outlet, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      {location.pathname === "/" && (
        <div className="text-center mb-4 p-4 border rounded bg-white shadow">
          <h2 className="mb-3">Welcome to the Auth App</h2>
          <p className="mb-4">Click below to get started</p>
          <Link to="/home" className="btn btn-primary px-4">
            Start Login or Register
          </Link>
        </div>
      )}
      <Outlet />
    </div>
  );
}

export default Layout;

