import './Maqueta.css'
import Menu from './Menu.jsx';
import Cartilla from './Cartilla';
function Saludo() {
    return(
      <div>
         <h1>Saludos</h1>
      </div>  
    );
}
function Maqueta() {
    return(
        <div className="padre">
            <div className="c1"><Saludo></Saludo></div>
            <div className="c2"><Menu></Menu></div>
            <div className="c3"><Cartilla></Cartilla></div>
            <div className="c4">4</div>
            <div className="c5">5</div>
        </div>
    )
}
export default Maqueta;