import styled from 'styled-components';

const EstiloPagina = styled.div`
    position: relative;
    height: auto;
    width: 1220px;
    top: 110px;
    right: -50%;
    transform: translateX(-50%);
    justify-content: center;
    background-color: transparent;
    border: 1px solid #033473;
    box-shadow: 0px 0px 10px 0px #033473ac;
    border-radius: 7px;
    overflow: hidden;

    @media (max-width: 1219px) {
    width: 95%;
  }
`

export default function MoldeContainers ({ children }) {
    return(
        <EstiloPagina>
            {children}
        </EstiloPagina>
    );
}