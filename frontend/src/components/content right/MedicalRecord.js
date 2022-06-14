import React from 'react'

import {
    MedicalRecordD,
    DivInputMedicalRecord,
    LabelInput,
    InputMedicalRecord,
    DivButton,
    ButtonSent
  } from "./styleRight";

export default function MedicalRecord() {

    return (
      <MedicalRecordD>
          <form>
              <DivInputMedicalRecord>
                  <LabelInput>Edad: </LabelInput>
                  <InputMedicalRecord className='inputMedicalRecord' type="number"/>
              </DivInputMedicalRecord>
              <DivInputMedicalRecord>
                  <LabelInput>Peso: </LabelInput>
                  <InputMedicalRecord className='inputMedicalRecord' type="number"/>
              </DivInputMedicalRecord>
              <DivInputMedicalRecord>
                  <LabelInput>Sexo: </LabelInput>
                  <InputMedicalRecord className='inputMedicalRecord' type="number"/>
              </DivInputMedicalRecord>
              <DivButton>
                <ButtonSent type="submit">Send</ButtonSent  >
              </DivButton>
          </form>

      </MedicalRecordD>
    )
}
