import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <header>
        <h1>Admin Dashboard</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Admin Footer</p>
      </footer>
    </div>
  );
};

export default AdminLayout;
