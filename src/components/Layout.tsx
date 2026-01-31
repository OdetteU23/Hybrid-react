import { Link, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { UseUserContext } from "../hooks/ContextHooks";

const Layout = () => {
  const { user, handleAutoLogin, handleLogout } = UseUserContext();

  useEffect(() => {
    handleAutoLogin();
  }, [handleAutoLogin]);

  return (
    <div>
      <nav>
        <ul>
          {/* Home link */}
          <li>
            <Link to="/">Home</Link>
          </li>

          {/* Show Profile and Upload links only when user is logged in */}
          {user && (
            <>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
              <li>
                <Link to="/upload">Upload</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          )}

          {/* Show login option when user is not logged in */}
          {!user && (
            <li>
              <span>Please login to access all features</span>
            </li>
          )}
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
