import React from "react";

// components

import CardTable from "../../components/Cards/CardTable.js";
import Sidebar from "../../components/Sidebar/Sidebar.js";
import Scroll from "../../../components/smooth/SmoothScroll.js";

export default function Tables() {
  return (
    <>
      <Scroll/>
      <Sidebar />
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div>
      </div>
    </>
  );
}
