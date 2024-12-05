// src/layouts/CustomerLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";

const CustomerLayout = () => {
  return (
    <div>
      {/* <header>
        <h1>Customer Portal</h1>
      </header> */}
      <main>
        <Outlet />
      </main>
      {/* <footer>
        <p>Customer Footer</p>
      </footer> */}
    </div>
  );
};

export default CustomerLayout;
