//import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          {/* Home link */}
          <li>
            <Link to= "/">Home</Link>
          </li>

          {/* Profile link */}

          <li>
            <Link to= "/profile">Profile</Link>
          </li>

          {/* Upload link */}
          <li>
            <Link to= "/upload">Upload</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>

      </div>
  );
}

export default Layout;
