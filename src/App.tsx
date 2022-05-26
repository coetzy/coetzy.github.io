import { Route, Routes } from "react-router-dom";

import About from "./About";
import Gallery from "./Gallery";
import Landing from "./Landing";
import Layout from "./Layout";

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Landing />} />
      <Route path="acerca" element={<About />} />
      <Route path=":type" element={<Gallery />} />
    </Route>
  </Routes>
);

export default App;
