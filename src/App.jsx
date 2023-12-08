// import { useState } from "react";
import "./App.css";
import TopNavbar from "./components/top_navbar/TopNavbar";
import TopNavbar2 from "./components/top_navbar_2/TopNavbar2";
import TopNavbar3 from "./components/top_navbar_3/TopNavbar3";
import AllFeatures from "./features/AllFeatures";

function App() {
  return (
    <>
      <div>
        <TopNavbar />
        <TopNavbar2 />
        <TopNavbar3 />
        <AllFeatures/>
      </div>
    </>
  );
}

export default App;
