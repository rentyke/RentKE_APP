import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout: React.FC = () => {
  return (
    <div>
      <header></header>
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
