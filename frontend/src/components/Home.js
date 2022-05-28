import React from 'react'
import AllPains from './chips_Content/AllPains'
import AllCardMedicine from './contentMedicine/AllCardMedicine'
import MedicalRecord from './MedicalRecord'

export default function Home(){

    return (
      <div className='home'>
        <MedicalRecord/>
        <AllPains nameSection="Malestares"/>
        <AllCardMedicine nameSection="Medicamentos"/>
      </div>
    )
}
