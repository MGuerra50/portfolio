import { Outlet } from "react-router-dom";
import Cabecalho from "../Cabecalho";
import Rodape from "../Rodape";

export default function PaginaPadrao () {
    return (
        <main>
            <Cabecalho/>

            <Outlet/>

            <Rodape/>
        </main>
    );
}