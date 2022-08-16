import React from "react";
import Pokemons from "../../components/Pokemons";

function App() {
  return (
    <>
      <div className="dv-line dv-center">
        <div className="dv-column">
          <div className="dv-padding-mdpi">
            <Pokemons />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
