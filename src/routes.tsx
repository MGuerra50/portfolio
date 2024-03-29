import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaPadrao from "./componentes/PaginaPadrao";
import Inicial from "./paginas/Inicial";
import SobreMim from "./paginas/SobreMim";
import Portfolio from "./paginas/Portfolio";
import Contato from "./paginas/Contato";
import PaginaNaoEncontrada from "./componentes/PaginaNaoEncontrada/Index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route index element={<Inicial/>}/>
          <Route path="sobremim" element={<SobreMim/>}/>
          <Route path="portfolio" element={<Portfolio/>}/>
          <Route path="contato" element={<Contato/>}/>
          <Route path="*" element={<PaginaNaoEncontrada/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;
