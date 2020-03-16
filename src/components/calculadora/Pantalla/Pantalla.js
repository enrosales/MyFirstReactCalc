import React from 'react'
import Operaciones from './Operaciones'
import Resultados from './Resultados'

const pantalla = (props) => (
    <section className="pantalla">
        <Operaciones>{props.ecuacion}</Operaciones>
        <Resultados>{props.resultado}</Resultados>
    </section>
)

export default pantalla