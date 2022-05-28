import React from 'react'

export default function MedicalRecord() {

    return (
      <div className='medicalRecord'>
          <div className='divTopMedicalRecord'>
              <label className='TitleSection'>Ficha Medica</label>
          </div>
          <form>
              <div className='contentInputMedicalRecord'>
                  <label>Edad: </label>
                  <input className='inputMedicalRecord' type="number"/>
              </div>
              <div className='contentInputMedicalRecord'>
                  <label>Peso: </label>
                  <input className='inputMedicalRecord' type="number"/>
              </div>
              <div className='divButton'>
                <button type="submit">Send</button>
              </div>
          </form>

      </div>
    )
}
