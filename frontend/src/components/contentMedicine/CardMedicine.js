import React from 'react'

export default function CardMedicine(props) {
    return (
      <div className='cardMedicine'>
          <label className='nameMedicine'>{props.nameMedicine}</label>
          <p className='description'>{props.description}</p>
          <label className='viewText'>leer mas...</label>
      </div>
    )
  
}
