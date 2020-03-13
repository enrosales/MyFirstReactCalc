import React, { Component } from "react";
//import "./Calculadora.css";
import "./Calc.css";

export default class Calculadora extends Component {
  render() {
    return (
      <div className="padre">
        <div className="contenedor">
          <div className="pantalla">
            <div className="operaciones"><p className="operations">12 x 2 - 3 + 5</p></div>
            <div className="resultado"><p className="results">54</p></div>
          </div>
          <div className="botones">
            <div className="fila-botones">
              <div className="btn-negro">
                C
              </div>
              <div className="btn-negro">+/-</div>
              <div className="btn-negro">%</div>
              <div className="btn-violeta">/</div>
            </div>
            <div className="fila-botones">
              <div className="btn-negro">7</div>
              <div className="btn-negro">8</div>
              <div className="btn-negro">9</div>
              <div className="btn-violeta">X</div>
            </div>
            <div className="fila-botones">
              <div className="btn-negro">4</div>
              <div className="btn-negro">5</div>
              <div className="btn-negro">6</div>
              <div className="btn-violeta">-</div>
            </div>
            <div className="fila-botones">
              <div className="btn-negro">1</div>
              <div className="btn-negro">2</div>
              <div className="btn-negro">3</div>
              <div className="btn-violeta">+</div>
            </div>
            <div className="fila-botones ultima">
              <div className="btn-negro">0</div>
              <div className="btn-negro">.</div>
              <div className="btn-negro">del</div>
              <div className="btn-amarillo">=</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
