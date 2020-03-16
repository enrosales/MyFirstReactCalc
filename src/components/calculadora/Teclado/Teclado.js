import React from 'react'
import FilaBotones from './FilaBotones'
import Boton from './Boton'

const teclado = (props) => (
    <section className="teclado">
        <FilaBotones>
            <Boton onButtonPress={props.onButtonPress}>C</Boton>
            <Boton onButtonPress={props.onButtonPress}>+/-</Boton>  
            <Boton onButtonPress={props.onButtonPress}>%</Boton>
            <Boton onButtonPress={props.onButtonPress} type='operador'>/</Boton>
        </FilaBotones >
        <FilaBotones>
            <Boton onButtonPress={props.onButtonPress}>7</Boton>
            <Boton onButtonPress={props.onButtonPress}>8</Boton>  
            <Boton onButtonPress={props.onButtonPress}>9</Boton>
            <Boton onButtonPress={props.onButtonPress} type='operador'>x</Boton>  
        </FilaBotones >
        <FilaBotones>
            <Boton onButtonPress={props.onButtonPress}>4</Boton>
            <Boton onButtonPress={props.onButtonPress}>5</Boton>  
            <Boton onButtonPress={props.onButtonPress}>6</Boton>
            <Boton onButtonPress={props.onButtonPress} type='operador'>-</Boton>   
        </FilaBotones >
        <FilaBotones>
            <Boton onButtonPress={props.onButtonPress}>1</Boton>
            <Boton onButtonPress={props.onButtonPress}>2</Boton>  
            <Boton onButtonPress={props.onButtonPress}>3</Boton>
            <Boton onButtonPress={props.onButtonPress} type='operador'>+</Boton> 
        </FilaBotones >
        <FilaBotones>
            <Boton onButtonPress={props.onButtonPress}>0</Boton>
            <Boton onButtonPress={props.onButtonPress}>.</Boton>  
            <Boton onButtonPress={props.onButtonPress}>Del</Boton>
            <Boton onButtonPress={props.onButtonPress} type='resultado'>=</Boton>  
        </FilaBotones >
    </section>
)

export default teclado