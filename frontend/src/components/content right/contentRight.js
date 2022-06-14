import React from "react";
import {
  DivRight,
  Section,
  TitleSection,
  ContentRightD,
  ContentSection,
} from "./styleRight";

import MedicalRecord from "./MedicalRecord";
import Doctor from "./Doctor";

export default function ContentRight(props) {
  return (
    <DivRight>
      <ContentRightD>
        <Section>
          <TitleSection>Ficha medica</TitleSection>
          <MedicalRecord />
        </Section>
        <Section>
          <TitleSection>Ficha medica</TitleSection>
          <ContentSection> {doctors?.map((doctor) => (
        <Doctor
          nameTitle={doctor.name}
          description={doctor.description}
          name1="Especialidad"
          contentName1={doctor.area}
          name2="Telefono"
          contentName2={doctor.phone}
          name3="Email"
          contentName3={doctor.email}
        /></ContentSection>
        </Section>
      </ContentRightD>
    </DivRight>
  );
}
