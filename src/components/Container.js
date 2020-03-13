import React, { Component } from 'react'
import Navigation from './Navigation';
import Calculadora from './Calculadora';


export default class Container extends Component {
    render() {
        return (
            <div className="Main">
                <Navigation titulo="Mi calculadora" />
                < Calculadora />
            </div>
        )
    }
}
