import React from 'react'

export default function CardMedicine(props) {
    return (
      <div className='cardMedicine'>
          <h5 className='nameMedicine'>{props.nameMedicine}</h5>
          <p className='description'>{props.description}</p>
      </div>
    )
  
}
