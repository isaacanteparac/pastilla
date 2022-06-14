import React from "react";


import {
  DivLeft,
  DivLogo,
  LabelLogo,
  ContentLeftD,
  Section,
  TitleSection,
  ContentSection,
  OptionLabelLine,
  OptionLabelCircle,
  ContentSectionCircle,
} from "./styleLeft";

export default function ContentLeft() {
  return (
    <DivLeft>
      <DivLogo>
        <LabelLogo>Pastilla</LabelLogo>
      </DivLogo>
      <ContentLeftD>
        <Section>
          <TitleSection>Busca un síntoma por su letra inicial</TitleSection>
          <ContentSectionCircle>
            <OptionLabelCircle>a</OptionLabelCircle>
          </ContentSectionCircle>
        </Section>
        <Section>
          <TitleSection>sintomas</TitleSection>
          <ContentSection>
            <OptionLabelLine>
              dolor en articulaciones dolor en articulaciones dolor en
              articulaciones
            </OptionLabelLine>
          </ContentSection>
        </Section>
      </ContentLeftD>
    </DivLeft>
  );
}
