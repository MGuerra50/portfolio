import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaPadrao from "./componentes/PaginaPadrao";
import Inicial from "./paginas/Inicial";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route index element={<Inicial/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;
