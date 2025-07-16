import { Link, Outlet, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" && (
        <Link to="/home">
          <h1>Start Login Or Register</h1>
        </Link>
      )}
      <Outlet />
    </>
  );
}

export default Layout;
