import React from 'react'
import clasees from'./Card.module.css'

const Card = (props) => {
  return (
    <div className={`${clasees.card} ${props.className} ${props.className}`}>{props.children}</div>
  )
}

export default Card