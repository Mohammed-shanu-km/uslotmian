import React from "react";
import Quizhome from "./Components/Quiezhome/Quizhome";
import Layout from "./Components/Routing/Routingpage";
import Routingpage from "./Components/Routing/Routingpage";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

import "primereact/resources/themes/lara-light-cyan/theme.css";

import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <RecoilRoot>
      <PrimeReactProvider>
        <Routingpage />
      </PrimeReactProvider>
    </RecoilRoot>
  );
};

export default App;
