import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaPadrao from "./componentes/PaginaPadrao";
import Inicial from "./paginas/Inicial";
import SobreMim from "./paginas/SobreMim";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route index element={<Inicial/>}/>
          <Route path="sobremim" element={<SobreMim/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;
