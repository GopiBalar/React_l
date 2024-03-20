import React from "react";
import Navbar from "../Components/classComponents/Navbar";
import Class from "../Components/classComponents/Class";
import Counter from "../Components/classComponents/Counter";

function Home() {
  return (
    <div>
      <Navbar />
      <Class name="Gopi"  />
      {/* <Class name="Balar" /> */}
      <Counter />
    </div>
  );
}

export default Home;
