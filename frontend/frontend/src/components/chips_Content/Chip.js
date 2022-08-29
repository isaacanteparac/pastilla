import React from 'react'

export default function Chip(props) {
    return (
        <div className='chips'>
            <label className='nameChip'>
                {props.namePain}
            </label>
        </div>
    )
  }