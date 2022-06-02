import React from 'react'
import AllChips from './chips_Content/AllChips'
import AllCardMedicine from './Medicine'
import MedicalRecord from './MedicalRecord'

export default function Home(){

    return (
      <>
        <MedicalRecord/>
        <AllChips nameSection1="Enfermedades" nameSection2="Sintomas"/>
        <AllCardMedicine nameSection="Medicamentos"/>
      </>
    )
}
