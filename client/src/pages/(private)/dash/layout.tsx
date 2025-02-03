import { Link, Outlet } from "react-router";

export const Layout = () => {
  return (
    <div>
      <Outlet />

      <footer>
        <nav>
          <ul>
            <li>
              <Link to="/dash/home">Home</Link>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}