import React, { Component } from 'react'
import Pantalla from './Pantalla'
import Teclado from './Teclado'

export default class Calculadora extends Component {

  state = {
    ecuacion: '',
    resultado: 0
  }

clear(){
  this.setState({
    ecuacion: '',
    resultado: 0
  })
}

onButtonPress = event => {
  //console.log(event.target.innerHTML) para saber el valor del elem html clickeado
  let ecuacion = this.state.ecuacion;
  const pressedButton = event.target.innerHTML;
  if(pressedButton === 'C')
    return this.clear();
    else if( (pressedButton >= '1' && pressedButton <= '9') || pressedButton === '.')
      ecuacion = ecuacion += pressedButton;
      else if(['+','-','x','/','%','+/-'].includes(pressedButton)){
        if(pressedButton === '+/-'){
          ecuacion = ` ${ecuacion *= -1} `;
        }
        else if(pressedButton === 'x')
          ecuacion += `  ${'*'} `;
        else
          ecuacion += ` ${pressedButton} `;
      }
        else if(pressedButton === '='){
          try{
            /* eval function is not safe, but for internet reasons i do not use other string library*/
            const tryToEval = eval(ecuacion);
            const result = Number.isInteger(tryToEval) ? tryToEval : tryToEval.toFixed(4);
            this.setState({
              resultado: result
            })
          }catch(error){
            alert(error);
          }
        }
        else{ // si es la tecla Del borrar de atras hacia delante el ultimo caracter escrito
          ecuacion = ecuacion.trim();
          ecuacion = ecuacion.substr(0,ecuacion.length-1);
        }
        this.setState({
          ecuacion: ecuacion
        })
}

  render() {
    return (
      <div className='contenedor'>
        <main className="calculadora">
          <Pantalla 
          ecuacion={this.state.ecuacion}
          resultado={this.state.resultado}
          />
          <Teclado onButtonPress={this.onButtonPress}/>
        </main>
      </div>
    )
  }
}
