import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaPadrao from "./componentes/PaginaPadrao";
import Inicial from "./paginas/Inicial";
import SobreMim from "./paginas/SobreMim";
import Portfolio from "./paginas/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route index element={<Inicial/>}/>
          <Route path="sobremim" element={<SobreMim/>}/>
          <Route path="portfolio" element={<Portfolio/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;
