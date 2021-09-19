import React from "react";
import './dashboard.scss'

function Dashboard() {
  const logo = (
    <img
      src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
      alt="logo"
    />
  );
  return (
    <div className="header">
      {logo}
      <h1>FundooNotes </h1>
    </div>
  );
}


export default Dashboard