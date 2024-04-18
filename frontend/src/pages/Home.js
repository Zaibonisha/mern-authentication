import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome</h1>
      <h2>Click <Link to="/customer">here</Link> to view customers.</h2>
    </div>
  );
}

export default Home;
